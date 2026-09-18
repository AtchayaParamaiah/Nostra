var offer = document.getElementById("offer-bar")

function xmark() {
    document.getElementById("offer-bar").remove()
}

// Side navbar
var navMenu = document.getElementById("navbar-menu-activate")
var sideMenu = document.querySelector(".side-navbar")

navMenu.addEventListener("click", function () {
    console.log("clicked")
    sideMenu.style.marginLeft = "0px"
})

var navMenuClose = document.getElementById("side-navbar-close")

navMenuClose.addEventListener("click", function () {
    sideMenu.style.marginLeft = "-60%"
})

// Slider
var slider = document.querySelector(".slider")
var slideImage = document.querySelector(".slider-img-container")
var slideRight = document.getElementById("slider-right-activate")
var sliderMargin = 0

slideRight.addEventListener("click", function () {
    sliderMargin = sliderMargin + 100
    if (sliderMargin > 200) {
        sliderMargin = 0
        slideImage.style.marginLeft = "0px"
    }
    else {
        slideImage.style.marginLeft = "-" + sliderMargin + "vw"
    }
})

var sliderLeft = document.getElementById("slider-left-activate")

sliderLeft.addEventListener("click", function () {
    sliderMargin = sliderMargin + 100
    if (sliderMargin>200){
        sliderMargin = 0
        slideImage.style.marginLeft = "0px"
    }
    else{
        slideImage.style.marginLeft = "-" +sliderMargin+ "vw"
    }
})

// Like

var like = document.querySelectorAll(".like")
var likeRed = document.querySelectorAll(".like-red")
like.forEach(function(like, index){
    like.addEventListener("click", function(){
        like.style.display = "none"
        likeRed[index].style.display = "block"
    })

})

likeRed.forEach(function(likeRed, index){
    likeRed.addEventListener("click", function(){
        likeRed.style.display = "none"
        like[index].style.display = "block"
    })
})

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})



