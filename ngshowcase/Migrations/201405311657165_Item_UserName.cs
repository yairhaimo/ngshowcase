namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Item_UserName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Items", "UserName", c => c.String());
            DropColumn("dbo.Items", "User");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Items", "User", c => c.String());
            DropColumn("dbo.Items", "UserName");
        }
    }
}
