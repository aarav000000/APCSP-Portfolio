// A minimal CSS framework: you can research
// and choose others, or use none at all.
//import '@picocss/pico'

// Our stylesheet.
import './style.css'

import mashEx1 from './code-fragments/ex1.tsx?raw';
import mashEx2 from './code-fragments/ex2.tsx?raw';
import mashEx3 from './code-fragments/ex3.tsx?raw';
import mashEx4 from './code-fragments/ex4.tsx?raw';
import mashEx5 from './code-fragments/ex5.tsx?raw';
import mashEx6 from './code-fragments/ex6.tsx?raw';
import mashEx7 from './code-fragments/ex7.tsx?raw';
import mashEx8 from './code-fragments/ex8.tsx?raw';
import mashEx9 from './code-fragments/ex9.tsx?raw';
import mashEx10 from './code-fragments/ex10.tsx?raw';
import mashEx11 from './code-fragments/ex11.tsx?raw';
import mashEx12 from './code-fragments/ex12.tsx?raw';
import mashEx13 from './code-fragments/ex13.tsx?raw';
import mashEx14 from './code-fragments/ex14.tsx?raw';
import mashEx15 from './code-fragments/ex15.tsx?raw';
import mashEx16 from './code-fragments/ex16.tsx?raw';
import mashEx17 from './code-fragments/ex17.tsx?raw';



let examples = [
  [mashEx1, '#mash-ex-1'],
  [mashEx2, '#mash-ex-2'],
  [mashEx3, '#mash-ex-3'],
  [mashEx4, '#mash-ex-4'],
  [mashEx5, '#mash-ex-5'],
  [mashEx6, '#mash-ex-6'],
  [mashEx7, '#mash-ex-7'],
  [mashEx8, '#mash-ex-8'],
  [mashEx9, '#mash-ex-9'],
  [mashEx10, '#mash-ex-10'],
  [mashEx11, '#mash-ex-11'],
  [mashEx12, '#mash-ex-12'],
  [mashEx13, '#mash-ex-13'],
  [mashEx14, '#mash-ex-14'],
  [mashEx15, '#mash-ex-15'],
  [mashEx16, '#mash-ex-16'],
  [mashEx17, '#mash-ex-17'],


];
examples.forEach(
    ([code, id]) => {
        let element = document.querySelector(id);
        if (!element) {
            console.log(`Warning: didn't find expected element ${id}`)
        } else {
            element.textContent = code;
        }
    }
);

//from chat.gpt//
// JavaScript
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    const slides = document.querySelectorAll('.slide');

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'block';
}

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

const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
slide.addEventListener('click', ()=> slide.classList.toggle('active'))
});

`

// We can import raw code fragments for samples, like this:
import fragment from './code-fragments/fragment.js?raw'
document.querySelector('#fragment').textContent = fragment;

import importExample from './code-fragments/importExample.sh?raw'
document.querySelector('#importExample').textContent = importExample;
`
// A code highlighter
import hljs from 'highlight.js'
// You can check the folder for other themes!
import 'highlight.js/styles/panda-syntax-dark.css'
// This next line of code automatically finds
// code blocks in your HTML (in <pre><code></code>
// </pre>) and makes them look pretty!
hljs.highlightAll();

// This is a pretty good start for JavaScript: we will add more as needed!


