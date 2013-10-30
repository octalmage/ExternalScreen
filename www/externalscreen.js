         
               var exec = cordova.require('cordova/exec');
               
               
               function checkExternalScreenAvailable(success, fail)
               {
               
                    return exec(success, fail, "PGExternalScreen", "checkExternalScreenAvailable", []);
               }
               
               function loadHTMLResource (url, success, fail)
               {
                    return exec(success, fail, "PGExternalScreen", "loadHTMLResource", [url]);
               }
               
               function setupScreenConnectionNotificationHandlers(success, fail)
               {
               
                    return exec(success, fail, "PGExternalScreen", "setupScreenConnectionNotificationHandlers", []);
               }
               
               function loadHTML(url, success, fail)
               {
                    return exec(success, fail, "PGExternalScreen", "loadHTML", [url]);
               }
               function invokeJavaScript(scriptString, success, fail)
               {
                    return exec(success, fail, "PGExternalScreen", "invokeJavaScript", [scriptString]);
               }
               

                
module.exports = {
               checkExternalScreenAvailable: checkExternalScreenAvailable,
               loadHTMLResource: loadHTMLResource,
               setupScreenConnectionNotificationHandlers:setupScreenConnectionNotificationHandlers,
               loadHTML:loadHTML,
               invokeJavaScript: invokeJavaScript
               
            

    };
               

