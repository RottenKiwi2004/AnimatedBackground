let navOpen = false;

document.querySelector(".select.close").addEventListener("click",toggleNav);
document.querySelector(".options .unhide").addEventListener("click",toggleNav);

function toggleNav() {
    if(navOpen) {
        document.querySelector(".options").style.marginLeft = "-70px";
        document.querySelector(".options .unhide").style.transform = "rotate(0deg)";
        document.querySelector(".main").style.marginLeft = "0px";
        navOpen=!navOpen;
    }
    else {
        document.querySelector(".options").style.marginLeft = "0px";
        document.querySelector(".options .unhide").style.transform = "rotate(180deg)";
        document.querySelector(".main").style.marginLeft = "70px";
        navOpen=!navOpen;
    }
}