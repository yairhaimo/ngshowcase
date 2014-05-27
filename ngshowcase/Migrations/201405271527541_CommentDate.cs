namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CommentDate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Comments", "Date", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Comments", "Date");
        }
    }
}
