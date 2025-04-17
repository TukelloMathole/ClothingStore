using System;

namespace ProductService.Dtos
{
    public class ProductDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string? Category { get; set; }
        public string? Subcategory { get; set; }
        public string? ImageUrl { get; set; }
        public string? Description { get; set; }
    }
}
 