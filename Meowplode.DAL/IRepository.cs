using System.Collections.Generic;

namespace Meowplode.DAL
{
    public interface IRepository<TEntity, in TKey> where TEntity : class
    {
        IEnumerable<TEntity> GetAll();

        void Create(TEntity entity);

        void Commit();

        void BulkInsert(IEnumerable<TEntity> entities);
    }
}
