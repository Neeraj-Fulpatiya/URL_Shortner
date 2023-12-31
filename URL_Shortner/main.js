 const url = 'https://api.rebrandly.com/v1/links';
const apiKey = "ef569fae7b60430dad4392d9a63cd7c4";

 const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

 const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  		renderResponse(xhr.response);
		}
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


 const displayShortUrl = (event) => {
  event.preventDefault();
  var result = document.getElementById("responseField");
  result.classList.remove("result-hidden");
  result.classList.add("result-show");
  document.getElementById("shorten").classList.add("shorten-hidden");
  const retryButton = document.querySelector('#retry');
  
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
    
}


shortenButton.addEventListener('click', displayShortUrl);

