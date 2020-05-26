export function toBase64(element: any, callback: any) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}
