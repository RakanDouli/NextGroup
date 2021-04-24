

new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: './img/662fe4106044873.5f882d348ec56.jpg',
    image2: './img/1be997106044873.5f882d342f7e1.jpg',
    displacementImage: './img/diss.png',
    imagesRatio: 380 / 300
  })
// introduction animation 
  TweenMax.staggerFrom("nav div", 1.5, {
    delay: 1.5,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
  }, 0.08);


  // MEDIA
  TweenMax.staggerFrom(".media ul li", 1.5, {
    delay: 1.5,
    opacity: 0,
    x: "-20",
    ease: Expo.easeInOut
  }, 0.08);

  // TEXT
  TweenMax.from(".text h1 .hidetext", 1.5, {
    delay: 1,
    y: "100%",
    ease: Expo.easeInOut
  });

  TweenMax.from(".text h3 .hidetext", 1.5, {
    delay: 1.2,
    y: "100%",
    ease: Expo.easeInOut
  });
  TweenMax.from(".logo-container h1", 1.5, {
    delay: 1.2,
    opacity: 0,
    y: "100%",
    ease: Expo.easeInOut
  });

  TweenMax.from(".text p .hidetext", 1.5, {
    delay: 1.3,
    y: "100%",
    ease: Expo.easeInOut
  });

  TweenMax.from(".text h2", 1.5, {
    delay: 1.5,
    opacity: 0,
    x: "-10000",
    ease: Expo.easeInOut
  });

  TweenMax.to(".first", 1.5, {
    delay: .5,
    top: "-100%",
    ease: Expo.easeInOut
  });
  TweenMax.from(".distortion", 1.5, {
    delay: 2,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
  });
  TweenMax.from(".logo-container svg", 1.5, {
    delay: 1.5,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
  });

  TweenMax.from(".logo-container p", 1.5, {
    delay: 1.6,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
  });


// cards



// reveal on scroll
var controller = new ScrollMagic.Controller();
var reveal_info = document.querySelectorAll(".info-sec");
 for (var i=0; i<reveal_info.length; i++) { 
    new ScrollMagic.Scene({
              triggerElement: reveal_info[i], 
              offset: 50,                       
              triggerHook: .5,
              scrollDirection:"FORWARD",
           
            })
            .setClassToggle(reveal_info[i], "visible") 
            .addTo(controller)
            
 }




var reveal_img = document.querySelectorAll(".img-sec");
 for (var i=0; i<reveal_img.length; i++) { 
    new ScrollMagic.Scene({
              triggerElement: reveal_img[i], 
              offset: 50,                       
              triggerHook: .5,
            })
            .setClassToggle(reveal_img[i], "visible") 
            .addTo(controller)
            
            
 }
 var Product_Type= document.querySelectorAll(".info-sec-Header");
 for (var i=0; i<Product_Type.length; i++) { 
    new ScrollMagic.Scene({
              triggerElement: Product_Type[i], 
              offset: 50,                       
              triggerHook: .5,
            })
            .setClassToggle(Product_Type[i], "visible") 
            .addTo(controller);
           
            
 }

// scroll vertical inside main project image
// let appImages=document.querySelectorAll('.Ap-im');
// appImages.forEach(appImage=>{


//   var AnimateImges = TweenMax.fromTo(appImage, 1.5,
//     {
//       yPercent: 0},
//     { 
//       yPercent:-100}
// );
//   var scene= new ScrollMagic.Scene({
//     triggerElement:".Ap-im",
 
//     duration: '300%',
//     reverse:true
//   })
//   .addIndicators()
//   .setTween(AnimateImges)
//   .addTo(controller)
// })












// scroll horizental

 let horizontel=document.querySelector('.horizontel-first-project');

  var horzTl = new TimelineMax();
  horzTl.fromTo(horizontel, 1.5,                
                    {
                      xPercent: 0},
                    { 
                      xPercent:-50, ease: "back.out(1.7)"}
    );


  var horzScene = new ScrollMagic.Scene({
    triggerElement: horizontel,
    triggerHook:.05,
    duration: '300%',
    reverse:true

  })
    .setTween(horzTl)
    .setPin(horizontel)
    .addTo(controller);
    
  
// main project appear in text

var secOne=TweenMax.from(".info-one", 2, {

  opacity: 0,
  y: "-30",
  ease: Expo.easeInOut
});
var scene= new ScrollMagic.Scene({
  triggerElement:horizontel,

})
.setTween(secOne)
.addTo(controller)
var secTwo=TweenMax.from(".info-two", 4, {

  opacity: 0,
  y: "-30",
  ease: Expo.easeInOut
});
var scene= new ScrollMagic.Scene({
  triggerElement:'.appartment-detais',
  triggerHook: .5,
})
.setTween(secTwo)
.addTo(controller)


var im=TweenMax.from(".images-sec", .5, {

  opacity: 0,
  y: "20",
  ease: Expo.easeInOut
});
var scene= new ScrollMagic.Scene({
  triggerElement:horizontel,
  
})
.setTween(im)
.addTo(controller)







  
  var tile1 = TweenMax.fromTo('.line1', 1,
  {xPercent: 0},
	{xPercent:-10, ease: Sine.easeInOut}
);

  var scene= new ScrollMagic.Scene({
    triggerElement:".triger3",


  })
  // .addIndicators()
  .setTween(tile1)
  .addTo(controller)
 
  
  var tile2 = TweenMax.fromTo('.line2', 1,
  {xPercent: -30},
  {xPercent:0, ease: Sine.easeInOut}
);
  var scene= new ScrollMagic.Scene({
    triggerElement:".triger3",


  })

  .setTween(tile2)
  .addTo(controller)

var tile3 = TweenMax.fromTo('.line3', 1,
{xPercent: 0},
{xPercent:-10, ease: Sine.easeInOut}
);

var scene= new ScrollMagic.Scene({
  triggerElement:".triger3",


})

.setTween(tile3)
.addTo(controller)

















  // <!-- /* #2F334E  #3BBA9D*/ -->
  let color=document.querySelector('.switch__input');
color.addEventListener('click',()=>{
  if(color.checked==true){
    document.querySelector('.form-group textarea').style.border="1px solid rgba(255, 255, 255, 0.846)"

   

   document.querySelectorAll('.form-group input').forEach(b=>{
      b.style.border="1px solid rgba(255, 255, 255, 0.846)"
    })


    
    document.querySelector('footer').style="background-color:rgb(74, 79, 111);"
    document.documentElement.style.setProperty('--color-whiteish', '#2F334E');
    document.documentElement.style.setProperty('--color-blueish', '#3BBA9D');
    document.getElementsByTagName("BODY")[0].style.color="#E8E5E5"
  
    document.querySelector('#language').style.color="#E8E5E5"
    document.querySelector('#language').style.backgroundColor="#2F334E"
    document.querySelectorAll("#nav-icon1 span").forEach(i=>{
      i.style.background="#E8E5E5"
    })
   


  }else{
    document.querySelector('.form-group textarea').style.border="1px solid black"
    document.querySelector('.form-group input').style.border="1px solid black"
    document.querySelectorAll('.form-group input').forEach(b=>{
      b.style.border="1px solid black"
    })




    document.querySelector('footer').style="background-color:#E8E5E5;"
    document.documentElement.style.setProperty('--color-whiteish', ' #e8e5e5');
  document.documentElement.style.setProperty('--color-blueish', '#8599A2');
  document.getElementsByTagName("BODY")[0].style.color=""

  document.querySelector('#language').style.color=""
  document.querySelector('#language').style.backgroundColor=""
  document.querySelectorAll("#nav-icon1 span").forEach(i=>{
    i.style.background=""
  })
  }
  

 
})
