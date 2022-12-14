var today = new Date();

function createiFrame(source, width, height) {
    let videoPlayer = document.querySelector(".videoPlayer");
        var ifrm = document.createElement("iframe");

        ifrm.setAttribute("src", source);
        ifrm.setAttribute("id", "iframeVideo");
        ifrm.setAttribute("frameborder", "0");

        ifrm.style.width = width;
        ifrm.style.height = height;

        videoPlayer.appendChild(ifrm);
}

function dag1() {
    if (document.querySelectorAll(".videoPlayer #iframeVideo").length === 0) {
        if (today.getFullYear() != 2022) {
            createiFrame("https://www.youtube.com/embed/9bZkp7q19f0?controls=0", "560px", "315px")
        } else if (today.getDate() >= 1) {
            createiFrame("https://www.youtube.com/embed/9bZkp7q19f0?controls=0", "560px", "315px")
        }
    }
}

