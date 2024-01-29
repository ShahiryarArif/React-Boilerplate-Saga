export const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
};

export function getWebglURL(item) {
  let url = item.webgl_url;
  if (url) {
    if (item.variation_name) {
      if (item.is_tradable) {
        let color = item.variation_name;
        url = url + "," + color.toLowerCase();
      } else {
        let color = "default";
        url = url + "," + color.toLowerCase();
      }
    }
  }
  url = window.btoa(url) + "/" + item.name + "?view=3D";
  return url;
}
