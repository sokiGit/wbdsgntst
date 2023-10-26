const header = $("header");
const mobile_hamburger = $(".mobile-hamburger");

mobile_hamburger.bind("touchend", (e) => {
    header.css("visibility", "visible")
    mobile_hamburger.css("visibility", "hidden")
})