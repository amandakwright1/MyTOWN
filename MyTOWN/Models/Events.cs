namespace MyTOWN.Models
{
    public class Events
    {
        public int Id { get; set; }
        public string Date { get; set; }

        public string Time { get; set; }

        public string Description { get; set; }

        public string Address { get; set; }

        public string Contact { get; set; }

        public int UserProfileId { get; set; }
    }
}
