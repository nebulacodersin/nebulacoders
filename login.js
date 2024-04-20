const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "logout.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "22105128040" && password === "25092004"){
        return true
    }
    else if(username === "22105128050" && password === "26082004"){
        return true
    }
    else if(username === "22105128022" && password === "24102003"){
        return true
    }
    else if(username === "22105128035" && password === "11092004"){
        return true
    }
    else if(username === "23105128903" && password === "30052003"){
        return true
    }
    else if(username === "22105128902" && password === "30052003"){
        return true
    }
    else{
        return false
    }
}