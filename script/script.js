function randomNumbers(){//Skapar en array med 10 nummer mellan 1-100 som sedan skickas ut som alert
    let hundredRand = []
    while(hundredRand.length < 10){
        let tal = Math.floor(Math.random() * 100) + 1//Slumpar fram ett tal mellan 1-100
        if(!hundredRand.includes(tal)){ //Ifall tal inte finns i array så tar lägger den till ett tal i den
            hundredRand.push(tal)
        }
        else{
            console.log("Duplicate: " + tal)//Skriver ut talet som blev en dubbel i consolen
        }
    }
    document.getElementById("unSorted").innerText = hundredRand
    document.getElementById("sorted").innerText = hundredRand.sort((a, b) => a-b) //Sorterar talen från minst till störts
}
const verifyForm = () =>{    //Kollar ifall allting är korrekt i första formuläret
    let username = document.getElementById("username").value
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    let email = document.getElementById("email").value
    let checkbox = document.getElementById("agreement")
    if(username.length > 0){ //Kollar så användarnamnet har någon text alls i sig
        if(password1.length < 6){ //Ifall lösenordet är mindre än 6 bokstäver ger den error medelande
            alert("Your password has to be atleast 6 letters long")
        }
        else{
            if(password2 != password1){ //Ifall lösenorden inte är likadana så ger den error medelande
                alert("Your passwords do not match")
            }
            else{
                if(checkEmail(email) == false){ //Kör funktionen checkEmail
                    alert("That's not a correct email adress")
                }
                else{
                    if(checkbox.checked){//Kollar ifall checkboxen är icheckad
                        document.location.href = "./thanks.html" //Byter sida till thanks.html
                    }
                    else{
                        alert("You have to check the box first")
                    }                
                }
            }
        }
    }
    else{
        alert("That is not a correct username")
    }
}
function checkEmail(email){ //Returnerar false eller true
    let result = email.includes("@");//Returnerar false ifall email stringen inte includerar ett @
    if(result == false || (email[0] == "@" || email.slice(-1) == "@")){//Kollar så att email includerar ett @ som inte är i början eller slutet
        return false;
    }
    else{
        return true;
    }
}