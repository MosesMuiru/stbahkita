// openning and closing btnn
const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")
const mobileList = document.getElementById("mobileList")
const landingpage = document.getElementById("landingpage")
const landingpageInfo = document.getElementById("landingpage-info")
const landingpageTitle = document.getElementById("landingpage-title")
const btn = document.getElementById("btn")



// landingpage.style.background= "linear-gradient(90deg, rgba(40,40,40,0.9) 100%, rgba(71, 70, 70, 0.9) 100%), url('./images/studen2.jpg')"
const nextBtn = document.querySelectorAll("#next-btn")
console.log(nextBtn.length)





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


//collection of images
const imagesItems = [
    // {
    //     title:"MOTTO",
    //     info:"Our Abilities<br>Our Power<br>Our Future",
    //     bgimage:" linear-gradient(90deg, rgba(40,40,40,0.5) 60%, rgba(71, 70, 70, 0.4) 100%), url('./images/studen2.jpg')"

    // },
    {
        title:" Lets Go Digital",
        info:"computer class",
        bgimage:"linear-gradient(90deg, rgba(40,40,40,0.9) 100%, rgba(71, 70, 70, 0.6) 100%), url('./images/image1.jpg')"
    },
    {
        title:"Our courses are",
        info:"hands on skills",
        bgimage:"linear-gradient(90deg, rgba(40,40,40,0.9) 100%, rgba(71, 70, 70, 0.6) 100%), url('./images/class.jpg')"
    }
]

// random text
//getting random text
function randomItems(){
    return Math.floor(Math.random()*imagesItems.length)
} 
console.log(randomItems())

// next btn
nextBtn.forEach((btn) => (
    btn.addEventListener("click", (e)=>{

        let randomItem = randomItems()

        landingpageTitle.textContent = imagesItems[randomItem].title
        landingpageInfo.textContent = imagesItems[randomItem].info
        landingpage.style.background = imagesItems[randomItem].bgimage
        console.log("btnc")
        btn.classList.toggle("clicked")
        console.log(e.target.id)

    })
))
// interval for the landing page

// creating the counter
let valueDisplays = document.querySelectorAll(".num")
let interval = 3000

// valueDisplays.forEach((value) => {
//     let startValue = 0;
//     // console.log(value.getAttribute())
//     let endValaue = parseInt(value.getAttribute("data-val"));
//     // getting time it takes
//     let duration = Math.floor(interval / endValaue)
//     let counter = setInterval(() => {
//         startValue += 1;
//         value.textContent = startValue
//         if(startValue == endValaue) clearInterval(counter)
//     },duration)

    
//     console.log(endValaue)
// })
