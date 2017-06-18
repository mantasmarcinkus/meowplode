using Meowplode.BL.DTOs;
using Meowplode.DAL;
using Meowplode.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Meowplode.BL
{
    /// <summary>
    /// Leaderboard manager
    /// </summary>
    public class LeaderboardManager : ILeaderboardManager
    {
        private const int LEADERBOARD_COUNT = 10;

        private readonly IRepository<Leaderboard, Guid> _leaderboardRepo;

        public LeaderboardManager(IRepository<Leaderboard, Guid> leaderboardRepo)
        {
            _leaderboardRepo = leaderboardRepo;
        }

        /// <summary>
        /// Gets last X number of players that played the game
        /// </summary>
        /// <returns></returns>
        public IEnumerable<PlayerDTO> GetLeaderboard()
        {
            return _leaderboardRepo.GetAll().OrderByDescending(x => x.DateCreated).Take(LEADERBOARD_COUNT).ToList().ToDTOs();
        }

    }
}
