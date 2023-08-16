using MyTOWN.Models;

namespace MyTOWN.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        List<UserProfile> GetAll();
        UserProfile GetById(int id);

        UserProfile GetByEmail(string email);
    }
}