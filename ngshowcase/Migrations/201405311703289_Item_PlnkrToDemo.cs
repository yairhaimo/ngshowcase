namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Item_PlnkrToDemo : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Items", "DemoUrl", c => c.String());
            DropColumn("dbo.Items", "PlnkrId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Items", "PlnkrId", c => c.String());
            DropColumn("dbo.Items", "DemoUrl");
        }
    }
}
