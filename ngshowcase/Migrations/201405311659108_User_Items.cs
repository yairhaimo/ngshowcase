namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class User_Items : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Items", "User_Id", "dbo.Users");
            DropIndex("dbo.Items", new[] { "User_Id" });
            DropColumn("dbo.Items", "User_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Items", "User_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Items", "User_Id");
            AddForeignKey("dbo.Items", "User_Id", "dbo.Users", "Id");
        }
    }
}
