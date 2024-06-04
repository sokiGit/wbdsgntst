
let btns = document.getElementsByClassName("contact");
console.log(btns.length);

for (i = 0; i < btns.length; i++) {
    let btn = btns[i];
    console.log(btn.dataset.href);
    btn.style.setProperty("--hover-color", btn.getAttribute("data-color"));
    btn.onclick = () => {
        window.open(btn.dataset.href, "_blank")
    }
}