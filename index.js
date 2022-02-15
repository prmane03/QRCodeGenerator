var size = document.getElementById("size")
var data = document.getElementById("data")
var downloadLink = document.getElementById("downloadLink")
var img = document.getElementById("img")
var generateBtn = document.getElementById("generateBtn")

generateBtn.addEventListener('click',()=>{
	if(data.value==""){
		data.nextSibiling.nextSibiling.innerHtml="please fill some data"
	}else if(size.value==""){
		data.nextSibiling.nextSibiling.innerHtml="please specify size"
	}else{
		img.src="https://api.qrserver.com/v1/create-qr-code/?size="+size.value+"x"+size.value+"&data="+data.value
		downloadLink.href="https://api.qrserver.com/v1/create-qr-code/?size="+size.value+"x"+size.value+"&data="+data.value
		downloadLink.innerHTML="Download"
		size.value=""
		data.value=""
	}
		
})


// Tabs
function switchTab(evt, tcid) {
	// Get all elements with class="tabcontent" and hide them
	var tabcontent = document.querySelectorAll(".tabcontent");
	tabcontent.forEach((tc)=>{
	  tc.classList.add("hidden")
	})

	// Get all elements with class="tablinks" and remove the class "active"
	var tablinks = document.querySelectorAll(".tablinks");
	tablinks.forEach((tl)=>{
	  tl.classList.remove("activeTabLink")
	})

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tcid).classList.remove("hidden")
	evt.classList.add("activeTabLink")
  }