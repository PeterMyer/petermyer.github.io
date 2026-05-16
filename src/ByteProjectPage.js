import React, {useEffect} from "react";

export function ByteProjectPage(){

    const openTab=(event, tabName)=>{
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    let thisDocument = document.getElementById(tabName)
    thisDocument.style.display = "block";
    event.currentTarget.className += " active";
    }

    useEffect(()=>{
        document.getElementById("defaultOpen").click()
    },[])
    return(
        <article>
            <div class="tab">
                <button class="tablinks" id="defaultOpen" onClick={(event)=>openTab( event,"Summary")}> Summary</button>
                <button class="tablinks"  onClick={(event)=>openTab(event, "tech")}>Technology</button>
                <button class="tablinks" onClick={(event)=>openTab(event, "Future")}>Future</button>
            </div>
            <section>
                <h1 className="display-6">Byte</h1>
                <div>
                    <a href="https://github.com/PeterMyer/Byte-RecipeReader"><i class="fa-brands fa-github"></i></a> 
                    <a href="https://byte-recipe-reader.herokuapp.com/">Visit Byte Web App</a> 
                </div>
                <br></br>
                <div id="Summary" class="tabcontent">
                <ul>
                    <li>2022</li>
                    <li>In Progress</li>
                </ul>
                    <p>
                        Byte was designed to save time on two problems. First, to quickly digitizing recipes from cookbooks instead of manually typing them into an cooking application.
                        Second, to calculate nutrition info from a recipe's listed ingredients. With Byte, users can import recipe text from snapshots of cookbook recipes, and
                        estimate nutritional values with the click of a button.
                    </p>
                </div>
                <div id="tech" class="tabcontent">
                    <ul>
                        <li>Built in Node.js with React and Express</li>
                        <li>User authentication handled by auth0</li>
                        <li>Recipe img text recognition using Tesseract.js OCR</li>
                        <li>Ingredient text parsing using Python and New York Times trained CRF algorithm</li>
                        <li>Nutritional data calculated using data from USDA Food Data Central API</li>
                    </ul>
                </div>
                <div id="Future" class="tabcontent">
                    <ul>
                        <li>Move user image hosting to Amazon S3</li>
                        <li>Allow users to select and save which food item from USDA API matches their uploaded ingredient</li>
                        <li>Generate a full nutrition label for calculated values</li>
                        <li>Allow users to view, rate, and save eachother's recipes</li>
                    </ul>
                </div>
            </section>
        </article>
)}