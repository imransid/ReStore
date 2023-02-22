using API.Entities;

namespace API.Extensions
{
    public static class ProductExtensions
    {

        public static IQueryable<Product> Sort(this IQueryable<Product> query, string? orderBy)
        {
            if (string.IsNullOrWhiteSpace(orderBy)) return query.OrderBy(p => p.Name);

            query = orderBy switch
            {
                "price" => query.OrderBy(p => p.Price),
                "priceDesc" => query.OrderByDescending(p => p.Price),
                "name" => query.OrderBy(p => p.Name),
                _ => query.OrderBy(p => p.Name)
            };

            return query;
        }

        public static IQueryable<Product> Search(this IQueryable<Product> query, string? searchItem)
        {

            if (string.IsNullOrEmpty(searchItem)) return query;

            string? lowerCaseSearchTerm = searchItem.Trim().ToLower();

            return query.Where(p => p.Name.ToLower().Contains(lowerCaseSearchTerm));
        }

        public static IQueryable<Product> Filter(this IQueryable<Product> query, string? brand, string? type)
        {
            List<string>? brandList = new List<string>();
            List<string>? typeList = new List<string>();

            if (!string.IsNullOrEmpty(brand))
                brandList.AddRange(brand.ToLower().Split(","));
            if (!string.IsNullOrEmpty(type))
                typeList.AddRange(type.ToLower().Split(","));

            query = query.Where(p => brandList.Count == 0 || brandList.Contains(p.Brand.ToLower()));
            query = query.Where(p => typeList.Count == 0 || typeList.Contains(p.Type.ToLower()));

            return query;
        }
    }
}