using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ngshowcase.Models
{
    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string AvatarUrl { get; set; }
        public string HomePageUrl { get; set; }
        //public virtual List<Item> Items { get; set; }
    }
}
