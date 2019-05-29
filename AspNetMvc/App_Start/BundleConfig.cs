using System;
using System.Web.Optimization;

namespace AspNetMvc.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Script/Bundles").Include(
               "~/Bundles/runtime.*",
               "~/Bundles/polyfills.*",
               "~/Bundles/main.*"));
            bundles.Add(new StyleBundle("~/Content/css").Include("~/Bundles/styles.*"));

        }
    }
}
