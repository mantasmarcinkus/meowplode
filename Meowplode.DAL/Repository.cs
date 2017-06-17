using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Meowplode.DAL
{
    public class Repository<TEntity, TKey> : IRepository<TEntity, TKey> where TEntity : class
    {
        private readonly DbContext _context;

        public Repository(DbContext context)
        {
            _context = context;
        }

        protected DbContext DbContext { get => _context; }

        public virtual void Create(TEntity entity)
        {
            DbContext.Set<TEntity>().Add(entity);
        }

        public virtual IEnumerable<TEntity> GetAll()
        {
            return _context.Set<TEntity>();
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        public virtual void BulkInsert(IEnumerable<TEntity> entities)
        {
            DbContext.Set<TEntity>().AddRange(entities);
        }
    }
}
