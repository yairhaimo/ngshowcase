﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ngshowcase.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public virtual User User { get; set; }
    }
}
