// 1. Create an object that links our javascript to the html
// 2. Manipulate the object we created

var button = document.getElementById("button");
var image = document.getElementById("sloanebunny");

// when the button is pressed, we want to hide the image
button.addEventListener("click", displayImage)

function displayImage(){
    //check if the image is displayed/hidden
    //depending on its state, we want to either hide or show it
    //if the image is displayed
        //set the image display to none
    //else if the image is not displayed
        //set the image to display as block
    

    if (image.style.display == "block"){

        image.style.display = "none";
    }
    else if (image.style.display=="none"){
        image.style.display="block";
    }
    
}

var paragraph=document.getElementById("paragraph");
var colorbutton=document.getElementById("colorbutton");

colorbutton.addEventListener("click", changeColor)

function changeColor(){
    // change the text color of paragraph
    

}
