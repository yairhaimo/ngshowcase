//using ngshowcase.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace ngshowcase.App_Start
//{
//    public class Database
//    {
//        private static Database m_Instance;
//        private List<Item> m_Items;
//        private Random m_Random;
//        public static Database Instance
//        {
//            get
//            {
//                if (m_Instance == null)
//                {
//                    m_Instance = new Database();
//                }
//                return m_Instance;
//            }
//        }


//        private Database()
//        {
//            m_Random = new Random();
//            m_Items = SeedItems();
//        }

//        private List<Item> SeedItems()
//        {
//            List<Item> _items = new List<Item>();

//            for (int i = 0; i < 10; i++)
//            {
//                Item _item = new Item()
//                {
//                    Id = new Guid(),
//                    Name = "Item " + i,
//                    Type = Enum.GetNames(typeof(ItemType)).ToList()[(int)GetRandomItemType()],
//                    Viewed = i * 10,
//                    Liked = i * 5,
//                    Description = "Item Desc " + i,
//                    PlnkrId = "123123",
//                    //Comments = SeedComments(),
//                    //Tags = SeedTags()
//                };

//                _items.Add(_item);
//            }

//            return _items;
//        }

//        private List<Tag> SeedTags()
//        {
//            List<Tag> tags = new List<Tag>();
//            for (int i = 0; i < m_Random.Next(5)+2; i++)
//            {
//                tags.Add(new Tag() { Id = i, Name = "Tag" + m_Random.Next(40) });
//            }
//            return tags;
//        }

//        private List<Comment> SeedComments()
//        {
//            List<Comment> comments = new List<Comment>();
//            for (int j = 0; j < 3; j++)
//            {
//                Comment comment = new Comment();
//                comment.Id = j;
//                comment.Text = "Comment " + j;
//                comments.Add(comment);
//            }
//            return comments;
//        }

//        private ItemType GetRandomItemType()
//        {
//            Array values = Enum.GetValues(typeof(ItemType));
//            return (ItemType)values.GetValue(m_Random.Next(values.Length));
//        }


//        public List<Item> Items
//        {
//            get
//            {
//                return m_Items;
//            }
//        }
//    }
//}