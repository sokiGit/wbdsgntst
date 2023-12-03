// Script by Pavitra Golcha on codepen, modified by me to my liking.
// https://codepen.io/pavi2410/pen/oNjGVgM

const canvas = document.getElementById("matrix_canvas");

const state = {
  fps: 30,
  color: "#52e7ff20",
  charset: `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}/\"'?!%$_-()[]`,
  size: parseInt(window.getComputedStyle(canvas, null).getPropertyValue("font-size"))
};

const ctx = canvas.getContext("2d");

let w, h, p;
const resize = () => {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;

  p = Array(Math.ceil(w / state.size)).fill(0);
};
window.addEventListener("resize", resize);
resize();

const random = (items) => items[Math.floor(Math.random() * items.length)];

const draw = () => {
  ctx.fillStyle = "#12121250"
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = state.color;

  ctx.font = state.size + 'px sans-serif'
  for (let i = 0; i < p.length; i++) {
      let v = p[i];
      ctx.fillText(random(state.charset), i * state.size, v);
      p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + state.size;
    }
};

let interval = setInterval(draw, 1000 / state.fps);
