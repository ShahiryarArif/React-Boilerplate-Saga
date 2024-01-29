function unityCallback() {
  setTimeout(function () {
    window.unityInstance.SendMessage(
      "DLC",
      "Download_Asset",
      window.itemObject
    );
  }, 1000);
}
