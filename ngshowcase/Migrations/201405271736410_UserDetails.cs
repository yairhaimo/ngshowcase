namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserDetails : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "AvatarUrl", c => c.String());
            AddColumn("dbo.Users", "HomePageUrl", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "HomePageUrl");
            DropColumn("dbo.Users", "AvatarUrl");
        }
    }
}
