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
