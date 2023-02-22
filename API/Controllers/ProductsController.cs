using System.Text.Json;
using API.Data;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
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
        public async Task<ActionResult<PagedList<Product>>> GetProducts([FromQuery] ProductParams productParams)
        {

            IQueryable<Product>? _query = _context.Products
            .Sort(productParams.OrderBy)
            .Search(productParams.SearchTerm)
            .Filter(productParams.Brands, productParams.Types)
            .AsQueryable();

            PagedList<Product>? response = await PagedList<Product>.ToPagedList(_query, productParams.PageNumber, productParams.PageSize);

            Response.AddPaginationHeader(response.MetaData);

            return response;

            //Ok(value: product);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {

            var products = await _context.Products.FindAsync(id);

            if (products == null) return NotFound();

            return products;
        }

        [HttpGet("filters")]
        public async Task<IActionResult> GetFilters()
        {
            List<string>? brands = await _context.Products.Select(p => p.Brand).Distinct().ToListAsync();
            List<string>? types = await _context.Products.Select(p => p.Type).Distinct().ToListAsync();

            return Ok(new { brands, types });
        }
    }
}