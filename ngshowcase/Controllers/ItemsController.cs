using ngshowcase.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;

namespace ngshowcase.Controllers
{
    public class ItemsController : ApiController
    {

        public IEnumerable<Item> Get([FromUri]string q = null, [FromUri]string type = null)// itemType Name not Id
        {
            using (var context = new NGShowCaseContext())
            {
                var items = context.Items.Include(i => i.User).Include(i => i.Tags).Include(i => i.Type);//.Include(i => i.Comments);
                if (type != null)
                {
                    items = items.Where(i => i.Type.Name == type);
                }
                if (q != null)
                {
                    items = items.Where(i => i.Name.Contains(q));
                }
                return items.ToList();
            }
        }

        //// GET api/<controller>
        //public IEnumerable<Item> Get()
        //{
        //    using (var context = new NGShowCaseContext())
        //    {
        //        return context.Items.Include(i => i.Comments.Select(c => c.User)).Include(i => i.User).Include(i => i.Tags).Include(i => i.Type).ToList();
        //    }
        //}

      

        //// GET api/<controller>/5
        public Item Get(int id)
        {
            using (var context = new NGShowCaseContext())
            {
                return context.Items.Include(i => i.User).Include(i => i.Tags).Include(i => i.Type).SingleOrDefault(i => i.Id == id);
            }
        }

        // POST api/<controller>
        public void Post([FromBody]Item item)
        {
            using (var context = new NGShowCaseContext())
            {
                context.Items.Add(item);
                context.SaveChanges();
            }
        }

        //// POST api/<controller>
        //[Route("items/{itemId}/comment")]
        //public void Post(int itemId, [FromBody]Comment comment)
        //{
        //    using (var context = new NGShowCaseContext())
        //    {
        //        //context.Items.Add(item);
        //        context.SaveChanges();
        //    }
        //}

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]Item item)
        {
            using (var context = new NGShowCaseContext())
            {
                var itemToUpdate = context.Items.SingleOrDefault(i => i.Id == id);
                context.Items.Remove(itemToUpdate);
                context.Items.Add(item);
                context.SaveChanges();
            }
        }

        // DELETE api/<controller>/5
        //public void Delete(int id)
        //{
        //    using (var context = new NGShowCaseContext())
        //    {
        //        var itemToDelete = context.Items.SingleOrDefault(i => i.Id == id);
        //        context.Items.Remove(itemToDelete);
        //        context.SaveChanges();
        //    }
        //}
    }
}
