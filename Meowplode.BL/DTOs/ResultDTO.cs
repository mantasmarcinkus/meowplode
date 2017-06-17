using System;
using System.Collections.Generic;

namespace Meowplode.BL.DTOs
{
    public class SubmissionDTO
    {
        public List<AnswerDTO> ProvidedResults { get; set; }

        public string Name { get; set; }
    }
}
