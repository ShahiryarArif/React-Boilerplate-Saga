import React, { useEffect } from "react";
import { loadScript } from "utils/3dviewer-utils";

function ThreeDViewer(props) {
  var isSafari;

  const loadDlcPath = () => {
    if (props.match.params.webgl) {
      let url = props.match.params.webgl;
      let webgl = window.atob(url);
      let jsonFile = "../../../WebGL/Build/WebGL.json";

      if (isSafari) {
        jsonFile = "../../../webgl-safari/Build/WebGL_Build.json";
      }
      setTimeout(function () {
        window.itemObject = webgl;
        window.unityInstance = window.UnityLoader.instantiate("unityContainer", jsonFile, {
          onProgress: window.UnityProgress,
        });
      }, 1000); //This tiemout is set because we want to execute this after our div unityContainer has rendered
    }
  };
  async function loadWebglLibraries() {
    var url = new URL(window.location.href);
    var view3D = url.searchParams.get("view");
    if (view3D) {
      isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      if (isSafari) {
        await loadScript("../../../webgl-safari/TemplateData/UnityProgress.js");
        await loadScript("../../../webgl-safari/Build/UnityLoader.js");
        await loadScript("../../../js/unityCallback.js");
      } else {
        loadScript("../../../WebGL/TemplateData/UnityProgress.js")
          .then((unityProgRes) => {
            loadScript("../../../WebGL/Build/UnityLoader.js").then((unityLoaderRes) => {
              loadScript("../../../js/unityCallback.js").then((unityCallbackRes) => {
                loadDlcPath();
              });
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
  useEffect(async () => {
    await loadWebglLibraries();
  }, []);

  return <div id='unityContainer'></div>;
}
export default ThreeDViewer;
