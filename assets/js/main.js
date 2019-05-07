/*section-1*/

window.onload = function() {
    var olink1 = document.getElementById("S1A7content1");
    var olink2 = document.getElementById("S1A7content2");
    var olink3 = document.getElementById("S1A7content3");
    olink1.onclick = function() {
        olink1.style.color = "red";
        olink2.style.color = "white";
        olink3.style.color = "white";
    }
    olink2.onclick = function() {
        olink2.style.color = "red";
        olink1.style.color = "white";
        olink3.style.color = "white";
    }
    olink3.onclick = function() {
        olink3.style.color = "red";
        olink1.style.color = "white";
        olink2.style.color = "white";
    }
}
$("#S1A1img").click(function() {
    $("#S1Arow2").slideToggle("slow");
});
$("#S1A3img").click(function() {
    $("#S1Arow4").slideToggle("slow");
});
/*section-2*/
function SwitchPages(page, side) {
    if (side == 1) {
        var $content = $(`.left`);
    } else {
        var $content = $(`.right`);
    }

    var page = page;
    if (page == 'record') {
        // 核貸紀錄
        const newContentHtml = `<img src="assets/media/yee.gif">
                <img src="assets/media/yee.gif">
                <img src="assets/media/yee.gif">`;


        $content.html(newContentHtml);
    } else if (page == 'loan') {
        // 核貸書
        const newContentHtml = `<img src="assets/media/winnie.jpg">
                <img src="assets/media/winnie.jpg">
                <img src="assets/media/winnie.jpg">`;
        $content.html(newContentHtml);

    } else if (page == 'application') {
        //申請書

    } else if (page == 'credit') {
        // 徵信

    } else if (page == 'image') {
        // 掃描
    } else if (page == 'edit_loan') {
        // 修改核貸書
    }

}

$(".loan").click(function(event) {
    var page = "loan";
    if ($(this).parent().is('.lc')) {
        console.log("a1")
        SwitchPages(page, 1); //左
    } else {
        console.log("a2")
        SwitchPages(page, 2); //右
    }
});


$(".db-bt").click(function(event) {
    console.log("2")
    if ($("#side-2").hasClass("off")) {
        console.log("3");
        $("#side-2").css("display", "block");
    } else {
        $("#side-2").css("display", "none");
    }
    $("#side-2").toggleClass("off")

});


$(".loan").click(function(event) {
    var page = "loan";
    if ($(this).parent().is('.lc')) {
        console.log("a1")
        SwitchPages(page, 1); //左
        $(".lc .on").removeClass("on")
        $(".lc .loan").toggleClass("on")
    } else {
        console.log("a2")
        SwitchPages(page, 2); //右
        $(".rc .on").removeClass("on")
        $(".rc .loan").toggleClass("on")
    }
});


$("body").delegate(".record", "click", function(e) {
    var page = "record";
    if ($(this).parent().is('.lc')) {
        console.log("a1")
        SwitchPages(page, 1); //左
        $(".lc .on").removeClass("on")
        $(".lc .record").toggleClass("on")


    } else {
        console.log("a2")
        SwitchPages(page, 2); //右
        $(".rc .on").removeClass("on")
        $(".rc .record").toggleClass("on")
    }


});

var el = document.getElementById("S2A2colume1");
    var e2 = document.getElementById("S2A2colume2");
    var e3 = document.getElementById("S2B201");
    var e4 = document.getElementById("S2B202");
    var e5 = document.getElementById("S2B203");
    var e6 = document.getElementById("S2B204");
    var e7 = document.getElementById("S2B6colume1");
    var e8 = document.getElementById("S2B6colume2");    
new ResizeSensor(jQuery('#S2A'), function(){      
    if( $("#S2A").width() > 1000){         
        el.style.width = "60%";
        e2.style.width = "38%";
    }
    if( $("#S2A").width() < 1000){      
        el.style.width = "100%";
        e2.style.width = "100%";
    }
    if( $("#S2A").width() > 600){         
        e3.style.width = "15%";
        e4.style.width = "15%";
        e5.style.width = "15%";
        e6.style.width = "45%";
    }
    if( $("#S2A").width() < 600){      
        e3.style.width = "28%";
        e4.style.width = "28%";
        e5.style.width = "28%";
        e6.style.width = "90%";
    }
    if( $("#S2A").width() < 200){      
        e7.style.width = "90%";
        e8.style.width = "90%";
    }
    else if( $("#S2A").width() < 400){      
        e7.style.width = "50%";
        e8.style.width = "50%";
    }
    if( $("#S2A").width() > 400){      
        e7.style.width = "35%";
        e8.style.width = "60%";
    }
});
    if( $("#S2A").width() > 1000){         
        el.style.width = "60%";
        e2.style.width = "38%";
    }
    if( $("#S2A").width() < 1000){      
        el.style.width = "100%";
        e2.style.width = "100%";
    }
    if( $("#S2A").width() > 600){         
        e3.style.width = "15%";
        e4.style.width = "15%";
        e5.style.width = "15%";
        e6.style.width = "45%";
    }
    if( $("#S2A").width() < 600){      
        e3.style.width = "30%";
        e4.style.width = "30%";
        e5.style.width = "30%";
        e6.style.width = "90%";
    }
    if( $("#S2A").width() < 200){      
        e7.style.width = "90%";
        e8.style.width = "90%";
    }
    else if( $("#S2A").width() < 400){      
        e7.style.width = "50%";
        e8.style.width = "50%";
    }
    if( $("#S2A").width() > 400){      
        e7.style.width = "35%";
        e8.style.width = "60%";
    }



/*section-3*/

/*section-4*/