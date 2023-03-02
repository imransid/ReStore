using System;
namespace API.Entities.OrderAggregate
{
	public class Order
	{
		public int Id { get; set; }
        public string? BuyerId { get; set; }
        public ShippingAddress? ShippingAddress { get; set; }
        public DateTime OrederDate { get; set; } = DateTime.Now;
        public List<OrderItem>? OrderItems { get; set; }
    }
}

