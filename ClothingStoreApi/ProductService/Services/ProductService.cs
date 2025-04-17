using ProductService.Data;
using ProductService.Dtos;
using ProductService.Models;
using Microsoft.EntityFrameworkCore;

namespace ProductService.Services
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _env;

        public ProductService(ApplicationDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        public async Task<ProductDto> CreateProductAsync(ProductCreateDto dto, HttpRequest request)
        {
            var product = new Product
            {
                Id = Guid.NewGuid(),
                Name = dto.Name,
                Price = dto.Price,
                Category = dto.Category,
                Subcategory = dto.Subcategory,
                Description = dto.Description
            };

            if (dto.Image != null && dto.Image.Length > 0)
            {
                var extension = Path.GetExtension(dto.Image.FileName);
                var fileName = $"{Guid.NewGuid()}{extension}";
                var imagesFolder = Path.Combine(_env.WebRootPath, "images");
                var filePath = Path.Combine(imagesFolder, fileName);

                // Ensure the directory exists
                if (!Directory.Exists(imagesFolder))
                {
                    Directory.CreateDirectory(imagesFolder);
                }

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await dto.Image.CopyToAsync(stream);
                }

                product.ImageFileName = fileName;
            }

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return MapToDto(product, request);
        }

        public async Task<IEnumerable<ProductDto>> GetAllAsync(HttpRequest request)
        {
            var products = await _context.Products.ToListAsync();
            return products.Select(p => MapToDto(p, request));
        }

        public async Task<ProductDto?> GetByIdAsync(Guid id, HttpRequest request)
        {
            var product = await _context.Products.FindAsync(id);
            return product == null ? null : MapToDto(product, request);
        }

        private ProductDto MapToDto(Product product, HttpRequest request)
        {
            return new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                Category = product.Category,
                Subcategory = product.Subcategory,
                Description = product.Description,
                ImageUrl = !string.IsNullOrWhiteSpace(product.ImageFileName)
                    ? $"{request.Scheme}://{request.Host}/images/{product.ImageFileName}"
                    : null
            };
        }
    }
}
