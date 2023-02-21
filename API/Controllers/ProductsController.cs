using API.Data;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// using API.BaseApiController

namespace API.Controllers
{


    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts(string orderBy = "name")
        {

            IQueryable<Product>? _query = _context.Products
            .Sort(orderBy)
            .AsQueryable();

            List<Product>? product = await _query.ToListAsync();

            return Ok(value: product);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {

            var products = await _context.Products.FindAsync(id);

            if (products == null) return NotFound();

            return products;
        }
    }
}