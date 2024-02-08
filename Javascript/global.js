var WINDOW_ORIGIN = window.location.origin
if (WINDOW_ORIGIN == "https://www.github.com/") {
    WINDOW_ORIGIN = "https://www.github.com/sokiGit/wbdsgntst/"
}

$("body").append(`<button class="mobile-hamburger">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
</button>`)

/* Header */

$("header").append(`<h2>
<a href="${WINDOW_ORIGIN}">
<img src="${WINDOW_ORIGIN}/Icons/Favicon.png">
Pavel Šefl
</a>
</h2>
<span class="header-buttons">
<a id="header-btn-home" href="${WINDOW_ORIGIN}">Domů</a>
<a id="header-btn-projects" href="${WINDOW_ORIGIN}/projects">Projekty</a>
<a id="header-btn-about" href="${WINDOW_ORIGIN}/about">O mě</a>
<a id="header-btn-contacts" href="${WINDOW_ORIGIN}/contacts">Kontakty</a>
</span>`)

const header = $("header");
const mobile_hamburger = $(".mobile-hamburger");

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

var current_page = window.location.pathname.match("^/[a-z]+(?=/)") 
current_page = current_page == null ? "" : current_page.toString().substring(1);

const PAGE_TO_CLASS = {
    "": "header-btn-home",
    "projects": "header-btn-projects",
    "about": "header-btn-about",
    "contacts": "header-btn-contacts"
} //ik i could've done this in a simpler way, but it's safer and more flexible this way.

$(`#${PAGE_TO_CLASS[current_page]}`).addClass("current")
$(`#${PAGE_TO_CLASS[current_page]}`).removeAttr("href")