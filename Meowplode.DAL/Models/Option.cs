using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Meowplode.DAL.Models
{
    public class Option : BaseModel
    {
        public string Value { get; set; }

        public bool Correct { get; set; }

        public Guid QuestionId { get; set; }

        [ForeignKey(nameof(QuestionId))]
        public virtual Question Question { get; set; }
    }
}
