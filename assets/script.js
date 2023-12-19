console.log(document);

console.log(document.body);

let docBody = document.body;


docBody.addEventListener("keydown", function(event){
    if (event.key === "b" || event.key === "B"){
        docBody.setAttribute("style", "background-color: lightblue");
    };
    if (event.key === "g" || event.key === "G"){
        docBody.setAttribute("style", "background-color: green");
    };
    if (event.key === "!"){

        let backgroundImg = document.createElement('img');
        
        backgroundImg.setAttribute("src", "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg");
        //the code below is what I normally add when adding a background image but this just seems to be adding a pic below the 
        // boxes of html. I couldn't figure out why it doesnt treat it as background image 
        docBody.setAttribute("style", "background-image: backgroundImg");
        docBody.setAttribute("style", 'background-size: cover;');
        docBody.setAttribute("style", 'background-position: center;');
        docBody.setAttribute("style", 'background-repeat: no-repeat;');
        docBody.appendChild(backgroundImg);
        console.log(backgroundImg);
    }
    console.log(event.key);
})


