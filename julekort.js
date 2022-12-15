var today = new Date();
var kalender = document.getElementById("kalender")

function returnCal() {
    let table = document.querySelector(".table");
    table.innerHTML = ''
    document.getElementById("kalender").classList.add("kalender")
    document.getElementById("kalender").classList.remove("kalenderVideo")
}

function showVideo(source, width, height) {
    let table = document.querySelector(".table");
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")

    table.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    
    var ifrm = document.createElement("iframe");

    ifrm.setAttribute("src", source);
    ifrm.setAttribute("id", "iframeVideo");
    ifrm.setAttribute("frameborder", "0");
    ifrm.setAttribute("sandbox", "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox")

    ifrm.style.width = width;
    ifrm.style.height = height;

    document.getElementById("kalender").classList.add("kalenderVideo")
    document.getElementById("kalender").classList.remove("kalender")
    td1.appendChild(ifrm);
    
    var img = document.createElement("img")
    img.setAttribute("src", "misc/return.png")
    img.setAttribute("id", "return")
    img.setAttribute("onclick", "returnCal()")

    td2.appendChild(img)
}

function dag1() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/9bZkp7q19f0?controls=0", "560px", "315px")
        } else if (today.getDate() >= 1) {
            showVideo("https://www.youtube.com/embed/9bZkp7q19f0?controls=0", "560px", "315px")
        }
    }
}

function dag2() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/9bZkp7q19f0?controls=0", "560px", "315px")
        } else if (today.getDate() >= 1) {
            showVideo("https://www.youtube.com/embed/9bZkp7q19f0?controls=0", "560px", "315px")
        }
    }
}

function dag2() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/G7RgN9ijwE4", "560px", "315px")
        } else if (today.getDate() >= 1) {
            showVideo("https://www.youtube.com/embed/G7RgN9ijwE4", "560px", "315px")
        }
    }
}

function dag3() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/-5Ilq3kFxek?controls=0", "560px", "315px")
        } else if (today.getDate() >= 3) {
            showVideo("https://www.youtube.com/embed/-5Ilq3kFxek?controls=0", "560px", "315px")
        }
    }
}

function dag4() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/YBkmefllgiE?controls=0", "560px", "315px")
        } else if (today.getDate() >= 4) {
            showVideo("https://www.youtube.com/embed/YBkmefllgiE?controls=0", "560px", "315px")
        }
    }
}

function dag5() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/XF7b_MNEIAg?controls=0", "560px", "315px")
        } else if (today.getDate() >= 5) {
            showVideo("https://www.youtube.com/embed/XF7b_MNEIAg?controls=0", "560px", "315px")
        }
    }
}

function dag6() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/sp_WV91jx8E?controls=0", "560px", "315px")
        } else if (today.getDate() >= 6) {
            showVideo("https://www.youtube.com/embed/sp_WV91jx8E?controls=0", "560px", "315px")
        }
    }
}

function dag7() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/BUS6nKpddec?controls=0", "560px", "315px")
        } else if (today.getDate() >= 7) {
            showVideo("https://www.youtube.com/embed/BUS6nKpddec?controls=0", "560px", "315px")
        }
    }
}

function dag8() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/he2a4xK8ctk?controls=0", "560px", "315px")
        } else if (today.getDate() >= 8) {
            showVideo("https://www.youtube.com/embed/he2a4xK8ctk?controls=0", "560px", "315px")
        }
    }
}

function dag9() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/CMNry4PE93Y?controls=0", "560px", "315px")
        } else if (today.getDate() >= 9) {
            showVideo("https://www.youtube.com/embed/CMNry4PE93Y?controls=0", "560px", "315px")
        }
    }
}

function dag10() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/SezZaeEt1SA?controls=0", "560px", "315px")
        } else if (today.getDate() >= 10) {
            showVideo("https://www.youtube.com/embed/SezZaeEt1SA?controls=0", "560px", "315px")
        }
    }
}

function dag11() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/3_cKTw8cB78?controls=0", "560px", "315px")
        } else if (today.getDate() >= 11) {
            showVideo("https://www.youtube.com/embed/3_cKTw8cB78?controls=0", "560px", "315px")
        }
    }
}

function dag12() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/ZZbIx7xy5mc?controls=0", "560px", "315px")
        } else if (today.getDate() >= 12) {
            showVideo("https://www.youtube.com/embed/ZZbIx7xy5mc?controls=0", "560px", "315px")
        }
    }
}

function dag13() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/bEWAPdF4ZYQ?controls=0", "560px", "315px")
        } else if (today.getDate() >= 13) {
            showVideo("https://www.youtube.com/embed/bEWAPdF4ZYQ?controls=0", "560px", "315px")
        }
    }
}

function dag14() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/q6I29UlOZSo?controls=0", "560px", "315px")
        } else if (today.getDate() >= 14) {
            showVideo("https://www.youtube.com/embed/q6I29UlOZSo?controls=0", "560px", "315px")
        }
    }
}

function dag15() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/nGeKSiCQkPw?controls=0", "560px", "315px")
        } else if (today.getDate() >= 15) {
            showVideo("https://www.youtube.com/embed/nGeKSiCQkPw?controls=0", "560px", "315px")
        }
    }
}

function dag16() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/iheOMq8UkN4?controls=0", "560px", "315px")
        } else if (today.getDate() >= 16) {
            showVideo("https://www.youtube.com/embed/iheOMq8UkN4?controls=0", "560px", "315px")
        }
    }
}

function dag17() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/Vi41zAu4FfM?controls=0", "560px", "315px")
        } else if (today.getDate() >= 17) {
            showVideo("https://www.youtube.com/embed/Vi41zAu4FfM?controls=0", "560px", "315px")
        }
    }
}

function dag18() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/q1aMrTPyrBU?controls=0", "560px", "315px")
        } else if (today.getDate() >= 18) {
            showVideo("https://www.youtube.com/embed/q1aMrTPyrBU?controls=0", "560px", "315px")
        }
    }
}

function dag19() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/fxf75LxaGfI?controls=0", "560px", "315px")
        } else if (today.getDate() >= 19) {
            showVideo("https://www.youtube.com/embed/fxf75LxaGfI?controls=0", "560px", "315px")
        }
    }
}

function dag20() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/rWU9qrZB3QQ?controls=0", "560px", "315px")
        } else if (today.getDate() >= 20) {
            showVideo("https://www.youtube.com/embed/rWU9qrZB3QQ?controls=0", "560px", "315px")
        }
    }
}

function dag21() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/RSQfYM6g2yQ?controls=0", "560px", "315px")
        } else if (today.getDate() >= 21) {
            showVideo("https://www.youtube.com/embed/RSQfYM6g2yQ?controls=0", "560px", "315px")
        }
    }
}

function dag22() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/h9jeLSHnObY?controls=0", "560px", "315px")
        } else if (today.getDate() >= 22) {
            showVideo("https://www.youtube.com/embed/h9jeLSHnObY?controls=0", "560px", "315px")
        }
    }
}

function dag23() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/bFzrB-lo9k8?controls=0", "560px", "315px")
        } else if (today.getDate() >= 23) {
            showVideo("https://www.youtube.com/embed/bFzrB-lo9k8?controls=0", "560px", "315px")
        }
    }
}

function dag24() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            showVideo("https://www.youtube.com/embed/ufUEx9vUyA0?controls=0", "560px", "315px")
        } else if (today.getDate() >= 24) {
            showVideo("https://www.youtube.com/embed/ufUEx9vUyA0?controls=0", "560px", "315px")
        }
    }
}

