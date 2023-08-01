using MyTOWN.Models;

namespace MyTOWN.Repositories
{
    public interface IEventRepository
    {
        List<Events> GetAll();

        void Delete (int id);

        void Add(Events events);

        Events GetById (int id);

        void Update(Events events);
    }
}