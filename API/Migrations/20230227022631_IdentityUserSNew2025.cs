using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class IdentityUserSNew2025 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                    { "1", "0437a576-7602-4514-96d9-d014a3945f14", "Member", "MEMBER" },
                    { "2", "531e2744-152e-42fd-83a9-ad559b2d768d", "Admin", "ADMIN" }
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
                    { "4d9acb3e-a22d-4826-a923-103b424d5d76", "e39d278e-e821-4017-8718-62f7ac9a09fb", "Admin", "ADMIN" },
                    { "a4718ff1-0467-404d-881e-036d3fc0b3e4", "bfa25525-1569-41ce-b939-cf7f92af5fdf", "Member", "MEMBER" }
                });
        }
    }
}
