function randomNumbers(){//Skapar en array med 10 nummer mellan 1-100 som sedan skickas ut som alert
    let hundredRand = []
    while(hundredRand.length < 10){
        let tal = Math.ceil(Math.random() * 100)//Slumpar fram ett tal mellan 1-100
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
    let username = document.forms["form1"]["username"].value
    let password1 = document.forms["form1"]["password1"].value
    let password2 = document.forms["form1"]["password2"].value
    let email = document.forms["form1"]["email"].value
    let checkbox = document.getElementById("agreement").checked
    if(username == ""){ //Kollar så användarnamnet har någon text alls i sig
        alert("That is not a correct username")
    }
    else if(password1.length < 6){ //Ifall lösenordet är mindre än 6 bokstäver ger den error medelande
            alert("Your password has to be atleast 6 letters long")
    }
    else if(password2 != password1){//Ifall lösenorden inte är likadana så ger den error medelande
        alert("Your passwords do not match")
    }
    else if(checkEmail(email) == false){ //Kör funktionen checkEmail
        alert("That's not a correct email adress")
    }
    else if(checkbox == false){//Kollar ifall checkboxen är icheckad
        alert("You have to check the box first")
    }
    else{
        document.location.href = "./thanks.html" //Byter sida till thanks.html
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