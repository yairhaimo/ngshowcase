namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Item_HomePageRename : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Items", "HomePageUrl", c => c.String());
            DropColumn("dbo.Items", "HomePage");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Items", "HomePage", c => c.String());
            DropColumn("dbo.Items", "HomePageUrl");
        }
    }
}
