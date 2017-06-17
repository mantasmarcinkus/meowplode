using Meowplode.BL;
using Meowplode.BL.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Meowplode.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class LeaderboardController : Controller
    {
        private readonly ILeaderboardManager _manager;

        public LeaderboardController(ILeaderboardManager manager)
        {
            _manager = manager;
        }

        [HttpGet]
        public IEnumerable<PlayerDTO> Index()
        {
            return _manager.GetLeaderboard();
        }
    }
}
