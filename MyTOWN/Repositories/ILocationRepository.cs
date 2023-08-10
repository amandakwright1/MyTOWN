using MyTOWN.Models;

namespace MyTOWN.Repositories
{
    public interface ILocationRepository
    {
        List<Location> GetAll();
        Location GetById(int id);
    }
}