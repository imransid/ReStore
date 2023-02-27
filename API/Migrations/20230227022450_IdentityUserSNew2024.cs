using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class IdentityUserSNew2024 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1Member");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2Admin");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4d9acb3e-a22d-4826-a923-103b424d5d76", "e39d278e-e821-4017-8718-62f7ac9a09fb", "Admin", "ADMIN" },
                    { "a4718ff1-0467-404d-881e-036d3fc0b3e4", "bfa25525-1569-41ce-b939-cf7f92af5fdf", "Member", "MEMBER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4d9acb3e-a22d-4826-a923-103b424d5d76");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a4718ff1-0467-404d-881e-036d3fc0b3e4");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1Member", "14efc2e6-3b90-466c-9fbc-3026c6ff9ef4", "Member", "MEMBER" },
                    { "2Admin", "49e7654b-07d6-4bf8-a442-e1919d69ed89", "Admin", "ADMIN" }
                });
        }
    }
}
