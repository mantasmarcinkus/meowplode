using Meowplode.BL.DTOs;
using System.Collections.Generic;

namespace Meowplode.BL
{
    public interface ILeaderboardManager
    {
        IEnumerable<PlayerDTO> GetLeaderboard();
    }
}
