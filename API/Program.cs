using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// builder.Services.AddScoped<IPokemonRepository, PokemonRepository>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DB
// builder.Services.AddEntityFrameworkNpgsql();

builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
    //options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});



var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    IServiceScope? scope = app.Services.CreateScope();
    StoreContext? context = scope.ServiceProvider.GetRequiredService<StoreContext>();
    ILogger<Program>? logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

    try
    {

        context.Database.Migrate();
        DbInitializer.Initialize(context);

    }
    catch (Exception exception)
    {
        logger.LogError(exception, "Problem Migrating Data");
    }


}



app.UseCors(policy => policy.AllowAnyHeader()
                            .AllowAnyMethod()
                            .SetIsOriginAllowed(origin => true)
                            .AllowCredentials());


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();



app.Run();
