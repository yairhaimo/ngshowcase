namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Item_GitHub_HomePage : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Items", "HomePage", c => c.String());
            AddColumn("dbo.Items", "GitHubUrl", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Items", "GitHubUrl");
            DropColumn("dbo.Items", "HomePage");
        }
    }
}
