using Meowplode.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace Meowplode.DAL
{
    public class MeowplodeContext : DbContext
    {
        public MeowplodeContext(DbContextOptions<MeowplodeContext> options) : base(options) { }

        public DbSet<Leaderboard> Leaderboard { get; set; }

        public DbSet<Question> Questions { get; set; }

        public DbSet<Option> Options { get; set; }
    }
}
