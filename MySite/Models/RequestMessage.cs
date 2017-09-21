using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Web;
using System.Web.Configuration;

namespace MySite.Models
{
    public class RequestMessage : MailMessage
    {
        public RequestMessage(string project, string note, string requestorEmail)
        {
            To.Add(new MailAddress(WebConfigurationManager.AppSettings["PrimaryEmail"]));
            To.Add(new MailAddress(WebConfigurationManager.AppSettings["AlternateEmail"]));
            From = new MailAddress(WebConfigurationManager.AppSettings["FromEmail"]);
            Subject = "Request for source code: " + project;
            var sb = new StringBuilder();
            sb.AppendLine("Requestor Email: " + requestorEmail + "<br />");
            sb.AppendLine("<br />");
            sb.AppendLine(note);
            Body = sb.ToString();
            IsBodyHtml = true;
        }
    }
}