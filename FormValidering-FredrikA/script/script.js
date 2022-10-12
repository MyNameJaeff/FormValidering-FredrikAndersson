document.getElementById("thankYou").style.display="none"; //Tar bort tack medelandet genom att göra den osynlig

function randomNumbers(){    //Skapar en array med 10 nummer mellan 1-100 som sedan skickas ut som alert
    let hundredRand = []
    for(let i = 0; i<10; i++){
        let tal = Math.floor(Math.random() * 101)
        if(hundredRand.includes(tal)){ //Ifall tal redan finns i array så tar den nytt tal
            let tal = Math.floor(Math.random() * 101)
            hundredRand.push(tal)
        }
        else{
            hundredRand.push(tal)
        }
    }
    alert("Unsorted: " + hundredRand)
    alert("Sorted: " + hundredRand.sort(function(a, b){return a-b})) //Sorterar talen från minst till störts
}
function verifyForm(){    //Kollar ifall allting är korrekt i första formuläret
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    let email = document.getElementById("email").value
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
                document.getElementById("thankYou").style.display="flex"; //Visar tack medelandet
            }
        }
    }
}
//randomNumbers()