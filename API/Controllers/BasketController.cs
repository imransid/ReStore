using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;
        public BasketController(StoreContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if (basket == null) return NotFound();
            BasketDto response = new BasketDto {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(item => new BasketItemDto{
                    ProductId = item.ProductId,
                    PictureUrl = item.Product.PictureUrl,
                    Brand = item.Product.Brand,
                    Type = item.Product.Type,
                    Quantity = item.Quantity,
                    Name = item.Product.Name,
                    Price = item.Product.Price
                }).ToList()
            };

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {

            // get basket || create basket
            var basket = await RetrieveBasket();
            if (basket == null) basket = CreateBasket();

            // get product not find application exits.
            var product = await _context.Products.FindAsync(productId);
            if(product == null) return NotFound(); 

            // add item
            basket.AddItem(product, quantity);

            // save change
            var result = await _context.SaveChangesAsync() > 0;
            if(result) return StatusCode(201);
            return BadRequest(new ProblemDetails{Title = "problem saving to item on the basket."});
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            // get basket
            // remove basket or reduce quantity
            // save change
            return Ok();
        }

        private async Task<Basket> RetrieveBasket()
        {
            return await _context.Baskets
            .Include(i => i.Items)
            .ThenInclude(p => p.Product)
            .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
        }

        private Basket? CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.Now.AddDays(30) };
            Response.Cookies.Append("buyerId", buyerId, cookieOptions);
            var basket = new Basket { BuyerId = buyerId };

            _context.Baskets.Add(basket);
            return basket;
        }

    }
}