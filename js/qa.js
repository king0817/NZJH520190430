//加载中
function loading() {
    var audio=
        '<div id="music">\n' +
        '    <div id="btn" class="on">\n' +
        '        <audio id="media" loop="loop" preload="auto" autoplay="autoplay"\n' +
        '               src="images/music.mp3"></audio>\n' +
        '    </div>\n' +
        '</div>';
    // var loading = '<div class="loading"><img src="images/loading.gif" alt=""></div>';
    // $("body").prepend(loading);
    // $("body").prepend(audio);
    $("body").append(audio);
    // document.onreadystatechange = function () {
    //     if (document.readyState == "complete") {
    //         $(".loading").fadeOut();
    //     }
    // };
}

loading();
//
var media = $("#media");

function music() {
    media.get(0).load();
    var mp3time = duqu('mp3time');
    // console.log(mp3time);
    if (mp3time) {
        media.get(0).currentTime = mp3time;
        media.get(0).play();
    } else {
        media.get(0).play();
    }
    $("#music").click(function () {
        // $("#pic").toggleClass("image");
        $("#btn").toggleClass("on").toggleClass("off");
        var btn_class = $("#btn").attr("class");
        if (btn_class == "on") {
            // $("#media").load();
            media.get(0).play();
        } else {
            media.get(0).pause();
        }
    });
    // if (media.get(0).paused) { //判读是否播放
    //     media.get(0).play(); //没有就播放
    // }
}

music();

function setCookie(c_name, value, expiredays) //cookia 保存函数
{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

function duqu(sName) {   // 读取函数
    var aCookie = document.cookie.split("; ");
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0])
            return unescape(aCrumb[1]);
    }
    return null
}