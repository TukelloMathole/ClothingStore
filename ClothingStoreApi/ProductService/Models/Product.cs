﻿using System;

namespace ProductService.Models
{
    public class Product
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string? Category { get; set; }
        public string? Subcategory { get; set; }
        public string? ImageFileName { get; set; }
        public string? Description { get; set; }
    }
}
