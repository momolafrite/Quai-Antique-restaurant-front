const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // Ici, il faudrat appeler l'API pour vérifier les credentials en BDD 
    
    if(mailInput.value == "test@mail.com" && "123"){
        alert("Vous êtes connécté");

        //Il faudras récupérer le vrai token
        const token = gfbyeuzfvuzeqghbvcyuzebgfvyulezgfyue;

        //Placer ce token en cookie 

        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}