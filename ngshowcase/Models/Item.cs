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
        public virtual List<Comment> Comments { get; set; }
        public virtual User User { get; set; }
        public string Description { get; set; }
        public string PlnkrId { get; set; }

        public Item()
        {
            //Comments = new List<Comment>();
            //Tags = new List<Tag>();
            //Type = new ItemType();
        }
    }
}