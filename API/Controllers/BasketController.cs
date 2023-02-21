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


        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if (basket == null) return NotFound();
            BasketDto response = MapBasketToDto(basket);

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<BasketDto>> AddItemToBasket(int productId, int quantity)
        {

            // get basket || create basket
            Basket? basket = await RetrieveBasket();
            if (basket == null) basket = CreateBasket();

            // get product not find application exits.
            Product? product = await _context.Products.FindAsync(productId);
            if (product == null) return NotFound();

            // add item
            basket.AddItem(product, quantity);

            // save change
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return CreatedAtRoute("GetBasket", MapBasketToDto(basket));
            return BadRequest(new ProblemDetails { Title = "problem saving to item on the basket." });
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            // get basket
            var basket = await RetrieveBasket();
            if (basket == null) return NotFound();
            // remove basket or reduce quantity
            basket.RemoveItem(productId, quantity);
            // save change
            bool result = await _context.SaveChangesAsync() > 0;
            if (result) return CreatedAtRoute("GetBasket", MapBasketToDto(basket));

            return BadRequest(new ProblemDetails
            {
                Title = "Problem removing from basket"
            });
        }


        [HttpDelete("remove-all")]
        public async Task<ActionResult> RemoveBasketsALLItem()
        {

            Basket? findResult = await _context.Baskets.FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
            Basket? basket = await RetrieveBasket();
            if (findResult != null) basket.RemoveAllItem(findResult.Id);
            bool saveResult = await _context.SaveChangesAsync() > 0;
            if (saveResult) return Ok();

            return BadRequest(new ProblemDetails
            {
                Title = "Problem removing from basket"
            });

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
            string? buyerId = Guid.NewGuid().ToString();
            CookieOptions? cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.Now.AddDays(30) };
            Response.Cookies.Append("buyerId", buyerId, cookieOptions);
            Basket? basket = new Basket { BuyerId = buyerId };

            _context.Baskets.Add(entity: basket);
            return basket;
        }

        private BasketDto MapBasketToDto(Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    PictureUrl = item.Product.PictureUrl,
                    Brand = item.Product.Brand,
                    Type = item.Product.Type,
                    Quantity = item.Quantity,
                    Name = item.Product.Name,
                    Price = item.Product.Price
                }).ToList()
            };
        }

    }
}