namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Item_User : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Items", "User", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Items", "User");
        }
    }
}
