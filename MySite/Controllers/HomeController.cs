using MySite.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace MySite.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            ViewBag.ActiveTab = "home";
            return View();
        }

        public ActionResult AboutMe()
        {
            ViewBag.ActiveTab = "about-me";
            return View();
        }



        public ActionResult Resume()
        {
            ViewBag.ActiveTab = "resume";
            return View();
        }

        public ActionResult Projects()
        {
            ViewBag.ActiveTab = "projects";
            return View();
        }
      
    }
}
