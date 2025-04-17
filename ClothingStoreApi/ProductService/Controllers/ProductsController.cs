using Microsoft.AspNetCore.Mvc;
using ProductService.Dtos;
using ProductService.Services;

namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromForm] ProductCreateDto dto)
        {
            var product = await _productService.CreateProductAsync(dto, Request);
            return Ok(product);
        }

        [HttpGet("getproducts")]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _productService.GetAllAsync(Request);
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var product = await _productService.GetByIdAsync(id, Request);
            if (product == null) return NotFound();
            return Ok(product);
        }
    }
}
