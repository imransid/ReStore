using Microsoft.EntityFrameworkCore;

using API.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    // public class StoreContext : IdentityDbContext<IdentityUser, IdentityRole, string>
    // {
    //     public StoreContext(DbContextOptions options) : base(options)
    //     {
    //     }

    //     public DbSet<Product> Products { get; set; }
    //     public DbSet<Basket> Baskets { get; set; }

    //     // Add DbSet for IdentityUser
    //     public DbSet<IdentityUser> Users { get; set; }

    //     protected override void OnModelCreating(ModelBuilder builder)
    //     {
    //         base.OnModelCreating(builder);

    //         builder.Entity<IdentityRole>()
    //         .HasData(
    //             new IdentityRole
    //             {
    //                 Name = "Member",
    //                 NormalizedName = "Member",
    //                 //Id = "1"
    //             },
    //              new IdentityRole
    //              {
    //                  Name = "Admin",
    //                  NormalizedName = "Admin",
    //                  //Id = "2"
    //              }
    //         );
    //     }
    // }

    public class StoreContext : IdentityDbContext<User, IdentityRole, string>
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Basket> Baskets { get; set; }

        // Add DbSet for IdentityUser
        // public DbSet<IdentityUser> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole
                {
                    Id = "1",
                    Name = "Member",
                    NormalizedName = "MEMBER"
                },
                new IdentityRole
                {
                    Id = "2",
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                });

        }
    }


}