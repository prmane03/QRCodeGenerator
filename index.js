var size = document.getElementById("size");
var data = document.getElementById("data");
var downloadLink = document.getElementById("downloadLink");
var img = document.getElementById("img");
var generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  if (data.value == "") {
    data.nextElementSibling.innerHTML = "please fill some data !!!";
    setTimeout(() => {
      data.nextElementSibling.innerHTML = "";
    }, 2000);
  } else {
    if (size.value == "") {
      size.nextElementSibling.innerHTML = "please specify size !!!";
      data.nextElementSibling.innerHTML = "";
      setTimeout(() => {
        size.nextElementSibling.innerHTML = "";
      }, 2000);
    } else {
      img.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=" +
        size.value +
        "x" +
        size.value +
        "&data=" +
        data.value;
      downloadLink.href =
        "https://api.qrserver.com/v1/create-qr-code/?size=" +
        size.value +
        "x" +
        size.value +
        "&data=" +
        data.value;
      downloadLink.innerHTML = "Download";
      size.value = "";
      data.value = "";
    }
  }
});

// Tabs
function switchTab(evt, tcid) {
  // Get all elements with class="tabcontent" and hide them
  var tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach((tc) => {
    tc.classList.add("hidden");
  });
  // Get all elements with class="tablinks" and remove the class "active"
  var tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach((tl) => {
    tl.classList.remove("activeTabLink");
  });
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tcid).classList.remove("hidden");
  evt.classList.add("activeTabLink");
}
