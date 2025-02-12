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



// gsap.from("#page1 #p1-img",{
//   scale:0.5,
//   opacity:1,
//   duration:1,
//   delay:0.5,
//   // rotate:360,
//   scrollTrigger:{
//       trigger:"#page1 #p1-img",
//       scroller:"#main",
//       // markers:true,
//       start:"top 20%",
//       end:"top 15%",
//       scrub:2,
//       pin:true
//   }
// })




// Swiper js ka code

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// PAGE1
gsap.from("#wel-text h1",{
  y:200,
  duration:0.5,
  delay:0.3,
  opacity:0
})
gsap.from("#wel-text #img1",{
  y:100,
  duration:0.5,
  delay:0.4,
  opacity:0
})
gsap.from("#wel-text #img2",{
  y:100,
  duration:0.5,
  delay:0.4,
  opacity:0
})
gsap.from("#wel-text #img3",{
  y:100,
  duration:0.5,
  delay:0.4,
  opacity:0
})
gsap.from("#wel-text #img4",{
  y:100,
  duration:0.5,
  delay:0.4,
  opacity:0
})
gsap.from("#wel-text #img5",{
  y:100,
  duration:0.5,
  delay:0.4,
  opacity:0
})
gsap.from("#page1-img img",{
  y:100,
  duration:0.6,
  delay:0.7,
  opacity:0
})
gsap.from("#page1-img #img6",{
y:80,
duration:0.2,
delay:0.4,
opacity:0
})

gsap.to("#page1 #img7",{
  y:-100,
  // scale:0.5,
  // opacity:1,
  duration:0.6,
  delay:0.5,
  // rotate:360,
  scrollTrigger:{
      trigger:"#page1 #img7",
      scroller:"#main",
      // markers:true,
      start:"top 60%",
      end:"top 45%",
      scrub:2,
      // pin:true
  }
})
gsap.from("#page1-moto h2,#page1-moto h3",{
  y:100,
  duration:0.5,
  delay:2,
  opacity:0,
  stagger: 0.5,
  scrollTrigger:"#page1",
})

// PAGE2

gsap.from("#page2 h2,#page2 h3",{
  y:100,
  // scale:0.5,
  opacity:0,
  duration:0.1,
  delay:0.2,
  // stagger:0.5,
  scrollTrigger:{
      trigger:"#page2 h2,#page2 h3",
      scroller:"#main",
      // markers:true,
      start:"top 85%",
      end:"top 70%",
      scrub:2,
      // pin:true
  }
})

// PAGE3
gsap.from("#page3 h1",{
  y:130,
  // scale:0.5,
  opacity:0,
  duration:0.1,
  delay:0.1,
  // stagger:0.5,
  scrollTrigger:{
      trigger:"#page3 h1",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 75%",
      scrub:2,
      // pin:true
  }
})

// PAGE4
gsap.to("#page4 #menu-scroller",{
  transform:"translateX(-120vh)",
  duration:2,
  scrollTrigger:{
      trigger:"#page4 #menu-scroller",
      scroller:"#main",
      start:"top -0vh",
      end:"top -70vh",
      // markers:true,
      scrub:1,
      pin:true
  }
})
gsap.from("#page4 .menu-dish",{
  y:120,
  duration:1,
  delay:1,
  opacity:0,
  stagger: 0.6,
  scrollTrigger:{
    trigger:"#page4 .menu-dish",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 85%",
    scrub:2,
    // pin:true
}
})

// PAGE5
gsap.from("#page5 h1,#page5 h4",{
  y:100,
  duration:1,
  delay:1,
  opacity:0,
  stagger: 0.6,
  scrollTrigger:{
    trigger:"#page5 h1,#page5 h4",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 80%",
    scrub:2,
    // pin:true
}
})

// PAGE6
gsap.from("#page6 h1",{
  y:120,
  duration:1,
  delay:1,
  opacity:0,
  stagger: 0.6,
  scrollTrigger:{
    trigger:"#page6 h1",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 80%",
    scrub:2,
    // pin:true
}
})

// PAGE8
gsap.from("#page8 h1",{
  y:120,
  duration:1,
  delay:1,
  opacity:0,
  stagger: 0.6,
  scrollTrigger:{
    trigger:"#page8 h1",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 70%",
    scrub:2,
    // pin:true
}
})


// PAGE9
gsap.from("#page9 #page9-part1 h1",{
  y:120,
  duration:1,
  delay:1,
  opacity:0,
  stagger: 0.6,
  scrollTrigger:{
    trigger:"#page9 #page9-part1 h1",
    scroller:"#main",
    // markers:true,
    start:"top 85%",
    end:"top 75%",
    scrub:2,
    // pin:true
}
})


// PAGE10 Animation
gsap.timeline({
  scrollTrigger: {
    trigger: "#page10-hero",
    scroller: "#main",
    start: "top 85%",
    end: "top 55%",
    scrub: 2,
  },
})
  // Animate the #page10-hero section
  .to("#page10-hero", {
    width: "95%",
    duration: 0.7,
    delay: 1,
    opacity: 1,
  })
  // Animate the #p10-img1 image
  .from("#pg10-img #p10-img1", {
    scale: 0.9,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.6,
  }, "<") // Use "<" to overlap with the previous animation
  // Animate the h1 text in #pg10-text
  .from("#pg10-text h1", {
    y: 130,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.6,
  }, "<"); // Use "<" to overlap with the previous animation

// Improvements:
// 1. Used a gsap.timeline() to group all animations together and control their timing
// 2. Configured the ScrollTrigger for the entire timeline instead of individually
// 3. Added comments to explain each animation step
// 4. Removed unnecessary comments and cleaned up formatting
// 5. Used "<" to overlap the animations for a smoother transition