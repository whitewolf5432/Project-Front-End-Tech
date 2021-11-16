fetch('/source/contentSrc/english.json')
    .then(response => response.json())
    .then(data => {
                console.log(data.butter2_album.paragraph)
                document.querySelector("#data").innerHTML = data.butter2_album.paragraph
    }
)

function letplay(){
    document.getElementById('videoframe').style.display = "block";
    document.getElementById('coverpic').style.display = "none";
    document.getElementById('btsvidcov').style.display = "none";
    document.getElementById('btsvidbtn').style.display = "none";
    document.getElementById('coverpic').style.height = "0";
}
function vidmenu(num){
    if (num == 1){
        document.getElementById('videoframe').src = "https://www.youtube.com/watch?v=OOMxU9f1FBU&t=4s";
        document.getElementById('btsvidcov').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/video-cover01.jpg";
    }
    else if(num == 2){
        document.getElementById('videoframe').src = "https://www.youtube.com/watch?v=WMweEpGlu_U";
        document.getElementById('btsvidcov').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/video-cover02.jpg";
    }
    else if(num == 3){
        document.getElementById('videoframe').src = "https://www.youtube.com/watch?v=YLXfyHsfFz0&t=1s";
        document.getElementById('btsvidcov').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/video-cover03.jpg";
    }
    else if(num == 4){
        document.getElementById('videoframe').src = "https://www.youtube.com/watch?v=ilqQJrbXghQ";
        document.getElementById('btsvidcov').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/video-cover04.jpg";
    }
    document.getElementById('videoframe').style.display = "none";
    document.getElementById('coverpic').style.display = "block";
    document.getElementById('btsvidcov').style.display = "block";
    document.getElementById('btsvidbtn').style.display = "block";
    document.getElementById('coverpic').style.height = "35vw";
}
var check1 = 1;
var check2 = 0;
var check3 = 0;
var check4 = 0;
var check5 = 0;
var check6 = 0;
var check7 = 0;
var check8 = 0;
function changepic(num){
    if (num == 1){
        document.getElementById('btspic').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/teaser1/bts.jpg";
        document.getElementById('btspic').style.width = "30%";
        document.getElementById('btsbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_bts_active.png";
        document.getElementById('jkbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jk.png";
        document.getElementById('rmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_rm.png";
        document.getElementById('jinbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jin.png";
        document.getElementById('sgbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_suga.png";
        document.getElementById('vbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_v.png";
        document.getElementById('jhbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jhope.png";
        document.getElementById('jmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jimin.png";
        check1 = 1;
        check2 = 0;
        check3 = 0;
        check4 = 0;
        check5 = 0;
        check6 = 0;
        check7 = 0;
        check8 = 0;
    }
    else if(num == 2){
        document.getElementById('btspic').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/teaser1/jungkook.jpg";
        document.getElementById('btspic').style.width = "30%";
        document.getElementById('btsbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_bts.png";
        document.getElementById('jkbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jk_active.png";
        document.getElementById('rmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_rm.png";
        document.getElementById('jinbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jin.png";
        document.getElementById('sgbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_suga.png";
        document.getElementById('vbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_v.png";
        document.getElementById('jhbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jhope.png";
        document.getElementById('jmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jimin.png";
        check1 = 0;
        check2 = 1;
        check3 = 0;
        check4 = 0;
        check5 = 0;
        check6 = 0;
        check7 = 0;
        check8 = 0;
    }
    else if(num == 3){
        document.getElementById('btspic').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/teaser1/rm.jpg";
        document.getElementById('btspic').style.width = "70%";
        document.getElementById('btsbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_bts.png";
        document.getElementById('jkbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jk.png";
        document.getElementById('rmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_rm_active.png";
        document.getElementById('jinbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jin.png";
        document.getElementById('sgbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_suga.png";
        document.getElementById('vbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_v.png";
        document.getElementById('jhbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jhope.png";
        document.getElementById('jmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jimin.png";
        check1 = 0;
        check2 = 0;
        check3 = 1;
        check4 = 0;
        check5 = 0;
        check6 = 0;
        check7 = 0;
        check8 = 0;
    }
    else if(num == 4){
        document.getElementById('btspic').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/teaser1/jin.jpg";
        document.getElementById('btspic').style.width = "70%";
        document.getElementById('btsbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_bts.png";
        document.getElementById('jkbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jk.png";
        document.getElementById('rmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_rm.png";
        document.getElementById('jinbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jin_active.png";
        document.getElementById('sgbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_suga.png";
        document.getElementById('vbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_v.png";
        document.getElementById('jhbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jhope.png";
        document.getElementById('jmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jimin.png";
        check1 = 0;
        check2 = 0;
        check3 = 0;
        check4 = 1;
        check5 = 0;
        check6 = 0;
        check7 = 0;
        check8 = 0;
    }
    else if(num == 5){
        document.getElementById('btspic').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/teaser1/suga.jpg";
        document.getElementById('btspic').style.width = "70%";
        document.getElementById('btsbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_bts.png";
        document.getElementById('jkbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jk.png";
        document.getElementById('rmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_rm.png";
        document.getElementById('jinbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jin.png";
        document.getElementById('sgbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_suga_active.png";
        document.getElementById('vbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_v.png";
        document.getElementById('jhbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jhope.png";
        document.getElementById('jmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jimin.png";
        check1 = 0;
        check2 = 0;
        check3 = 0;
        check4 = 0;
        check5 = 1;
        check6 = 0;
        check7 = 0;
        check8 = 0;
    }
    else if(num == 6){
        document.getElementById('btspic').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/teaser1/jhope.jpg";
        document.getElementById('btspic').style.width = "70%";
        document.getElementById('btsbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_bts.png";
        document.getElementById('jkbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jk.png";
        document.getElementById('rmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_rm.png";
        document.getElementById('jinbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jin.png";
        document.getElementById('sgbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_suga.png";
        document.getElementById('vbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_v.png";
        document.getElementById('jhbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jhope_active.png";
        document.getElementById('jmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jimin.png";
        check1 = 0;
        check2 = 0;
        check3 = 0;
        check4 = 0;
        check5 = 0;
        check6 = 1;
        check7 = 0;
        check8 = 0;
    }
    else if(num == 7){
        document.getElementById('btspic').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/teaser1/jimin.jpg";
        document.getElementById('btsbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_bts.png";
        document.getElementById('btspic').style.width = "30%";
        document.getElementById('jkbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jk.png";
        document.getElementById('rmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_rm.png";
        document.getElementById('jinbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jin.png";
        document.getElementById('sgbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_suga.png";
        document.getElementById('vbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_v.png";
        document.getElementById('jhbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jhope.png";
        document.getElementById('jmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jimin_active.png";
        check1 = 0;
        check2 = 0;
        check3 = 0;
        check4 = 0;
        check5 = 0;
        check6 = 0;
        check7 = 1;
        check8 = 0;
    }
    else if(num == 8){
        document.getElementById('btspic').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/teaser1/v.jpg";
        document.getElementById('btsbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_bts.png";
        document.getElementById('jkbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jk.png";
        document.getElementById('rmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_rm.png";
        document.getElementById('jinbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jin.png";
        document.getElementById('sgbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_suga.png";
        document.getElementById('vbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_v_active.png";
        document.getElementById('btspic').style.width = "30%";
        document.getElementById('jhbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jhope.png";
        document.getElementById('jmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jimin.png";
        check1 = 0;
        check2 = 0;
        check3 = 0;
        check4 = 0;
        check5 = 0;
        check6 = 0;
        check7 = 0;
        check8 = 1;
    }
    


}
function changebtn(num){
    if (num==1){
        document.getElementById('btsbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_bts_active.png";
    }
    else if (num==2){
        document.getElementById('jkbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jk_active.png";
    }
    else if (num==3){
        document.getElementById('rmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_rm_active.png";
    }
    else if (num==4){
        document.getElementById('jinbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jin_active.png";
    }
    else if (num==5){
        document.getElementById('sgbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_suga_active.png";
    }
    else if (num==6){
        document.getElementById('jhbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jhope_active.png";
    }
    else if (num==7){
        document.getElementById('jmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jimin_active.png";
    }
    else if (num==8){
        document.getElementById('vbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_v_active.png";
    }
}

function backbtn(num){
    if (num==1 && check1 == 0){
        document.getElementById('btsbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_bts.png";
    }
    else if (num==2 && check2 == 0){
        document.getElementById('jkbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jk.png";
    }
    else if (num==3 && check3 == 0){
        document.getElementById('rmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_rm.png";
    }
    else if (num==4 && check4 == 0){
        document.getElementById('jinbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jin.png";
    }
    else if (num==5 && check5 == 0){
        document.getElementById('sgbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_suga.png";
    }
    else if (num==6 && check6 == 0){
        document.getElementById('jhbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jhope.png";
    }
    else if (num==7 && check7 == 0){
        document.getElementById('jmbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_jimin.png";
    }
    else if (num==8 && check8 == 0){
        document.getElementById('vbtn').src = "../imgSrc/BTS/DISCOGRAPHY/BUTTER2/photo_v.png";
    }
}

