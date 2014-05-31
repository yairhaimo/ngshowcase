using ngshowcase.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ngshowcase.Controllers
{
    public class SeederController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            string ret = "success";

            string[] lines = System.IO.File.ReadAllLines(@"D:\dev\Modules.csv");

            using (var context = new NGShowCaseContext())
            {

                ItemType moduleType = context.ItemTypes.SingleOrDefault(i => i.Name == "module");

                for (int i = 1; i < lines.Length; i++)
                {
                    string[] parameters = lines[i].Split(',');
                    Item item = new Item();
                    item.Name = parameters[0];
                    item.Description = parameters[1].Replace(';', ',');
                    item.GitHubUrl = parameters[3];
                    item.HomePageUrl = parameters[4];
                    item.UserName = parameters[5];
                    item.Viewed = 0;
                    item.Type = moduleType;
                    if ((item.HomePageUrl != string.Empty) && (item.HomePageUrl != item.GitHubUrl))
                    {
                        item.DemoUrl = item.HomePageUrl;
                    }
                    else
                    {
                        item.DemoUrl = item.GitHubUrl;
                    }
                    item.Liked = Int32.Parse(parameters[6]);
                    if (parameters[7] != string.Empty)
                    {
                        item.Tags = new List<Tag>();
                        foreach (string tagStr in parameters[7].Split('|'))
                        {
                            if (tagStr != string.Empty)
                            {
                                Tag tag = new Tag();
                                tag.Name = tagStr;
                                item.Tags.Add(tag);
                            }
                        }
                    }
                    context.Items.Add(item);
                }

                context.SaveChanges();
            }

            return new string[] { ret };
        }

        public string Get(int id)
        {
            using (var context = new NGShowCaseContext())
            {
                Item item = context.Items.SingleOrDefault(i => i.GitHubUrl == "https://github.com/danialfarid/angular-file-upload");
                //item.Image = "iVBORw0KGgoAAAANSUhEUgAAAZAAAAD6CAIAAAAAxYYTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OI";
                item.DemoUrl = "http://angular-file-upload.appspot.com/";
                
                context.SaveChanges();
                return item.ToString();
            }
            
        }


    }
}