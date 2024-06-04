const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        localStorage.setItem("authenticated","true");
        window.location.href = "logout.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "22105128040" && password === "25092004"){
        localStorage.setItem("username","Nishant");
        return true
    }
    else if(username === "22105128050" && password === "26082004"){
        localStorage.setItem("username","Suhani");
        return true
    }
    else if(username === "22105128022" && password === "24102003"){
        localStorage.setItem("username","Shubham");
        return true
    }
    else if(username === "22105128035" && password === "11092004"){
        localStorage.setItem("username","Saurav");
        return true
    }
    else if(username === "23105128903" && password === "30052003"){
        localStorage.setItem("username","Kriti");
        return true
    }
    else if(username === "yasmin" && password === "samina"){
        localStorage.setItem("username","Samina");
        return true
    }
    else if(username === "22110128013" && password === "jiyaraj"){
        localStorage.setItem("username","Jiya");
        return true
    }
    else{
        return false
    }
}