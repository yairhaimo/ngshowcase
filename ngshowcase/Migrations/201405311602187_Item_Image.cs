namespace ngshowcase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Item_Image : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Items", "Image", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Items", "Image");
        }
    }
}
