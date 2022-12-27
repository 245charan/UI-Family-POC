var showNavBar = toggleFunction();

function toggleFunction() {
    var toggle = 1;
    return function() {
        var nav = document.getElementById("sidenav");
        var bigNav = document.getElementById("biggerNav");
        if (toggle == 1) {
            nav.style.display = "none";
            bigNav.style.display = "initial";
            document.getElementById("content").classList.add("decreaseContent");
            toggle = 0;
        } else {
            bigNav.style.display = "none";
            nav.style.display = "initial";
            document.getElementById("content").classList.remove("decreaseContent");
            toggle = 1;
        }
    }
}



var changeArrow = toggleArrow();

function toggleArrow() {
    var flag = 1;
    return function() {
        var downArrow = document.getElementById("downArrow");
        var upArrow = document.getElementById("upArrow");
        var absoluteArrow = document.getElementById("absoluteArrow");
        var userSettings = document.getElementById("userSettings");
        if (flag == 1) {
            downArrow.style.display = "none";
            upArrow.style.display = "initial";
            absoluteArrow.style.display = "initial";
            userSettings.style.display = "initial";
            flag = 0;
        } else {
            downArrow.style.display = "initial";
            upArrow.style.display = "none";
            absoluteArrow.style.display = "none";
            userSettings.style.display = "none";
            flag = 1;
        }
    }
}