var builder = WebApplication.CreateBuilder(args);

// Register services to the container.
builder.Services.AddControllers();

// Register Swagger services
builder.Services.AddEndpointsApiExplorer();  // This adds the necessary services for OpenAPI generation
builder.Services.AddSwaggerGen();  // This registers the Swagger generator

var app = builder.Build();

// Enable middleware for Swagger UI (only in development)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();  // Generate the Swagger JSON file
    app.UseSwaggerUI();  // Serve the Swagger UI page
}

// Other middleware
app.UseHttpsRedirection(); // Optional: Only if you want to use HTTPS

// Map controllers to routes
app.MapControllers();

app.Run();
