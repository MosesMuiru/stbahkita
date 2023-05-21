// openning and closing btnn
const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")
let powerAnimation = document.getElementById("power-animation")
const landingpageInfo = document.getElementById("landingpage-info")

// the button at the navigation bar
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")

const mobileList = document.getElementById("mobileList")
openBtn.addEventListener("click", () => {
    console.log("btn clicked")
    mobileList.classList.toggle("hidden")
    openBtn.classList.toggle("hidden")


})
closeBtn.addEventListener("click", () => {
    console.log("clicked")
    mobileList.classList.toggle("hidden")
    openBtn.classList.toggle("hidden")
   
    


})

console.log("the nav is working")

// setting up the buttons when clicked
one.addEventListener("click",() => {
    console.log("this btn has been clicked")
    secondinfo.classList.add("hidden")
    landingpageInfo.classList.remove("hidden")
    two.classList.remove("clicked")
    one.classList.add("clicked")

})

two.addEventListener("click",() => {
    console.log("this tw has been clicked")
    two.classList.add("clicked")
    one.classList.remove("clicked")
    landingpageInfo.classList.add("hidden")
     secondinfo.classList.remove("hidden")
})


// power animation
// console.log(powerAnimation.getAttribute("data-val"))
// let power = powerAnimation.getAnimations("data-val")
// let

