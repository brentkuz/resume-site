//Help with Captcha: http://www.c-sharpcorner.com/article/implement-google-recaptcha-in-asp-net-mvc/

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;

namespace MySite.Services
{
    public class CaptchaService
    {
        private string secretKey;
        private string url;
        public CaptchaService()
        {
            secretKey = WebConfigurationManager.AppSettings["CaptchaSecretKey"].ToString();
            url = WebConfigurationManager.AppSettings["CaptchaUrl"].ToString();
        }
        public async Task<bool> IsValid(string captchaResponse)
        {
            try
            {
                using (var http = new HttpClient())
                {
                    var values = new Dictionary<string,string> {
                        {
                            "secret",
                            secretKey
                        },
                        {
                            "response",
                            captchaResponse
                        }
                    };

                    var resp = await http.PostAsync(url, new FormUrlEncodedContent(values));
                    var str = await resp.Content.ReadAsStringAsync();
                    CaptchaResponse response = JsonConvert.DeserializeObject<CaptchaResponse>(str);
                    return response.success;
                }
            }
            catch(Exception)
            {
                return false;
            }
        }


        public class CaptchaResponse
        {
            public bool success { get; set; }
            public string challenge_ts { get; set; }
            public string hostname { get; set; }
            [JsonProperty(PropertyName = "error-codes")]
            public List<string> error_codes { get; set; }
        }

    }
    
}