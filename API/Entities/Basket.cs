using System;
namespace API.Entities
{
    public class Basket
    {

        public int Id { get; set; }
        public string? BuyerId { get; set; }

        public List<BasketItem> Items { get; set; } = new();

        public async void AddItem(Product product, int quantity)
        {

            bool checkStatus = Items.All(item => item.ProductId != product.Id);


            var activeitems = Items;

            var activeProduct = product;
            if (checkStatus)
            {
                Items.Add(new BasketItem
                {
                    Product = product,
                    Quantity = quantity
                });
            }

            BasketItem? existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);

            if (existingItem != null) existingItem.Quantity += quantity;

        }


        public void RemoveItem(int productId, int quantity)
        {
            BasketItem? item = Items.FirstOrDefault(item => item.Id == productId);
            if (item == null) return;
            item.Quantity -= quantity;
            if (item.Quantity == 0) Items.Remove(item);

        }

        public void RemoveAllItem(int basketId)
        {
            bool item = Items.All(item => item.BasketId != basketId);
            if (item) return;
            Items.RemoveAll(item => item.BasketId == basketId);

        }

    }
}

