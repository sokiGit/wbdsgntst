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

/* Cursor effect */
const mouse_fx = $("<div>", {"class": "mouse-fx"}).appendTo($("body"));
$(document).mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    mouse_fx.css({
    left: e.clientX,
    top: e.clientY
    });
});

/* Chat transition */
$(".bubble").css(
    {
        scale: 0,
    }
)
$(".bubble:first-child").delay(75).animate(
    {
        scale: "100%"
    },
    500,
)
$(".bubble:nth-child(2)").animate(
    {
        scale: "100%"
    },
    500
)