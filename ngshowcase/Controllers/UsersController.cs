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
    public class UsersController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<User> Get()
        {
            using (var context = new NGShowCaseContext())
            {
                return context.Users.Include(u => u.Items.Select(i => i.Tags)).Include(u => u.Items.Select(i => i.Type)).ToList();
            }
        }

        // GET api/<controller>/5
        public User Get(string id)
        {
            using (var context = new NGShowCaseContext())
            {
                return context.Users.Include(u => u.Items.Select(i => i.Tags)).Include(u => u.Items.Select(i => i.Type)).SingleOrDefault(u => u.Name == id);
            }
        }

        // POST api/<controller>
        public void Post([FromBody]User user)
        {
            using (var context = new NGShowCaseContext())
            {
                User _user = context.Users.SingleOrDefault(u => u.Id == user.Id);
                if (_user == null)
                {
                    context.Users.Add(user);
                    context.SaveChanges();
                }
                
            }
        }

        //// DELETE api/<controller>/5
        //public void Delete(int id)
        //{
        //}
    }
}