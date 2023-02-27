using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class IdentityAddedNew2023 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e4a690cb-266a-4a95-9d22-10131f94cf97");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e74c7045-f860-4d9a-8c4c-52415dcc1784");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "33cfee0c-75b7-40e9-9883-08f12dca0845", "f825d50f-c5af-44d6-86ff-679300ad3440", "Member", "Member" },
                    { "d65dd4a5-bd9a-420e-8ca4-7fda02cc86dc", "f0f5a660-ac93-4f0f-877e-3a464d67a2b4", "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "e4a690cb-266a-4a95-9d22-10131f94cf97", "c328925e-0fc0-4fa7-8816-23ecbf3483aa", "Admin", "Admin" },
                    { "e74c7045-f860-4d9a-8c4c-52415dcc1784", "03a81de9-6d6a-4232-81be-af48c9762b3a", "Member", "Member" }
                });
        }
    }
}
