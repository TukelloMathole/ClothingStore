using ProductService.Dtos;

namespace ProductService.Services
{
    public interface IProductService
    {
        Task<ProductDto> CreateProductAsync(ProductCreateDto dto, HttpRequest request);
        Task<IEnumerable<ProductDto>> GetAllAsync(HttpRequest request);
        Task<ProductDto?> GetByIdAsync(Guid id, HttpRequest request);
    }
}
