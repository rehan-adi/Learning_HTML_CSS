var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
  },
});

tl.to("#fanta", {
  y: 680, 
  x: -400,
}, 'orange');


tl.to(".orange", {
  y: 750, 
  x: 350,
  width : "270px",
}, 'orange');

tl.to(".singleorange", {
  width : " 220px",
  y: 999, 
  x: -120,
}, 'orange');

tl.to(".leaf2", {
  y: 390, 
  x: -1250,
}, 'orange');

tl.to(".leaf1", {
  y: 700, 
  x: 1100,
}, 'orange');


var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-div",
    start: "0% 50%",
    end: "70% 50%",
    scrub: true,
    marker: true
  },
});

tl2.from(".img-bottle", {
  y: 350,
  x: 200,
  rotate: "60deg"
})