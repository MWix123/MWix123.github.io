active = false;
fade = null;

galleryImages = ["images/gallery/maze.png",
 "images/gallery/master-calculator.png"];
galleryDescriptions = ["<h3>Maze Generator</h3><h5>Link to webpage: <br class='mobile' /><a target='_blank' href='http://matthewwix.com/Maze-Generator/'>http://matthewwix.com/Maze-Generator/</a></h5><h5>Link to GitHub repository: <br class='mobile'/><a target='_blank' href='https://github.com/MWix123/Maze-Generator'>https://github.com/MWix123/Maze-Generator</a></h5><p>This webpage randomly generates a maze of size 16x16, 32x32 or 64x64 based on the user's choice. The generated maze can also be downloaded as a PDF by clicking on the appropriate button.</p>",
"<h3>Master Calculator</h3><h5>Link to webpage: <br class='mobile' /><a target='_blank' href='http://advanced-math-calculator.herokuapp.com'>http://advanced-math-calculator.herokuapp.com</a></h5><h5>Link to Github repository: <br class='mobile' /><a target='__blank' href='https://github.com/MWix123/Master-Calculator'>https://github.com/MWix123/Master-Calculator</a></h5><p>Master Calculator solves mathematical equations of college level difficulty while providing a clean and intuitive interface for users. It formats all input and output in a LaTex format so as to improve readability.</p>"];

index = 0;

function makeActive(button){

    //does not begin transition if content is already visible
    if(button.className == "active"){
        return;
    }

    var buttons = document.getElementsByTagName("button");
    for(var i = 0; i < buttons.length; i++){
        buttons[i].className = "";
    }

    button.className = "active";

    if(button.id == "resume"){
        if(active){
            clearInterval(fade);
        }
        document.getElementById("portfolio-content").style.opacity = "0";
        document.getElementById("resume-content").style.zIndex = "1";
        document.getElementById("portfolio-content").style.zIndex = "-1";
        var counter = 0;
        
        active = true;
        fade = setInterval(function(){
            document.getElementById("resume-content").style.opacity = counter;
            
            if(Math.floor(counter) >= 1){
                active = false;
                clearInterval(fade);
            }
            counter += 0.02;
        }, 15);
    }else if(button.id == "portfolio"){
        if(active){
            clearInterval(fade);
        }
        document.getElementById("resume-content").style.opacity = "0";
        document.getElementById("resume-content").style.zIndex = "-1";
        document.getElementById("portfolio-content").style.zIndex = "1";
        var counter = 0;
        active = true;
        fade = setInterval(function(){					
            document.getElementById("portfolio-content").style.opacity = counter;
            
            if(Math.floor(counter) >= 1){
                active = false;
                clearInterval(fade);
            }
            counter += 0.02;
        }, 15);
    }   
}

function nextProject(direction){
    
    if(direction == "left"){
        index = (index == 0) ? galleryImages.length - 1 : index-1;
    }else{
        index = (index == galleryImages.length - 1) ? 0 : index+1;
    }
    
    var image = document.getElementById("portfolio-project-image");
    var description = document.getElementById("portfolio-project-description");
    image.src = galleryImages[index];
    description.innerHTML = galleryDescriptions[index];
}