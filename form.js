const phonenumber = document.getElementById("phonenumber")
const email = document.getElementById("email")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const formappear = document.getElementById("formappear")
const feedback = document.getElementById("feedback")

const submit = document.getElementById("submit")
let validation = false


// firstname
firstname.addEventListener("change", (fname) => {
    console.log(fname.target.value)
    // if(fname.target.value.length < 1) 
    // {
    //     console.log("this is greater")
    //     firstname.classList.add("invalid")
    // }

    verifyName(fname.target.value.length)
   
})

// function that verifies the input

function verifyName(name){
    if(name < 1)
    {
        firstname.classList.add("invalid")
        validation = false
    }
    if(name > 1){
        firstname.classList.remove("invalid")

        firstname.classList.add("valid")
        validation = true

    }
}

email.addEventListener("change", (mail) =>{
    // this is the email verification area
    let m = mail.target.value
    console.log(m)
    isValidEmail(m)

})


// gmail verifcation
function isValidEmail(m) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(emailRegex.test(m))
  if(emailRegex.test(m)){
    email.classList.add("valid")
    validation = true
    console.log(m)
  }
  else{
    validation = false
    email.classList.add("invalid")
    console.log("invalid    ")
  }
   
  }

//   phone number verification
phonenumber.addEventListener("change",(number) => {
    verifyNumber(number.target.value.length)
})
function verifyNumber(n){
    
    if(n <9){
        phonenumber.classList.add("invalid")
        validation = false

    }
    else{
        phonenumber.classList.add("valid")
        validation = true
    }
}
//button clicked
submit.addEventListener("click", (e) => {
    e.preventDefault()
   console.log(validation)
   if(validation) {
    formappear.classList.add("hidden")
    feedback.classList.toggle("hidden")
   }
   
  
   
    console.log("clicked")
})