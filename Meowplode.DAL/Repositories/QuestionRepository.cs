using Meowplode.DAL.Models;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Meowplode.DAL
{
    public class QuestionRepository : Repository<Question, Guid>
    {
        public QuestionRepository(MeowplodeContext context) : base(context) { }
        
        public override IEnumerable<Question> GetAll()
        {
            return DbContext.Set<Question>().Include(entity => entity.Options);
        }
    }
}
