const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  

    // nav bar

    burger.addEventListener('click',()=>{
    nav.classList.toggle('open');
    navLinks.forEach(link =>{
        link.classList.toggle("fade");
    })

            // links animacion
    navLinks.forEach((link, index) => {
     if(link.style.animation){
         link.style.animation = ''
     }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
     }
      
    });
    // burger animation
    burger.classList.toggle('toggle');
    });


}
navSlide();




// const videopopupfuncion = () =>{


// videoPop.addEventListener('click', ()=>{
//     videopopConatiner.classList.toggle('active');

// })

// }

// videopopupfuncion();






$('.collapsible').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
    onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
  });



const downloadButton = document.getElementById('downloadButton');
const text = document.getElementById('textbuttom');

downloadButton.addEventListener('click', function (){
    if(text.classList.contains('formnone')){
        text.classList.remove('formnone');
    } else {
        text.classList.add('formnone');
    }


});

const icon = document.getElementById('iconbuttom');

downloadButton.addEventListener('click', function (){
    if(icon.classList.contains('formnone')){
        icon.classList.remove('formnone');
    } else {
        icon.classList.add('formnone');
    }
    
    
});

const textresponsive = document.getElementById('texuniquetbuttom');

downloadButton.addEventListener('click', function (){
    if(textresponsive.classList.contains('formnone')){
        textresponsive.classList.remove('formnone');
    } else {
        textresponsive.classList.add('formnone');
    }
    
    
});

const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      console.log('😍');

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);

(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space




// function parallax(element, distance, speed){
//     const item = document.querySelector(element);

//     item.style.transform = `translateY(${distance * speed}px)`;
// }
//     window.addEventListener("scroll", function(){
//         parallax(".acuarela--item", window.scrollY, 0.1);

//  });

//  function callback(entries, observer) {
//      console.log('se llamo al callback')
//  })

// const observer = new IntersectionObserver(callback, Option)
// observer.observe(parallax)


var mb = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(mb,{

      });



      const videoButton = document.getElementById('videoButton');
      const videopopConatiner = document.getElementById('videopopConatiner');
      const closebutton = document.getElementById('closebutton');
     
      videoButton.addEventListener('click', function () {
          console.log('funciona')
          videopopConatiner.classList.add('active');
      });

      closebutton.addEventListener('click', function (){
        videopopConatiner.classList.remove('active');
      })



      const videoButtonmd = document.getElementById('videoButtonmd');
      const videopopConatinermd = document.getElementById('videopopConatinermd');
      const closebuttonmd = document.getElementById('closebuttonmd');
     
      videoButtonmd.addEventListener('click', function () {
          console.log('funciona2')
          videopopConatinermd.classList.add('active');
      });

      closebuttonmd.addEventListener('click', function (){
        videopopConatinermd.classList.remove('active');
      })

      const galleryButton = document.getElementById('galleryButton');