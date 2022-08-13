// ==UserScript==
// @name         Wikipedia Random Episode
// @namespace    https://en.wikipedia.org/wiki/List_of_*episodes*
// @version      0.2
// @description  random episode title from wikipedia
// @author       crisxh
// @match        https://en.wikipedia.org/wiki/List_of_*episodes*
// @icon         https://www.google.com/s2/favicons?domain=wikipedia.org
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

      GM_addStyle(```
      #randomBox{
        display:flex;
        flex-direction:row-reverse;
        justify-content:flex-end;

      }
      #randomOutput{
        backround-color:lightgrey;
        height:50px;
        width:300px;
        margin:10px;
        border-radius:15px;
        padding:5px;
    }

    #randomButton{
        margin:10px;
        border:none;
        background-color:purple;
        height:50px;
        width:100px;
        border-radius:15px;
        border:2px outset black;
        color:white;
    }
    
    ```);

    const randomBox=document.createElement("div",{id:'randomBox'});
    const main=document.getElementById("bodyContent");
    const episodeContainer=document.querySelector(".wikiepisodetable");

    const randomOutput=document.createElement("div",{id:'randomOutput'});





    const randomButton=document.createElement("button",{id:'randomButton'});


    randomButton.addEventListener("click",function(){
         var episodes= document.querySelectorAll("td.summary");
    var titleRegex=/[^("\\")]\w+\s*[^(\\"")]/;

    var epArr=[];
    var titles=[];




    for (let i=0;i<episodes.length;i++){
    epArr.push(episodes[i].innerText);
    }

     var randomEp=epArr[Math.floor(Math.random()*epArr.length)];
    randomOutput.innerHTML="Your random episode title is: "+randomEp;


    });

    randomButton.innerHTML="Random Episode";



   episodeContainer.prepend(randomBox);
    randomBox.append(randomOutput);
    randomBox.append(randomButton);


    randomButton.addEventListener("mousedown",e=>{
    randomButton.style.backgroundColor="darkgreen";
    randomButton.style.border="2px inset black";
        });

    randomButton.addEventListener("mouseup",function(e){
     
        randomButton.style.backgroundColor="green";
        randomButton.style.border="2px outset black";
    });







})();