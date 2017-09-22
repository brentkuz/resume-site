using MySite.Models;
using MySite.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace MySite.Controllers
{
    public class RequestController : Controller
    {
        private CaptchaService captcha;
        private EmailService email;
        public RequestController()
        {
            captcha = new CaptchaService();
            email = new EmailService();
        }
        [HttpGet]
        public ActionResult NewRequestForm(string project)
        {
            var model = new RequestPartialVM() { Project = project };
            return PartialView(@"~\Views\Request\NewRequestPartial.cshtml", model);
        }
        [HttpPost]
        public async Task<ActionResult> SendRequest(RequestPartialVM vm, FormCollection collection)
        {
            try
            {
                var key = collection["g-recaptcha-response"].ToString();
                var valid = await captcha.IsValid(key);
                if (ModelState.IsValid && valid)
                {
                    var message = new RequestMessage(vm.Project, vm.Note, vm.EmailAddress);
                    email.Send(message);
                    return PartialView(@"~\Views\Request\RequestSentPartial.cshtml");
                }
                else
                {
                    if (!valid)
                        vm.Notification = "No bots aloud. Please complete the Captcha.";
                    else                        
                        vm.Notification = "Please complete the form before submitting.";
                    return PartialView(@"~\Views\Request\NewRequestPartial.cshtml", vm);
                }
            }
            catch(Exception ex)
            {
                vm.Notification = "An error occurred and your message was not sent.";
                return PartialView(@"~\Views\Request\NewRequestPartial.cshtml", vm);
            }
        }

    }
}
