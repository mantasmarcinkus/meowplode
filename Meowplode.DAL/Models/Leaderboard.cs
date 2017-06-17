using System;

namespace Meowplode.DAL.Models
{
    public class Leaderboard : BaseModel
    {
        public string Name { get; set; }

        public DateTime DateCreated { get; set; }

        public bool Result { get; set; }

        public int SuccessfullyAnswered { get; set; }
    }
}
