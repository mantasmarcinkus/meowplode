using System;

namespace Meowplode.BL.DTOs
{
    public class AnswerDTO
    {
        public Guid QuestionId { get; set; }

        public Guid OptionId { get; set; }
    }
}
