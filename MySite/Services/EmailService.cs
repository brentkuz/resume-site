﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Configuration;

namespace MySite.Services
{
    public class EmailService : IDisposable
    {
        private bool disposed = false;
        private SmtpClient client;
        public EmailService()
        {
            client = new SmtpClient();
            client.Host = WebConfigurationManager.AppSettings["SmtpServer"];
            client.Port = Convert.ToInt16(WebConfigurationManager.AppSettings["SmtpPort"]);
            client.EnableSsl = true;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential(WebConfigurationManager.AppSettings["GmailLogin"], WebConfigurationManager.AppSettings["GmailPassword"]);
        }

        public void Send(MailMessage message)
        {
            if (message == null)
                throw new ArgumentNullException("MailMessage was null");
            client.Send(message);
        }

        protected void Dispose(bool disposing)
        {
            if(disposing && !disposed)
            {
                client.Dispose();
            }
        }
        public void Dispose()
        {
            throw new NotImplementedException();
        }

    }
}