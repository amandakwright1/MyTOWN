using Microsoft.Data.SqlClient;

namespace MyTOWN.Repositories
{
  
        public abstract class BaseRepository //abstract means BaseRepo can only be used by inheritance. 
        {
            private readonly string _connectionString;

            public BaseRepository(IConfiguration configuration)
            {
                _connectionString = configuration.GetConnectionString("DefaultConnection");
            }

            protected SqlConnection Connection //protected means it is only available to child classes but not any other code. 
            {
                get
                {
                    return new SqlConnection(_connectionString);
                }
            }
        }
    }

