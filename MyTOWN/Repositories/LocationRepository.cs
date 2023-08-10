using MyTOWN.Models;
using MyTOWN.Utils;

namespace MyTOWN.Repositories
{
    public class LocationRepository : BaseRepository, ILocationRepository
    {
        public LocationRepository(IConfiguration configuration) : base(configuration) { }

        public List<Location> GetAll() //gets Location Data
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, Name, Address, Phone, Website, ImageUrl, LocationTypeId
                            FROM Location";

                    var reader = cmd.ExecuteReader();

                    var location = new List<Location>();
                    while (reader.Read())
                    {
                        location.Add(new Location()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Address = DbUtils.GetString(reader, "Address"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Website = DbUtils.GetString(reader, "Website"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            LocationTypeId = DbUtils.GetInt(reader, "LocationTypeId"),
                        });
                    }

                    reader.Close();

                    return location;
                }
            }
        }
        public Location GetById(int id) //gets just a single location instead of ALL locations.
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, Name, Address, Phone, Website, ImageUrl, LocationTypeId
                            FROM Location
                           WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Location location = null;
                    if (reader.Read())
                    {
                        location = new Location()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Address = DbUtils.GetString(reader, "Address"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Website = DbUtils.GetString(reader, "Website"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            LocationTypeId = DbUtils.GetInt(reader, "LocationTypeId"),
                        };
                    }

                    reader.Close();

                    return location;
                }
            }
        }

    }
}
