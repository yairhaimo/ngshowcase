namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Item_PlnkrUrl : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Items", "PlnkrUrl", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Items", "PlnkrUrl");
        }
    }
}
