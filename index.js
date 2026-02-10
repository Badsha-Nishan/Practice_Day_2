function download() {
  const link = document.createElement("a");
  link.href = "./BadshaCV.pdf";
  link.download = "BadshaCV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function call() {
  const call = document.createElement("a");
  call.href = "tel:+8801986862697";
  call.call = "01986862697";
  document.body.appendChild(call);
  call.click();
  document.body.removeChild(call);
}
