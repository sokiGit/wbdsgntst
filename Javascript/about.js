$(".article-section a").each(() => {
    $(this).css("background-color", "color-mix( in oklab, "+$(this).attr("data-link-color")+", transparent 50%)");
    $(this).hover(() => {
        $(this.css("background-color", $(this).attr("data-link-color")));
    })
})