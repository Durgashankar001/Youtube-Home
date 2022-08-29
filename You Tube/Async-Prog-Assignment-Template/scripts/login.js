let data = JSON.parse(localStorage.getItem("mydata"));

document.querySelector("form").addEventListener("submit",loginUser);

function loginUser(event){
    event.preventDefault();
    let form = document.querySelector("form")
    let email = form.email.value
    let pass = form.pass.value


    let data1 = data.map(function(el){
        return email==el.email && pass ==el.pass
    })
    console.log(data1)
    if(data1[0]==false)
    {
        alert("invalid Credentials")
    }
    else{
        window.location.href = "./index.html"
    }

   
}