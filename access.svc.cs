using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;

namespace RkePractical
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class access
    {
        // To use HTTP GET, add [WebGet] attribute. (Default ResponseFormat is WebMessageFormat.Json)
        // To create an operation that returns XML,
        //     add [WebGet(ResponseFormat=WebMessageFormat.Xml)],
        //     and include the following line in the operation body:
        //         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml";
        [OperationContract]
        public void DoWork()
        {
            // Add your operation implementation here
            return;
        }

        [WebGet]
        public string getData()
        {
            string k = "";
            string[] lines = System.IO.File.ReadAllLines(System.Web.HttpContext.Current.Server.MapPath("~") + "App_Data/data.txt");
            string[] lines2 = System.IO.File.ReadAllLines(System.Web.HttpContext.Current.Server.MapPath("~") + "App_Data/status.txt");
            if (lines.Length == 0)
                return null;
            else
            {

                List<string> vals = lines[0].Split(' ').ToList();
                if (vals[vals.Count - 1] == "" | vals[vals.Count - 1] == " ")
                    vals.RemoveAt(vals.Count - 1);
                string m = "";
                if (lines2.Length != 0)
                    m = lines2[0].Trim();

                k = vals[vals.Count - 1] + " " + m;
            }
            return k;
            // Add more operations here and mark them with [OperationContract]
        }
    }
}
