namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovedComments : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Comments", "Item_Id", "dbo.Items");
            DropForeignKey("dbo.Comments", "User_Id", "dbo.Users");
            DropIndex("dbo.Comments", new[] { "Item_Id" });
            DropIndex("dbo.Comments", new[] { "User_Id" });
            DropTable("dbo.Comments");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                        Date = c.DateTime(nullable: false),
                        Item_Id = c.Int(),
                        User_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("dbo.Comments", "User_Id");
            CreateIndex("dbo.Comments", "Item_Id");
            AddForeignKey("dbo.Comments", "User_Id", "dbo.Users", "Id");
            AddForeignKey("dbo.Comments", "Item_Id", "dbo.Items", "Id");
        }
    }
}
