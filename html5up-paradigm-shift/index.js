const counter = document.getElementById("count");
			async function updateCounter(){
				let response =await fetch("https://ipjrrvd3v4vn443aktxse7yndm0ssxfq.lambda-url.ap-south-1.on.aws/");
				let data =await response.json();
				counter.innerHTML = `Views: ${data}`;
			}

                updateCounter();