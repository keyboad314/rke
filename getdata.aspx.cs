using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RkePractical
{
    public partial class getdata : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string[] lines = System.IO.File.ReadAllLines(Server.MapPath("~") +"App_Data/data.txt");
            string[] lines2 = System.IO.File.ReadAllLines(Server.MapPath("~") + "App_Data/status.txt");
            if (lines.Length == 0)
                return;
            else
            {
                Response.Clear();
                List<string> vals = lines[0].Split(' ').ToList();
                if (vals[vals.Count - 1] == "" | vals[vals.Count - 1] == " ")
                    vals.RemoveAt(vals.Count - 1);
                string m = "";
                if (lines2.Length != 0)
                    m = lines2[0].Trim();

                string k = vals[vals.Count - 1] + " " + m;

                Page.ClientScript.RegisterStartupScript(this.GetType(), "key0", "m =" + k + ";", true);
                Page.ClientScript.RegisterStartupScript(this.GetType(), "key1", "console.log(m);", true);
                Page.ClientScript.RegisterStartupScript(this.GetType(), "key2", "update(m);", true);

            }
                
        }
    }
}