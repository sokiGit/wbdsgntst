
/* Constants */


// Early easter egg
const too_early = $(".too-early");
const too_early_close = $(".too-early-close");

// Banner
const to_bottom = $(".to-bottom");

/* Early easter egg */
function early_close() {
    too_early.css("visibility", "hidden");
}

too_early_close.bind("click", early_close);
too_early_close.bind("touched", early_close);

early_close()

/* Banner */
to_bottom.click((e) => { 
    e.preventDefault();
    window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth"});
});