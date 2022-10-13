function randomNumbers(){    //Skapar en array med 10 nummer mellan 1-100 som sedan skickas ut som alert
    let hundredRand = []
    for(let i = 0; i<10; i++){
        let tal = Math.floor(Math.random() * 101)
        if(!hundredRand.includes(tal)){ //Ifall tal inte finns i array så tar lägger den till ett tal i den
            hundredRand.push(tal)
        }
        else{
            console.log("Duplicate: " + tal)
        }
    }
    alert("Unsorted: " + hundredRand)
    alert("Sorted: " + hundredRand.sort(function(a, b){return a-b})) //Sorterar talen från minst till störts
}
const verifyForm = () =>{    //Kollar ifall allting är korrekt i första formuläret
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    let email = document.getElementById("email").value
    let checkbox = document.getElementById("agreement")
    if(password1.length < 6){ //Ifall lösenordet är mindre än 6 bokstäver ger den error medelande
        alert("Your password has to be atleast 6 letters long")
    }
    else{
        if(password2 != password1){ //Ifall lösenorden inte är likadana så ger den error medelande
            alert("Your passwords do not match")
        }
        else{
            if(email[0] == "@" | email.slice(-1) == "@"){ //Ifall första eller sista symol är @ så ge error medelande
                alert("That's not a correct email adress")
            }
            else{
                if(checkbox.checked){
                    document.location.href = "./thanks.html"
                }
                else{
                    alert("You have to check the box first")
                }
            }
        }
    }
}
//randomNumbers()