"use strict";

const titles = ["サークル棟向かい側の山","サークル棟","体育館","8.9号館前の池","11号館奥の池","8.9号館",
"11号館上","奥にあるから見逃し注意！","思ったより水は少ない！","人間観察を楽しもう！","都立大のワールドバザール！",
"上から一号館","下から一号館","広がる芝！広がる空！","たくさんの緑！","賑やかな溜まり場！","とにかく緑！"]

const imgs = ["img/1.png", "img/2.png", "img/3.png","img/4.png","img/5.png","img/6.png",
"img/7.png","img/8.png","img/9.png","img/10.png","img/11.png","img/12.png","img/13.png",
"img/14.png","img/15.png","img/16.png","img/17.png"];

const texts = ["自然を存分に感じられる空間！あまり人がいないので芝の上で堂々とお昼寝できます。空きコマなどに訪れるといいかも？",
"建築に興味がある人におすすめ！半円を描くような設計になってるサークル棟。入口にある階段は映画のワンシーンに出てきそうな幻想的な空間が広がっています。",
"天気の良い日は白い楽園に！新しく塗り直された白いペンキと空の雲とのハーモニー♪ここに来ると世界って広いんだなぁと感じることが出来ます！",
"夏に訪れたい冷感スポット！本当に都立大？と思わされるオシャレスポット。近くの椅子に座って眺めているといいアイディアが浮かぶかも？",
"非現実的な気分を味わいたいならココ！座って木々と池を眺めながら食事をすることができます。季節によって木々の色の変化を楽しむこともできます♪",
"建築と自然の融合を感じられる！8.9号館は同じような作りになっています。その違いを探しながら周りを歩いてみるのも楽しいかもしれません♪",
"都立大生の様子を上から覗いてみよう！普段私たちが歩いている場所を上から見下ろせるこの場所。今まで見えていなかったものがここでなら何か見つかるかも？",
"何をしている建物かはよくわかりません。夜になるととても綺麗です。",
"よく人とぶつかりそうになります。夜もおすすめです",
"ご飯を買いに来た学生やサークルに向かう学生が沢山います。様々な学生を観察しよう！",
"都立大でディズニーに行った気分になれるコスパの良いスポットです。屋根はありますが雨には注意！！！",
"ここもどこを見ても一号館しか見えないので屋上で風を感じながら一号館を堪能しましょう。階段も使って運動！！！",
"どこを見ても一号館しか見えません。石のベンチもあるのでちょっとまったりしましょう。",
"日向ぼっこに最適です。散歩序盤ですがここで一休みしましょう。",
"ここもとにかく緑が多いです。たくさんの緑を感じましょう。梅雨は紫陽花も綺麗です！",
"生協や食堂があるためお昼時は人が多いです。机付きのベンチもたくさんあるので散歩ついでに軽作業もアリ！目指せマルチタスク！",
"緑をここぞとばかりに体感しましょう。雨上がりにはビックサイズのミミズに要注意、、"
]

const pages = ["easy.html", "normal.html", "hard.html"];

const title02 = document.getElementById("title02");
let intro;
let intro_title;
let intro_back;
let intro_img;
let intro_text;
let intro_x;
let hh = 0;

function pinclicked(event,n,whatpage){
    if(intro){
        intro.remove();
        intro_back.remove();
    }
    let con;
    if(whatpage == 0){
        con = document.getElementById("container_e");
    }else if(whatpage == 1){
        con = document.getElementById("container_n");
    }else{
        con = document.getElementById("container_h");
    }

    document.getElementById("fix").classList.add("fix");


    let w = window.innerWidth;
    let h = window.innerHeight;
    let x = event.clientX;
    intro = document.createElement("div");

    intro_back = document.createElement("div");
    con.appendChild(intro_back);

    intro_title = document.createElement("h1");
    intro.appendChild(intro_title)
    intro_title.className = "intro_title";
    intro_title.innerText = titles[n - 1];

    if(w / h <= 1){
        intro_x = document.createElement("a");
        intro.appendChild(intro_x);
        intro_x.className = "intro_x";
        intro_x.textContent = "x";
        intro_x.href = pages[whatpage];

        hh = 1;
    }


    intro_img = document.createElement("img");
    intro.appendChild(intro_img);
    intro_img.src = imgs[n-1];

    intro_text = document.createElement("p");
    intro.appendChild(intro_text);
    intro_text.textContent = texts[n - 1];
    intro_text.className = "intro_text";
     
    if(w / h > 1){
        if(x < window.innerWidth / 2){
            intro_back.className = "intro_back right";
            intro.className = "introinmap right";
            intro_img.className = "intro_img_w";
        }else{
            intro_back.className = "intro_back left";
            intro.className = "introinmap left";
            intro_img.className = "intro_img_w";
        }
        
    }else{
        intro_back.className = "intro_back bottom";
        intro.className = "introinmap bottom";
        intro_img.className = "intro_img_h";

    }

    con.appendChild(intro);
    
}

function map_clicked(e){
    if(intro){
        intro.remove();
        intro_back.remove();
    
    }
    
    if(e == 0){
        document.getElementById("mape").classList.remove("fix");

    }if(e == 1){
        document.getElementById("mapn").classList.remove("fix");
    }
    if(hh == 1){
        intro_x.remove();
        hh = 0;
    }


    document.getElementById("fix").classList.remove("fix");
}

function header_clicked(){
    window.location.href = "../index.html";
    
}

