using ngshowcase.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ngshowcase.Controllers
{
    public class ItemTypesController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<ItemType> Get()
        {
            using (var context = new NGShowCaseContext()) {
                return context.ItemTypes.ToList();
            }
        }

    }
}