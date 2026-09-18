

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




// Products
const products = [
    {
        id: 1,
        name: "Floral Summer Shirt",
        src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f1.jpg",
        desc: "",
        price: 220,
        tags: ["new", "blue", "summer"]
    },

    {
        id: 2,
        name: "Summer Green",
        src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f1.jpg",
        desc: "",
        price: 260,
        tags: ["new", "green", "beach"]
    },

    {
        id: 3,
        name: "Party Floral Shirt",
        src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f3.jpg",
        desc: "",
        price: 399,
        tags: ["old", "red", "party"]
    },

    {
        id: 4,
        name: "Floral Summer Shirt",
        src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f4.jpg",
        desc: "",
        price: 399,
        tags: ["old", "white", "beach"]
    },
    {
        id: 5,
        name: "Beach Shirt",
        src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f5.jpg",
        desc: "",
        price: 579,
        tags: ["old", "white", "beach"]
    }
    ,
    {
        id: 6,
        name: "Shirt Party Red",
        src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f6.jpg",
        desc: "",
        price: 579,
        tags: ["old", "red", "party"]
    },

    {
        id: 7,
        name: "Party Floral Shirt",
        src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f3.jpg",
        desc: "",
        price: 399,
        tags: ["old", "red", "party"]
    },
    {
        id: 8,
        name: "Shirt Party Red",
        src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f6.jpg",
        desc: "",
        price: 579,
        tags: ["old", "red", "party"]
    },
    {
        id: 9,
        name: "Floral Summer Shirt",
        src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f1.jpg",
        desc: "",
        price: 220,
        tags: ["new", "blue", "summer"]
    },


]


// Collection Section
var pro = document.querySelector(".products")

products.forEach((product) => {
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML = `<img style="width:20vw" src="${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    pro.append(createItem)
})

var filterList = []
var tags = document.getElementsByName("tags")
console.log(tags)
tags.forEach((tag) => {

    tag.addEventListener("click", function (e) {
        if(e.target.checked){
            filterList.push(e.target.value)
            console.log(filterList)
            update()
        }
        else{
            filterList = filterList.filter(item=> item!== e.target.value)
            update()
        }

    })

})

function update()
{

    

    

    
    var productList = document.querySelectorAll(".product")
    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        console.log(product)
        var temp=product.querySelector("tags").innerHTML
       
        console.log("elemen"+temp)
        

        const tempFilterArray = temp.split(',');
        
        console.log("tempfilterarray"+tempFilterArray)
        console.log("filterlist"+filterList)
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    };


}

