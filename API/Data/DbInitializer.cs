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

                },
                new Product {
                    Name = "JAGUAR F-TYPE P300",
                    Description = "Brand New 2023 edition",
                    Price = 700000,
                    PictureUrl = "https://www.supersprint.com/public/img/2-410949-410956.jpg",
                    Brand = "JAGUAR",
                    Type = "New",
                    QuantityInStock = 42,

                },
                new Product {
                    Name = "Toyota Supra",
                    Description = "Brand New 2023 edition",
                    Price = 1300000,
                    PictureUrl = "https://cdn.motor1.com/images/mgl/nAAZlR/s1/2023-toyota-supra.webp",
                    Brand = "Toyota",
                    Type = "Used",
                    QuantityInStock = 2,

                },
                new Product {
                    Name = "Tesla Roadster",
                    Description = "Brand New 2023 edition",
                    Price = 600000,
                    PictureUrl = "https://topelectricsuv.com/wp-content/uploads/2022/04/Tesla-Roadster-front-three-quarter-with-roof-retracted.jpg",
                    Brand = "Tesla",
                    Type = "New",
                    QuantityInStock = 228,

                },
                new Product {
                    Name = "Ferrari 488 GTB",
                    Description = "Italian supercar with a V8 engine",
                    Price = 250000000,
                    PictureUrl = "https://d1i1eo6qmdfmdv.cloudfront.net/upload/site/pages/drive-ferrari/488/EXR_FERRARI_488_GTB_SLIDER_3.jpg",
                    Brand = "Ferrari",
                    Type = "New",
                    QuantityInStock = 10,
                },
                new Product {
                    Name = "Aventador",
                    Description = "Italian supercar with V12 engine",
                    Price = 50000000,
                    PictureUrl = "https://i.ytimg.com/vi/p_is7qzLuFM/maxresdefault.jpg",
                    Brand = "Lamborghini",
                    Type = "New",
                    QuantityInStock = 5,
                },
                new Product {
                    Name = "Porsche 911 GT3",
                    Description = "Track-focused Porsche sports car",
                    Price = 200000,
                    PictureUrl = "https://cdn.motor1.com/images/mgl/koorPB/s3/foto---la-nuova-porsche-911-gt3-rs-celebra-i-50-anni-della-carrera-rs-2.7.webp",
                    Brand = "Porsche",
                    Type = "New",
                    QuantityInStock = 15,
                },
                new Product {
                    Name = "Audi R8",
                    Description = "Mid-engine supercar with V10 engine",
                    Price = 180000,
                    PictureUrl = "https://cdn.motor1.com/images/mgl/8QMwo/s1/2022-audi-a8-l.webp",
                    Brand = "Used",
                    Type = "New",
                    QuantityInStock = 8,
                },
                new Product {
                    Name = "Chevrolet Corvette",
                    Description = "American sports car with a V8 engine",
                    Price = 650000,
                    PictureUrl = "https://4kwallpapers.com/images/walls/thumbs_3t/7964.jpeg",
                    Brand = "Chevrolet",
                    Type = "New",
                    QuantityInStock = 50,
                },
                new Product {
                    Name = "Nissan GT-R",
                    Description = "Japanese sports car with a twin-turbo V6 engine",
                    Price = 1200000,
                    PictureUrl = "https://car-images.bauersecure.com/wp-images/13098/1056x594/2022-gt-r-nismo-00.jpg",
                    Brand = "Nissan",
                    Type = "New",
                    QuantityInStock = 20,
                },
                new Product {
                    Name = "BMW M4",
                    Description = "German sports car with a turbocharged six-cylinder engine",
                    Price = 7000000,
                    PictureUrl = "https://cdn.carbuzz.com/gallery-images/1600/835000/0/835041.jpg",
                    Brand = "BMW",
                    Type = "New",
                    QuantityInStock = 30,
                },
                new Product {
                    Name = "McLaren 720S",
                    Description = "British supercar with extreme performance",
                    Price = 5000000,
                    PictureUrl = "https://www.thedrive.com/content/2019/03/macca-hero-lu.jpg?quality=85",
                    Brand = "McLaren",
                    Type = "New",
                    QuantityInStock = 25,
                },
                new Product {
                    Name = "Dodge Challenger",
                    Description = "Classic American muscle car",
                    Price = 75000,
                    PictureUrl = "https://www.topgear.com/sites/default/files/cars-car/image/2019/01/dg019_004clan2kt8c8qmtrmpcl3p72agsepl.jpg",
                    Brand = "Dodge",
                    Type = "New",
                    QuantityInStock = 100,
                },

            };

            foreach (var product in Products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}