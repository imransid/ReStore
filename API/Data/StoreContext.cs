using Microsoft.EntityFrameworkCore;

using API.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using API.Entities.OrderAggregate;

namespace API.Data
{


    public class StoreContext : IdentityDbContext<User, Role, int>
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Basket> Baskets { get; set; }
        public DbSet<Order> Orders { get; set; }

        // Add DbSet for IdentityUser
        // public DbSet<IdentityUser> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {


            base.OnModelCreating(builder);

            // one to one  relationship
            builder.Entity<User>()
                .HasOne(a => a.Address)
                .WithOne()
                .HasForeignKey<UserAddress>(a => a.Id)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Role>()
            .HasData(
                new Role
                {
                    Id = 1,
                    Name = "Member",
                    NormalizedName = "MEMBER"
                },
                new Role
                {
                    Id = 2,
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                });

        }
    }


}