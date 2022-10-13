window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.height = "72px";
        document.getElementById("navbar").style.fontSize = "0.85em";
        document.getElementById("logo").style.width= "120px";
    } else {
        document.getElementById("navbar").style.height = "100px";
        document.getElementById("navbar").style.fontSize = "1em";
        document.getElementById("logo").style.width= "180px";
    }
}

function closeoverlay() {
    document.getElementById("overlay").style.visibility= "hidden";
}