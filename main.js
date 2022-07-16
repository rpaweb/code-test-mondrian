/* Main function: On body load, this will paint the Mondrian's inside-the-box. */
function paint() { 
  divs = '';
  times(28, i => {
    divs += `<div class="rectangle rectangle${i}" onclick="flash(${i})" onmouseenter="show(${i})" onmouseleave="hide(${i})">
                <div class="rectangle${i}InnerText"></div>
              </div>
            `;
  });

  document.querySelector(".inside").innerHTML = divs;
};

/* To iterate N-times. */
const times = (n, callback) => {
  for (let i = 1; i <= n; i++) {
    callback(i);
  };
};

/* Flash message. */
const flash = number => alert(`You're touching the rectangle #${number} of Mondrian's paint.`);

/* HIDE and SHOW functions for rectangle-inner-text divs. */
const hide = (n) => document.querySelector(`.rectangle${n}InnerText`).innerHTML = '';
const show = (n) => document.querySelector(`.rectangle${n}InnerText`).innerHTML = `<p>R${n}</p>`;