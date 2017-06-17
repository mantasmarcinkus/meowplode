using System;
using System.Collections.Generic;

namespace Meowplode.BL.DTOs
{
    public class QuestionDTO
    {
        public Guid Id { get; set; }

        public string Value { get; set; }

        public IEnumerable<OptionDTO> Options { get; set; }
    }
}
