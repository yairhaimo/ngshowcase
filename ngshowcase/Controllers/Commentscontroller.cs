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
                var comments = context.Items.Include(i=>i.Comments).Include(i => i.Comments.Select(c=>c.User)).SingleOrDefault(i => i.Id == itemId).Comments;
                return comments.ToList();
            }
        }

        [Route("api/items/{itemId}/comments")]
        public void Post(int itemId, [FromBody]Comment comment)
        {
            using (var context = new NGShowCaseContext())
            {
                var comments = context.Items.Include(i=>i.Comments).Include(i=>i.Comments.Select(c=>c.User)).SingleOrDefault(i => i.Id == itemId).Comments;
                var user = context.Users.SingleOrDefault(u=>u.Id == comment.User.Id);
                if (user != null)
                {
                    comment.User = user;
                }
                comments.Add(comment);
                context.SaveChanges();
            }
        }

        [Route("api/items/{itemId}/comments/{commentId}")]
        public void Delete(int itemId, int commentId)
        {
            using (var context = new NGShowCaseContext())
            {
                var commentToDelete = context.Items.Include(i => i.Comments).SingleOrDefault(i => i.Id == itemId).Comments.SingleOrDefault(c => c.Id == commentId);
                context.Comments.Remove(commentToDelete);
                context.SaveChanges();                
            }
        }
    }
}