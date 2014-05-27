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
    public class CommentsController : ApiController
    {
        [Route("api/items/{itemId}/comments")]
        public IEnumerable<Comment> Get(int itemId)
        {
            using (var context = new NGShowCaseContext())
            {
                return context.Comments.Where(c => c.Item.Id == itemId).OrderByDescending(c => c.Date).ToList();
            }
        }

        [Route("api/items/{itemId}/comments")]
        public void Post(int itemId, [FromBody]Comment comment)
        {
            using (var context = new NGShowCaseContext())
            {
                comment.User = context.Users.SingleOrDefault(u => u.Id == comment.User.Id);
                comment.Item = context.Items.Single(i => i.Id == itemId);
                context.Comments.Add(comment);
                context.SaveChanges();
            }
        }

        //[Route("api/items/{itemId}/comments/{commentId}")]
        //public void Delete(int itemId, int commentId)
        //{
        //    using (var context = new NGShowCaseContext())
        //    {
        //        var commentToDelete = context.Items.Include(i => i.Comments).SingleOrDefault(i => i.Id == itemId).Comments.SingleOrDefault(c => c.Id == commentId);
        //        context.Comments.Remove(commentToDelete);
        //        context.SaveChanges();                
        //    }
        //}
    }
}