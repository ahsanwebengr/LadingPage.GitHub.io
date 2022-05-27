

//Navbar Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Back to top 
let backTop = document.querySelector(".backTop");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 400){
        backTop.classList.add("active");
    } else{
        backTop.classList.remove("active");
    }
});
// owlCarousel 

$('#projects-carousel').owlCarousel({
    loop:true,
    margin:24,
    dots: false,
    nav:false,
    smartSpeed: 1000,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// owlCarousel 

$('#reviews-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots: true,
    nav:false,
    smartSpeed: 1000,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
