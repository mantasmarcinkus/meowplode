using System.Collections.Generic;

namespace Meowplode.DAL.Models
{
    public class Question : BaseModel
    {
        public string Value { get; set; }

        public List<Option> Options { get; set; }
    }
}
