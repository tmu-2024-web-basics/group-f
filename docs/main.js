"use strict";

let easycount = 0;
let normalcount = 0;
let hardcount = 0;


let easyimgs = ["easy/img/14.png","easy/img/11.png","easy/img/10.png","easy/img/9.png"];
let normalimgs = ["normal/img/12.png","normal/img/13.png","normal/img/15.png","normal/img/16.png","normal/img/17.png",
"normal/img/8.png","normal/img/6.png","normal/img/5.png","normal/img/4.png","normal/img/7.png"]
let hardimgs = ["hard/img/14.png","hard/img/11.png","hard/img/10.png","hard/img/9.png",
"hard/img/8.png","hard/img/6.png","hard/img/4.png","hard/img/5.png",
"hard/img/7.png","hard/img/3.png","hard/img/2.png","hard/img/1.png"]

function resetSize(){
    let w = window.innerWidth;
    let h = window.innerHeight;
    let container01 = document.getElementById("container01");
    let title01 = document.getElementById("title01");
    let intro01 = document.getElementById("intro01");
    let line01 = document.getElementById("line01");
    let courses = document.getElementById("courses");
    let easy = document.getElementById("easy");
    let easyimg = document.getElementById("easyimg");
    let easyp = document.getElementById("easyp");
    let normal = document.getElementById("normal");
    let normalimg = document.getElementById("normalimg");
    let normalp = document.getElementById("normalp");
    let hard = document.getElementById("hard");
    let hardimg = document.getElementById("hardimg");
    let hardp = document.getElementById("hardp");


    if(w / h > 1){
        container01.style.backgroundImage = "url(img/top01.png)"
        container01.style.backgroundSize = "cover";
        title01.innerText = "HOW TO WALK IN TMU"
        title01.style.fontSize = "5vw";
        title01.style.paddingTop = "20vh";
        intro01.innerText = "最近、歩いていますか？\nこのサイトでは、東京都立大学で楽しく散歩してもらうために、\n大学内の綺麗なスポットを紹介しています。\n是非参考にしていただけると嬉しいです。\n\n↓"
        intro01.style.fontSize = "3vw";
        intro01.style.paddingTop = "10vh";
        line01.style.marginRight = "20vw";
        line01.style.marginLeft = "20vw";
        courses.style.flexDirection = "row";
        easy.style.width = "29vw";
        easy.style.height = "48vw";
        easyp.style.fontSize = "1.5vw";
        easyimg.style.width = "25vw";
        normal.style.width = "29vw";
        normal.style.height = "48vw";
        normalp.style.fontSize = "1.5vw";
        normalimg.style.width = "25vw";
        hard.style.width = "29vw";
        hard.style.height = "48vw";
        hardp.style.fontSize = "1.5vw";
        hardimg.style.width = "25vw";

       }else{
        container01.style.backgroundImage = "url(img/top02.png)"
        container01.style.backgroundSize = "cover";
        title01.innerText = "HOW TO WALK\nIN TMU";
        title01.style.fontSize = "7vh";
        title01.style.paddingTop = "5vh";
        intro01.innerText = "最近、歩いていますか？\nこのサイトでは、\n東京都立大学で楽しく\n散歩してもらうために、\n大学内の綺麗なスポットを\n紹介しています。\n是非参考にしていただけると\n嬉しいです。\n↓"
        intro01.style.fontSize = "3.5vh";
        line01.style.paddingLeft = "5vw";
        line01.style.paddingRight = "5vw";
        line01.style.marginRight = "5vw";
        line01.style.marginLeft = "5vw";
        courses.style.flexDirection = "column";
        easy.style.width = "90vw";
        easy.style.height = "160vw";
        easyp.style.fontSize = "4.5vw";
        easyimg.style.width = "86vw";
        easy.style.marginBottom = "5vh";
        normal.style.width = "90vw";
        normal.style.height = "160vw";
        normalp.style.fontSize = "4.5vw";
        normalimg.style.width = "86vw";
        normal.style.marginBottom = "5vh";
        hard.style.width = "90vw";
        hard.style.height = "160vw";
        hardp.style.fontSize = "4.5vw";
        hardimg.style.width = "86vw";
        hard.style.marginBottom = "5vh";


    }


}

function header(){
    let header01 = document.getElementById("header01");
    if(window.scrollY >= window.innerHeight * 0.7){
        header01.classList.add("isshow");
    }else{
        header01.classList.remove("isshow")
    }
    

}

function random(){
    let urls = ["easy/easy.html", "normal/normal.html", "hard/hard.html"];
    let r = Math.floor(Math.random() * 3);
    window.location = urls[r];
}

function easy(){
    window.location = "easy/easy.html";
}

function normal(){
    window.location = "normal/normal.html";
}

function hard(){
    window.location = "hard/hard.html";
}



function imgchange(){
    let easyimg = document.getElementById("easyimg");
    let normalimg = document.getElementById("normalimg");
    let hardimg = document.getElementById("hardimg");

    easycount++;
    normalcount++;
    hardcount++;

    if(easycount == 4){
        easycount = 0;
    }
    if(normalcount == 10){
        normalcount = 0;
    }
    if(hardcount == 12){
        hardcount = 0;
    }

    easyimg.src = easyimgs[easycount];
    normalimg.src = normalimgs[normalcount];
    hardimg.src = hardimgs[hardcount];

}

window.onload = function(){
    resetSize();
    header();
    window.addEventListener("resize",resetSize);
    window.addEventListener("scroll", header);
    setInterval(imgchange, 1000);
}
