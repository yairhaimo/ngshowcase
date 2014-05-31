using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ngshowcase.Models
{
    public class Item
    {
        public int Id { get; set; }
        public virtual ItemType Type { get; set; }
        public string Name { get; set; }
        public virtual List<Tag> Tags { get; set; }
        public int Liked { get; set; }
        public int Viewed { get; set; }
        //public virtual User User { get; set; }
        public string UserName { get; set; } //not connecting to user table so strangers can log in with github and take over their plugins
        public string Description { get; set; }
        public string PlnkrUrl { get; set; }
        public string DemoUrl { get; set; }
        public string HomePageUrl { get; set; }
        public string GitHubUrl { get; set; }
        public string Image { get; set; }

        public Item()
        {
        }
    }
}