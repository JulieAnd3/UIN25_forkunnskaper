let userName = document.getElementById("name")
let userEmail = document.getElementById("email")
const submitBtn = document.getElementById("knapp")


//Status for brukerinput
let nameInput = false
let emailInput = false

//Test om brukeren har skrevet navnet sitt
userName.addEventListener("input", () => {
    nameInput = true 
})

userEmail.addEventListener("input", () => {
    emailInput = true 
})
//submitBtn.disabled = true 


submitBtn.addEventListener("click", () => {
    if(nameInput === true && emailInput === true){
        alert(`Hei ${userName}! Takk for at du meldte ${userEmail} på vårt nyhetsbrev`)
        
    } else if(nameInput === true && emailInput === false){
        alert(`Hei ${userName}! Takk for at du vil melde deg på. Vennligst legg også inn din epost-adresse for å fullføre påmeldingen `)

    } else if(nameInput === false && emailInput === true){
        alert(`Hei! Husk å legge inn navnet ditt for å fullføre påmeldingen`)
    } else if (nameInput === false && emailInput === false){
        alert(`For å melde deg på nyhetsbrevet må du legge inn både navn og epost`)
    }

})