using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Meowplode.DAL;
using Microsoft.EntityFrameworkCore;
using Meowplode.BL;
using System;
using Meowplode.DAL.Models;

namespace Meowplode
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<MeowplodeContext>(opt => opt.UseInMemoryDatabase());
            services.Configure<IISOptions>(options => { });
            services.AddMvc()
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                });
            services.AddScoped<IRepository<Question, Guid>, QuestionRepository>();
            services.AddScoped<IRepository<Leaderboard, Guid>, LeadboardRepository>();
            services.AddScoped<IGameManager, GameManager>();
            services.AddScoped<ILeaderboardManager, LeaderboardManager>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            // Serving static files, e.g. images
            app.UseStaticFiles();

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            // Creating initial data
            var questionRepo = app.ApplicationServices.GetService<IRepository<Question, Guid>>();
            InitialData.CreateInitialData(questionRepo);

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            // Redirect unknown urls to index
            app.UseStatusCodePagesWithRedirects("/");
        }
    }
}
