
/* Constants */
// Header
const header = $("header");
const mobile_hamburger = $(".mobile-hamburger");

// Early easter egg
const too_early = $(".too-early");
const too_early_close = $(".too-early-close");

// Banner
const to_bottom = $(".to-bottom");

/* Header */
mobile_hamburger.bind("touchend", (e) => {
    if (header.css("visibility") == "hidden")
    {
        header.css("visibility", "visible")
        document.body.style.overflow = "hidden"
    } else {
        header.css("visibility", "hidden")
        document.body.style.overflow = "scroll"
    }
})

/* Early easter egg */
function early_close() {
    too_early.css("visibility", "hidden");
}

too_early_close.bind("click", early_close);
too_early_close.bind("touched", early_close);

//early_close()

/* Banner */
to_bottom.click((e) => { 
    e.preventDefault();
    window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth"});
    
});