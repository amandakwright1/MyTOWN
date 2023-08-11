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
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAll() //gets UserProfile Data
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, Name, Email
                            FROM UserProfile";

                    var reader = cmd.ExecuteReader();

                    var userProfile = new List<UserProfile>();
                    while (reader.Read())
                    {
                        userProfile.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),

                        });
                    }

                    reader.Close();

                    return userProfile;
                }
            }
        }
        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                           SELECT Id, Name, Email
                            FROM UserProfile
                           WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    UserProfile userProfile = null;
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                        };
                    }

                    reader.Close();

                    return userProfile;
                }
            }
        }

        public UserProfile GetByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT  Id, Name, Email
                            FROM UserProfile
                         WHERE Email = @email";

                    DbUtils.AddParameter(cmd, "@email", email);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                         
                          
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

                    public void Add(UserProfile userProfile)
                    {
                        using (var conn = Connection)
                        {
                            conn.Open();
                            using (var cmd = conn.CreateCommand())
                            {
                                cmd.CommandText = @"
                        INSERT INTO UserProfile (Name, Email)
                        OUTPUT INSERTED.ID
                        VALUES (@Name, @Email )";

                                DbUtils.AddParameter(cmd, "@Name", userProfile.Name);
                                DbUtils.AddParameter(cmd, "@Email", userProfile.Email);


                                userProfile.Id = (int)cmd.ExecuteScalar();
                            }
                        }
                    }


                }
            }
      
