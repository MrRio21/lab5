let uName= document.getElementById("name")
let email= document.getElementById("email")
let pass= document.getElementById("password")

localStorage.setItem("name",uName.value);

function save(){
    localStorage.setItem('name', uName.value);
    localStorage.setItem('email', email.value );
    localStorage.setItem('password', pass.value);
}
function deleteItem() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    
}

function setCookie(uName, email, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = uName + "=" + email + ";" + expires + ";path=/";
}

