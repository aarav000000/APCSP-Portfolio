// A minimal CSS framework: you can research
// and choose others, or use none at all.
//import '@picocss/pico'

// Our stylesheet.
import './style.css'
//from chat.gpt//
// JavaScript
function createStars() {
    const body = document.body; // Target the body element

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        body.appendChild(star);

        // Randomly position stars initially
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;

        // Randomize animation delay for a more realistic effect
        const delay = Math.random() * 5;
        star.style.animationDelay = `${delay}s`;
    }
}

createStars();

// Animate stars
function animateStars() {
    const stars = document.querySelectorAll('.star');

    stars.forEach((star) => {
        const duration = Math.random() * 3 + 2; // Random animation duration
        star.style.animation = `twinkle ${duration}s linear ${Math.random()*5}s infinite alternate`;
        
        
      
        // Randomly change star position after each animation iteration
        setTimeout(() => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
        }, Math.random() * duration * 1000);
      // Delay the position change randomly
    });
}

animateStars();

let rows = document.querySelectorAll('.card')
console.log(rows)
for (let div of rows){
  div.addEventListener(
    "click",
    function(e){
      e.target.closest('.card').classList
      .toggle('active');
  
    }
  );
}
//Name spinning from chat GPT//
let angle = 0;
//const radius = 150;
// set radius to be proportional to window width

const speed = 0.02;

function animateNames() {
  const radius = window.innerWidth * 0.15;
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");

    const x1 = radius * Math.cos(angle);
    const y1 = radius * Math.sin(angle);
    const x2 = -x1;
    const y2 = -y1;

    firstName.style.transform = `translate(${x1}px, ${y1}px)`;
    lastName.style.transform = `translate(${x2}px, ${y2}px)`;

    angle += speed;
    requestAnimationFrame(test);
}

function test() {
  animateNames()

}
animateNames();

const planets = document.querySelectorAll('#planet-container img');

planets.forEach((planet, index) => {
  const animationDuration = 30 + index * 10; // Adjust duration for each planet
  planet.style.animation = `rotate ${animationDuration}s linear infinite`;
});
document.querySelector('div').addEventListener('mouseover', function() {
  document.querySelector('div').classList.add('custom-cursor');
});
// Add an event listener to revert to the default cursor on mouseout
document.querySelector('div').addEventListener('mouseout', function() {
  document.querySelector('div').classList.remove('custom-cursor');
});
`

// We can import raw code fragments for samples, like this:
import fragment from './code-fragments/fragment.js?raw'
document.querySelector('#fragment').textContent = fragment;

import importExample from './code-fragments/importExample.sh?raw'
document.querySelector('#importExample').textContent = importExample;

// A code highlighter
import hljs from 'highlight.js'
// You can check the folder for other themes!
import 'highlight.js/styles/panda-syntax-dark.css'
// This next line of code automatically finds
// code blocks in your HTML (in <pre><code></code>
// </pre>) and makes them look pretty!
hljs.highlightAll();

// This is a pretty good start for JavaScript: we will add more as needed!
`