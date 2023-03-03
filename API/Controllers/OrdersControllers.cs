using System;
using API.Data;
using API.Entities.OrderAggregate;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class OrdersControllers : BaseApiController
    {
        private readonly StoreContext _context;

        public OrdersControllers(StoreContext storeContext)
        {
            _context = storeContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetOrder()
        {
            return await _context.Orders.Include(o => o.OrderItems).Where(x => x.BuyerId == User.Identity.Name).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order?>> GetOrder(int id)
        {
            Order? order = await _context.Orders.Include(x => x.OrderItems).Where(x => x.BuyerId == User.Identity.Name && x.Id == id).FirstOrDefaultAsync();
            return order;
        }
    }
}

