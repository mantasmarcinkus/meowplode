using System;

namespace Meowplode.BL.DTOs
{
    public class PlayerDTO
    {
        public string Name { get; set; }

        public DateTime DateCreated { get; set; }

        public bool Result { get; set; }

        public int SuccessfullyAnswered { get; set; }
    }
}
