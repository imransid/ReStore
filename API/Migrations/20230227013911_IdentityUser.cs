using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class IdentityUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "33cfee0c-75b7-40e9-9883-08f12dca0845");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d65dd4a5-bd9a-420e-8ca4-7fda02cc86dc");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0d136792-7b99-449d-a5f2-ff3d1fb1b93d", "fb5c5e9a-0e0a-45a5-a603-85d212a45abf", "Admin", "Admin" },
                    { "0ee87031-e041-4689-8136-6011e80b4fde", "27da7bd6-fb61-464e-9f51-f2917161f15b", "Member", "Member" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "33cfee0c-75b7-40e9-9883-08f12dca0845", "f825d50f-c5af-44d6-86ff-679300ad3440", "Member", "Member" },
                    { "d65dd4a5-bd9a-420e-8ca4-7fda02cc86dc", "f0f5a660-ac93-4f0f-877e-3a464d67a2b4", "Admin", "Admin" }
                });
        }
    }
}
