const img = document.createElement("img");
     img.src = "https://img.buzzfeed.com/buzzfeed-static/static/2017-09/3/12/asset/buzzfeed-prod-web-05/anigif_sub-buzz-6825-1504456908-1.gif";
    
     const myGif = document.querySelector("#hogwarts-background");
    const submit = document.querySelector("#sub");
    
    submit.addEventListener("click", (e) => {
      e.preventDefault()
     myGif.innerHTML = " Merci pour ces renseignements!! ";
     myGif.appendChild(img);
   
      myGif.style.visibility = "visible";
      setTimeout(function () {
        myGif.style.visibility = "hidden";
        window.location.href = './contact.html'
      }, 2000);
    });