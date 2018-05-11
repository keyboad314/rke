using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services.Protocols;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RkePractical
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        [System.Web.Services.WebMethod()]
       
        public string hello()
        {
            return "hellow";
        }


        [System.Web.Services.WebMethod()]
        public static string getData(string x)
        {
            
            string[] lines = System.IO.File.ReadAllLines(System.Web.HttpContext.Current.Server.MapPath("~") + "App_Data/data.txt");
            string[] lines2 = System.IO.File.ReadAllLines(System.Web.HttpContext.Current.Server.MapPath("~") + "App_Data/status.txt");
            if (lines.Length == 0)
                return "";
            else
            {

                List<string> vals = lines[0].Trim().Split(' ').ToList();
                if (vals[vals.Count - 1] == "" | vals[vals.Count - 1] == " ")
                    vals.RemoveAt(vals.Count - 1);

                //string m = "";             
                //check lines2[0]
                //m = lines2[0].Trim();

                return vals[vals.Count - 1] + " " + lines2[0].Trim();
            }

        }



    }
}