// Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

window.addEventListener('scroll', throttle(parallax, 13));

function throttle(fn, wait) {
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
	let scrolled = window.pageYOffset;
	
	let parallax = document.querySelector("#level0");
	parallax.style.transform = 'translateY(' + (scrolled * 0.8) + 'px' + ')';
	
	let parallax1 = document.querySelector("#level1");
	parallax1.style.transform = 'translateY(' + (scrolled * 0.6) + 'px' + ')';

	let parallax2 = document.querySelector("#level2");
	parallax2.style.transform = 'translateY(' + (scrolled * 0.3) + 'px' + ')';
	
	let parallax3 = document.querySelector(".logo");
	parallax3.style.transform = 'translateY(' + (-scrolled * 0.8) + 'px' + ')';
};
// Toggle cursor
let cursorEnabled = false;

document.getElementById('cursorToggle').addEventListener('click', function() {
    if(cursorEnabled) {
        // Set back to default cursor
        document.body.style.cursor = 'auto';
        setLinksCursor('auto');
        cursorEnabled = false;
    } else {
        // Set custom cursors
        document.body.style.cursor = 'url(\'/root/cursornormal.png\'), auto';
        setLinksCursor('url(\'/root/cursorgolden.png\'), pointer');
        cursorEnabled = true;
    }
});

function setLinksCursor(cursorStyle) {
    document.querySelectorAll('a > img, .navbar > ul > li > a').forEach(el => {
        el.style.cursor = cursorStyle;
    });
}