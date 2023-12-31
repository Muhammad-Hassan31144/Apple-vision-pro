// JavaScript for image slider with navigation and indicators

const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  // Highlight the active indicator
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Event listener for the "Next" button
nextBtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

// Event listener for the "Previous" button
prevBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
});

// Event listeners for the indicators
indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", function () {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

// Show the initial slide
showSlide(currentIndex);

function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to("#page>video",{
  scrollTrigger:{
      trigger:`#page>video`,
      start:`2% top`,
      end:`bottom top`,
      scroller:`#main`
  },
  onStart:()=>{
      document.querySelector("#page>video").play()
  }
})


gsap.to("#page",{
  scrollTrigger:{
      trigger:`#page`,
      start:`top top`,
      end:`bottom top`,
      scroller:`#main`,
      pin:true
  }
})


gsap.to("#page-bottom",{
  scrollTrigger:{
      trigger:`#page-bottom`,
      start:`5% top`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  opacity:0
})



var tl = gsap.timeline({
  scrollTrigger:{
      trigger:`.videos`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl.to(".vid-eos>h1",{
  top:`-50%`
})






// var tl1 = gsap.timeline({
//   scrollTrigger:{
//       trigger:`.pages`,
//       start:`top top`,
//       scrub:1,
//       scroller:`#main`,
//       pin:true
//   }
// })


// tl1.to(".pages>h1",{
//   top:`-50%`
// })




// var tl2 = gsap.timeline({
//   scrollTrigger:{
//       trigger:`#page4`,
//       start:`top top`,
//       scrub:1,
//       scroller:`#main`,
//       pin:true
//   }
// })


// tl2.to("#page4>#center-page4",{
//   top:`-50%`
// })



function canvas(){
  const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
.//images/achiImage_1.jpg
.//images/achiImage_2.jpg
.//images/achiImage_3.jpg
.//images/achiImage_4.jpg
.//images/achiImage_5.jpg
.//images/achiImage_6.jpg
.//images/achiImage_7.jpg
.//images/achiImage_8.jpg
.//images/achiImage_9.jpg
.//images/achiImage_10.jpg
.//images/achiImage_11.jpg
.//images/achiImage_12.jpg
.//images/achiImage_13.jpg
.//images/achiImage_14.jpg
.//images/achiImage_15.jpg
.//images/achiImage_16.jpg
.//images/achiImage_17.jpg
.//images/achiImage_18.jpg
.//images/achiImage_19.jpg
.//images/achiImage_20.jpg
.//images/achiImage_21.jpg
.//images/achiImage_22.jpg
.//images/achiImage_23.jpg
.//images/achiImage_24.jpg
.//images/achiImage_25.jpg
.//images/achiImage_26.jpg
.//images/achiImage_27.jpg
.//images/achiImage_28.jpg
.//images/achiImage_29.jpg
.//images/achiImage_30.jpg
.//images/achiImage_31.jpg
.//images/achiImage_32.jpg
.//images/achiImage_33.jpg
.//images/achiImage_34.jpg
.//images/achiImage_35.jpg
.//images/achiImage_36.jpg
.//images/achiImage_37.jpg
.//images/achiImage_38.jpg
.//images/achiImage_39.jpg
.//images/achiImage_40.jpg
.//images/achiImage_41.jpg
.//images/achiImage_42.jpg
.//images/achiImage_43.jpg
.//images/achiImage_44.jpg
.//images/achiImage_45.jpg
.//images/achiImage_46.jpg
.//images/achiImage_47.jpg
.//images/achiImage_48.jpg
.//images/achiImage_49.jpg
.//images/achiImage_50.jpg
.//images/achiImage_51.jpg
.//images/achiImage_52.jpg
.//images/achiImage_53.jpg
.//images/achiImage_54.jpg
.//images/achiImage_55.jpg
.//images/achiImage_56.jpg
.//images/achiImage_57.jpg
.//images/achiImage_58.jpg
.//images/achiImage_59.jpg
.//images/achiImage_60.jpg
.//images/achiImage_61.jpg
.//images/achiImage_62.jpg
.//images/achiImage_63.jpg
.//images/achiImage_64.jpg
.//images/achiImage_65.jpg
.//images/achiImage_66.jpg
.//images/achiImage_67.jpg
.//images/achiImage_68.jpg
.//images/achiImage_69.jpg
.//images/achiImage_70.jpg
.//images/achiImage_71.jpg
.//images/achiImage_72.jpg
.//images/achiImage_73.jpg
.//images/achiImage_74.jpg
.//images/achiImage_75.jpg
.//images/achiImage_76.jpg
.//images/achiImage_77.jpg
.//images/achiImage_78.jpg
.//images/achiImage_79.jpg
.//images/achiImage_80.jpg
.//images/achiImage_81.jpg
.//images/achiImage_82.jpg
.//images/achiImage_83.jpg
.//images/achiImage_84.jpg
.//images/achiImage_85.jpg
.//images/achiImage_86.jpg
.//images/achiImage_87.jpg
.//images/achiImage_88.jpg
.//images/achiImage_89.jpg
.//images/achiImage_90.jpg
.//images/achiImage_91.jpg
.//images/achiImage_92.jpg
.//images/achiImage_93.jpg
.//images/achiImage_94.jpg
.//images/achiImage_95.jpg
.//images/achiImage_96.jpg
.//images/achiImage_97.jpg
.//images/achiImage_98.jpg
.//images/achiImage_99.jpg
.//images/achiImage_100.jpg
.//images/achiImage_101.jpg
.//images/achiImage_102.jpg
.//images/achiImage_103.jpg
.//images/achiImage_104.jpg
.//images/achiImage_105.jpg
.//images/achiImage_106.jpg
.//images/achiImage_107.jpg
.//images/achiImage_108.jpg
.//images/achiImage_109.jpg
.//images/achiImage_110.jpg
.//images/achiImage_111.jpg
.//images/achiImage_112.jpg
.//images/achiImage_113.jpg
.//images/achiImage_114.jpg
.//images/achiImage_115.jpg
.//images/achiImage_116.jpg
.//images/achiImage_117.jpg
.//images/achiImage_118.jpg
.//images/achiImage_119.jpg
.//images/achiImage_120.jpg
.//images/achiImage_121.jpg
.//images/achiImage_122.jpg
.//images/achiImage_123.jpg
.//images/achiImage_124.jpg
.//images/achiImage_125.jpg
.//images/achiImage_126.jpg
.//images/achiImage_127.jpg
.//images/achiImage_128.jpg
.//images/achiImage_129.jpg
.//images/achiImage_130.jpg
.//images/achiImage_131.jpg
.//images/achiImage_132.jpg
.//images/achiImage_133.jpg
.//images/achiImage_134.jpg
.//images/achiImage_135.jpg
.//images/achiImage_136.jpg
.//images/achiImage_137.jpg
.//images/achiImage_138.jpg
.//images/achiImage_139.jpg
.//images/achiImage_140.jpg
.//images/achiImage_141.jpg
.//images/achiImage_142.jpg
.//images/achiImage_143.jpg
.//images/achiImage_144.jpg
.//images/achiImage_145.jpg
.//images/achiImage_146.jpg
.//images/achiImage_147.jpg
.//images/achiImage_148.jpg
.//images/achiImage_149.jpg
.//images/achiImage_150.jpg
.//images/achiImage_151.jpg
.//images/achiImage_152.jpg
.//images/achiImage_153.jpg
.//images/achiImage_154.jpg
.//images/achiImage_155.jpg
.//images/achiImage_156.jpg
.//images/achiImage_157.jpg
.//images/achiImage_158.jpg
.//images/achiImage_159.jpg
.//images/achiImage_160.jpg
.//images/achiImage_161.jpg
.//images/achiImage_162.jpg
.//images/achiImage_163.jpg
.//images/achiImage_164.jpg
.//images/achiImage_165.jpg
.//images/achiImage_166.jpg
.//images/achiImage_167.jpg
.//images/achiImage_168.jpg
.//images/achiImage_169.jpg
.//images/achiImage_170.jpg
.//images/achiImage_171.jpg
.//images/achiImage_172.jpg
.//images/achiImage_173.jpg
.//images/achiImage_174.jpg
.//images/achiImage_175.jpg
.//images/achiImage_176.jpg
.//images/achiImage_177.jpg
.//images/achiImage_178.jpg
.//images/achiImage_179.jpg
.//images/achiImage_180.jpg
.//images/achiImage_181.jpg
.//images/achiImage_182.jpg
.//images/achiImage_183.jpg
.//images/achiImage_184.jpg
.//images/achiImage_185.jpg
.//images/achiImage_186.jpg
.//images/achiImage_187.jpg
.//images/achiImage_188.jpg
.//images/achiImage_189.jpg
.//images/achiImage_190.jpg
.//images/achiImage_191.jpg
.//images/achiImage_192.jpg
.//images/achiImage_193.jpg
.//images/achiImage_194.jpg
.//images/achiImage_195.jpg
.//images/achiImage_196.jpg
.//images/achiImage_197.jpg
.//images/achiImage_198.jpg
.//images/achiImage_199.jpg
`;
return data.split("\n")[index];
}

const frameCount = 198;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page7>canvas`,
  //   set start end according to preference
  start: `top top`,
  end: `600% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.min(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page7>canvas",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `600% top`,
});
}
canvas();



function canvas1(){
const canvas = document.querySelector("#page18>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
.//Apple vision canvas images/Vision00001.png
.//Apple vision canvas images/Vision00002.png
.//Apple vision canvas images/Vision00003.png
.//Apple vision canvas images/Vision00004.png
.//Apple vision canvas images/Vision00005.png
.//Apple vision canvas images/Vision00006.png
.//Apple vision canvas images/Vision00007.png
.//Apple vision canvas images/Vision00008.png
.//Apple vision canvas images/Vision00009.png
.//Apple vision canvas images/Vision00010.png
.//Apple vision canvas images/Vision00011.png
.//Apple vision canvas images/Vision00012.png
.//Apple vision canvas images/Vision00013.png
.//Apple vision canvas images/Vision00014.png
.//Apple vision canvas images/Vision00015.png
.//Apple vision canvas images/Vision00016.png
.//Apple vision canvas images/Vision00017.png
.//Apple vision canvas images/Vision00018.png
.//Apple vision canvas images/Vision00019.png
.//Apple vision canvas images/Vision00020.png
.//Apple vision canvas images/Vision00021.png
.//Apple vision canvas images/Vision00022.png
.//Apple vision canvas images/Vision00023.png
.//Apple vision canvas images/Vision00024.png
.//Apple vision canvas images/Vision00025.png
`;
return data.split("\n")[index];
}

const frameCount = 25;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
scrub: 0.15,
trigger: `#page18`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
img,
0,
0,
img.width,
img.height,
centerShift_x,
centerShift_y,
img.width * ratio,
img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page18",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
});
}
canvas1();



var tl3 = gsap.timeline({
scrollTrigger:{
    trigger:`#page21`,
    start:`top top`,
    scrub:1,
    scroller:`#main`,
    pin:true
}
})


tl3.to("#page21>#troff",{
opacity:0
})

var tl4 = gsap.timeline({
scrollTrigger:{
    trigger:`#page22`,
    start:`top top`,
    scrub:1,
    scroller:`#main`,
    pin:true
}
})


tl4.to("#page22>#snroff",{
opacity:0
})



gsap.to("#page23>img",{
scrollTrigger:{
  trigger:`#page23>img`,
  start:`top bottom`,
  end:`bottom 60%`,
  scrub:.5,
  scroller:`#main`
},
opacity:1
})
