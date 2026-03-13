var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseStaticFiles();   // MOVE IT HERE

app.UseRouting();
app.UseHttpsRedirection();


app.UseAuthorization();

app.MapGet("/", () => Results.Redirect("/auth/Login"));

app.MapRazorPages();

app.Run();