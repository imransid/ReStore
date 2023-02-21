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

            List<Product>? Products = new List<Product>{
                new Product {
                    Name = "GT 86",
                    Description = "Brand New 2017 edition",
                    Price = 4400000,
                    PictureUrl = "https://www.fastcar.co.uk/wp-content/uploads/sites/2/Pandem-Toyota-GT86-1.jpg?w=900",
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

                },
                 new Product {
                    Name = "GR 86",
                    Description = "Brand New 2023 edition",
                    Price = 5400000,
                    PictureUrl = "https://www.motortrend.com/uploads/sites/5/2021/08/2022-Toyota-GR-86-2.jpg",
                    Brand = "Toyota",
                    Type = "New",
                    QuantityInStock = 2,

                },
                    new Product {
                    Name = "Ford Mustang",
                    Description = "Brand New 2023 edition",
                    Price = 4000000,
                    PictureUrl = "https://www.topgear.com/sites/default/files/2022/09/2024%20Mustang%2006.jpg?w=1784&h=1004",
                    Brand = "Ford",
                    Type = "New",
                    QuantityInStock = 22,

                },
                    new Product {
                    Name = "Black Edition Nissan GTR ",
                    Description = "Brand New 2023 edition",
                    Price = 8400000,
                    PictureUrl = "https://i.ytimg.com/vi/bF1b_ym8lOo/maxresdefault.jpg",
                    Brand = "Nissan",
                    Type = "New",
                    QuantityInStock = 2,

                },
                    new Product {
                    Name = "The BMW S1000RR",
                    Description = "Brand New 2018 edition",
                    Price = 500000,
                    PictureUrl = "https://mcn-images.bauersecure.com/wp-images/4705/600x400/2023_bmw_s1000rr_01.jpg",
                    Brand = "BMW",
                    Type = "New",
                    QuantityInStock = 62,

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