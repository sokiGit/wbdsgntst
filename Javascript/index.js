
/* Constants */
// Header
const header = $("header");
const mobile_hamburger = $(".mobile-hamburger");

// Early easter egg
const too_early = $(".too-early")
const too_early_close = $(".too-early-close");


/* Header */
mobile_hamburger.bind("touchend", (e) => {
    if (header.css("visibility") == "hidden")
    {
        header.css("visibility", "visible")
    } else {
        header.css("visibility", "hidden")
    }
})

/* Early easter egg */
function early_close() {
    too_early.css("visibility", "hidden");
}

too_early_close.bind("click", early_close);
too_early_close.bind("touched", early_close);

early_close()