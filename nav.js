// openning and closing btnn
const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")

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