using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Hosting;
using MyTOWN.Models;
using System.Net;
using System.Reflection.PortableExecutable;
using MyTOWN.Utils;

namespace MyTOWN.Repositories
{
    public class EventRepository : BaseRepository, IEventRepository
    {
        public EventRepository(IConfiguration configuration) : base(configuration) { }

        public List<Events> GetAll() //gets Events Data
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, Date, Time, Description, Address, Contact, UserProfileId
                            FROM Events";

                    var reader = cmd.ExecuteReader();

                    var events = new List<Events>();
                    while (reader.Read())
                    {
                        events.Add(new Events()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Date = DbUtils.GetString(reader, "Date"),
                            Time = DbUtils.GetString(reader, "Time"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Address = DbUtils.GetString(reader, "Address"),
                            Contact = DbUtils.GetString(reader, "Contact"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                        });
                    }

                    reader.Close();

                    return events;
                }
            }
        }
        public Events GetById(int id) //gets just a single event instead of ALL events.
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, Date, Time, Description, Address, Contact, UserProfileId
                            FROM Events
                           WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Events events = null;
                    if (reader.Read())
                    {
                        events = new Events()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Date = DbUtils.GetString(reader, "Date"),
                            Time = DbUtils.GetString(reader, "Time"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Address = DbUtils.GetString(reader, "Address"),
                            Contact = DbUtils.GetString(reader, "Contact"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                        };
                    }

                    reader.Close();

                    return events;
                }
            }
        }

        public void Add(Events events) //saves a new Event like an insert. 
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Events (Date, Time, Description, Address, Contact, UserProfileId)
                        OUTPUT INSERTED.ID
                        VALUES (@Date, @Time, @Description, @Address,@Contact, @UserProfileId)";

                    DbUtils.AddParameter(cmd, "@Date", events.Date);
                    DbUtils.AddParameter(cmd, "@Time", events.Time);
                    DbUtils.AddParameter(cmd, "@Description", events.Description);
                    DbUtils.AddParameter(cmd, "@Address", events.Address);
                    DbUtils.AddParameter(cmd, "@Contact", events.Contact);
                    DbUtils.AddParameter(cmd, "@UserProfileId", events.UserProfileId);

                    events.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(Events events) //edit an event that already exsists.
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Events
                           SET Date = @Date,
                               Time = @Time,
                               Description = @Description,
                               Address = @Address,
                               Contact = @Contact,
                               UserProfileId = @UserProfileId
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Date", events.Date);
                    DbUtils.AddParameter(cmd, "@Time", events.Time);
                    DbUtils.AddParameter(cmd, "@Description", events.Description);
                    DbUtils.AddParameter(cmd, "@Address", events.Address);
                    DbUtils.AddParameter(cmd, "@Contact", events.Contact);
                    DbUtils.AddParameter(cmd, "@UserProfileId", events.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Id", events.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int id) // removes an event. 
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Events WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
   

    

       