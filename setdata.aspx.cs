using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RkePractical
{
    public partial class setdata : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string d = Request.QueryString["data"];
            string s = Request.QueryString["status"];
            
            File.AppendAllText(Server.MapPath("~") + "App_Data/data.txt" , d + " ");
            File.WriteAllText(Server.MapPath("~") + "App_Data/status.txt", s);
        }
    }
}