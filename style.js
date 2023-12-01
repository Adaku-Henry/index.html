// style.js
// taking elements from HTML
const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-bulder");
const outputContainer = document.querySelector(".output-container");
let isHidden = true;

// Function to toggle between input form and resume preview
function hide(){
    if (isHidden){
        // Hide the input form and show the resume preview
        main.Style.display = "none";
        isHidden = false;

        outputContainer.Style.display = "naone";
        outputContainer.innerHTML = 
       <div class="output">
        <div class="heading">
            <h1>${inputField["name"].value}</h1>
            <h4>${inputField["title"].value}</h4>
        </div>
        <div class="info">
            <div class="left">
                <div class="box">
                    <h2>objective</h2>
                    <p>${inputField["ojective"].value}</p>
                </div>
                <div class="box">
                   <h2>skills</h2>
                   <p>${inputField["skills"].value}</p>
                <div class="box">
                    <h2>Academic details</h2>
                    <p>${inputField["Academic details"].value}</p>
                <div class="box">
                    <h2>contact</h2>
                    <p>${inputField["contact"].value}</p>
                    </div>
                    <div class="right">
                <div class="box">
                    <h2>Work Experience</h2>
                    <p>${inputField["work Experience"].value}</p>
                <div class="box">
                    <h2>Acheivement</h2>
                    <p>${inputField["Acheviement"].value}</p>
                    <div class="box">
                        <h2>Project</h2>
                        <p>${inputField["Project"].value}</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    }
<button onclick="print()">Print Resume</button>
 } 
 ; 
    // show the input form and hide the preview
    main.Style.display = "block";
    isHidden = true;
    outputContainer.Style.display = "none";
    outputContainer.innerHTML = "";
