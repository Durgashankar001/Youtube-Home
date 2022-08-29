document.querySelector("form").addEventListener("submit",collectData);
let arr = JSON.parse(localStorage.getItem("mydata")) || [];

function collectData(event){
    event.preventDefault();
    let form = document.querySelector("form");
    let name = form.name.value
    let email = form.email.value
    let phone = form.phone.value
    let pass = form.pass.value
    let cpass = form.cpass.value
    if(pass!==cpass){
        alert("Please enter same password")
    }

    let data = new myData(name,email,phone,pass,cpass);
    let data1 = arr.map(function(el){
        return email==el.email
    })

    if(data1.length==0){
        arr.push(data)
        localStorage.setItem("mydata",JSON.stringify(arr));
        window.location.href="./login.html"
    }
    else{
        alert("Email already resistered")
    }


    form.name.value = null
    form.email.value = null
    form.phone.value = null
    form.pass.value = null
    form.cpass.value = null

   
}

function myData(name,email,phone,pass){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.pass = pass;
}