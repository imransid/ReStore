using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class IdentityUserS : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0d136792-7b99-449d-a5f2-ff3d1fb1b93d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0ee87031-e041-4689-8136-6011e80b4fde");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1", "43c2cfed-a877-4ca3-8fbb-6d5892db2e69", "Member", "MEMBER" },
                    { "2", "80e45c0a-9933-431b-969b-cc04c7e3f5cc", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0d136792-7b99-449d-a5f2-ff3d1fb1b93d", "fb5c5e9a-0e0a-45a5-a603-85d212a45abf", "Admin", "Admin" },
                    { "0ee87031-e041-4689-8136-6011e80b4fde", "27da7bd6-fb61-464e-9f51-f2917161f15b", "Member", "Member" }
                });
        }
    }
}
