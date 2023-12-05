$(".article-section a").foreach(() => {
    $(this).css("background-color", $(this).attr("data-link-color"))
})