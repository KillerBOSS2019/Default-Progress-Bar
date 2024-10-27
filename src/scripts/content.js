const DEFAULT_COLOR = "var(--yt-spec-static-brand-red)";

let isYoutube = window.location.href.includes("youtube.com");
let isYTMusic = window.location.href.includes("music.youtube.com");

function setDefaultProgressBar( selector ) {
    let progress_bar = document.querySelector(selector);
    console.log("Progress bar: ", progress_bar)
    if (progress_bar) {
        progress_bar.style.background = DEFAULT_COLOR + " !important";
        console.log("Default progress bar color set");
    } else {
        setTimeout(() => {
            setDefaultProgressBar(selector);
        }, 100);
    }
}

function main() {
    if (isYTMusic) { // YTMusic needs to be first. because both contains "youtube.com"
        setDefaultProgressBar("#progress-bar #primaryProgress");
    } else if (isYoutube) {
        setDefaultProgressBar(".ytp-chrome-bottom .ytp-progress-list > div");
    } 
}

main();