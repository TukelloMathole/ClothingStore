using Microsoft.AspNetCore.Http;

namespace ProductService.Dtos
{
    public class ProductCreateDto
    {
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string? Category { get; set; }
        public string? Subcategory { get; set; }
        public IFormFile? Image { get; set; }
        public string? Description { get; set; }
    }
}
