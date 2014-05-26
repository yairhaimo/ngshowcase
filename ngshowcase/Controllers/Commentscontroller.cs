using ngshowcase.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ngshowcase.Controllers
{
    public class CommentsController : ApiController
    {
        // GET api/<controller>
        [Route("~api/items/{itemId}/comments")]
        public IEnumerable<Comment> Get(int itemId)
        {
            using (var context = new NGShowCaseContext())
            {
                return context.Items.SingleOrDefault(i => i.Id == itemId).Comments.ToList();
            }
            
        }

        
        
        [Route("~api/items/{itemId}/comments")]
        public void Post([FromBody]Comment comment)
        {
            using (var context = new NGShowCaseContext())
            {
                context.Items.SingleOrDefault(i => i.Id == itemId).Comments.Add(comment);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}