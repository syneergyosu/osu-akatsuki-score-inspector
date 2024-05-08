console.log("hello world!")

//This whole code to just open a pop-up when clicking on a button and closing the-pop up when clicking outside the container.

document.addEventListener("DOMContentLoaded", () => { 
    const activatePopup = document.getElementById("openButton");
    const Popup = document.getElementById("pop-search-container-background");
    const innerContainer = document.getElementById("pop-search-container");

    activatePopup.addEventListener("click", () => {
        if (Popup.classList.contains("open")) {
            Popup.classList.remove("open");
        } else {
            Popup.classList.add("open");
            disableScroll();
        }
    });

    //BUG #1
    //Found a bug where you click inside the inner container and release at the background it will close the pop-up menu
    document.getElementById("pop-search-container-background").addEventListener("click", (event) => {
        if (event.target.id === "pop-search-container-background") {
            Popup.classList.remove("open");
            enableScroll();
        }
    });


    // Disable scrolling
    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    // Enable scrolling
    function enableScroll() {
        document.body.style.overflow = '';
    }
});
