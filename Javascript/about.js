$(".article-section a").each(function() {
    $(this).css("background-color", "color-mix(in oklab, "+$(this).attr("data-link-color")+", transparent 50%)");
    $(this).hover((e) => {
        $(this).css("background-color", e.type === "mouseenter" ? $(this).attr("data-link-color") : "color-mix(in oklab, "+$(this).attr("data-link-color")+", transparent 50%)");
    })
})