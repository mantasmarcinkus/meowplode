using Meowplode.DAL.Models;
using System;

namespace Meowplode.DAL
{
    public class LeadboardRepository : Repository<Leaderboard, Guid>
    {
        public LeadboardRepository(MeowplodeContext context) : base(context) { }
    }
}
