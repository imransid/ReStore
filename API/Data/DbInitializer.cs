using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var Products = new List<Product>{
                new Product {
                    Name = "GT 86",
                    Description = "Brand New 2017 edition",
                    Price = 4400000,
                    PictureUrl = "https://s1.cdn.autoevolution.com/images/news/toyota-gt-86-nismo-is-a-cool-play-on-colors-and-parts-139631-7.jpg",
                    Brand = "Toyota",
                    Type = "New",
                    QuantityInStock = 2,

                },
                 new Product {
                    Name = "Civic",
                    Description = "Brand New 2021 edition",
                    Price = 4400000,
                    PictureUrl = "https://4wheelerbd.com/wp-content/uploads/2020/02/honda-civic-2020-current-rs-civic-4e92.jpg",
                    Brand = "Honda",
                    Type = "New",
                    QuantityInStock = 6,

                },
                 new Product {
                    Name = "CHR",
                    Description = "Brand New 2017 edition",
                    Price = 3400000,
                    PictureUrl = "https://new-media.dhakatribune.com/en/uploads/2021/11/14/rsz-chr.jpeg",
                    Brand = "Honda",
                    Type = "New",
                    QuantityInStock = 22,

                }
            };

            foreach (var product in Products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}