using System.Threading.Tasks;
using Telemedicine.API.Models;
using System.Collections.Generic;
using Telemedicine.API.Helpers;
using System.Linq;
using System; 


namespace Telemedicine.API.Data
{
    public interface ITelemedRepository
    {
         void Add<T>(T entity) where T: class;

         void Delete<T>(T entity) where T: class;

         Task<bool> SaveAll();
         Task<PagedList<User>> GetUsers(UserParams userParams);
         Task<User> getUser(int id);

         Task <Document> GetDocument(int id); 

        //video 111
        //  Task <Photo> GetMainPhotoForUser(int userId); 

        Task<Relationship> GetRelationship(int userId, int recipientId);
    }
}