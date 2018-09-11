using System.Web;
using System.Web.Optimization;

namespace Belmilk.ppr
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/node_modules/jquery/jquery.min.js"));
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/node_modules/bootstrap/dist/js/bootstrap.min.js"));
            bundles.Add(new ScriptBundle("~/bundles/bundle").Include(
                      "~/dist/bundle.js"));


            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
                      "~/Content/site.css"));
        }
    }
}
