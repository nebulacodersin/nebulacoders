
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        localStorage.setItem("authenticated","true");
        window.location.href = "logout.html"
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
              icon: "success",
              title: "Signed in successfully"
            });
    }else{
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
              icon: "error",
              title: "Invalid Credentials!"
            });
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "22105128040" && password === "25092004"){
        localStorage.setItem("username","Nishant");
        localStorage.setItem("imgurl","nishant.jpg")
        return true
    }
    else if(username === "22105128050" && password === "26082004"){
        localStorage.setItem("username","Suhani");
        localStorage.setItem("imgurl","suhani.jpg")
        return true
    }
    else if(username === "22105128022" && password === "24102003"){
        localStorage.setItem("username","Shubham");
        localStorage.setItem("imgurl","shubham.jpg")
        return true
    }
    else if(username === "22105128035" && password === "11092004"){
        localStorage.setItem("username","Saurav");
        localStorage.setItem("imgurl","saurav.jpg")
        return true
    }
    else if(username === "23105128903" && password === "30052003"){
        localStorage.setItem("username","Kriti");
        localStorage.setItem("imgurl","kriti.jpg")
        return true
    }
    else if(username === "yasmin" && password === "samina"){
        localStorage.setItem("username","Samina");
        localStorage.setItem("imgurl","samina.webp")
        return true
    }
    else if(username === "22110128013" && password === "jiyaraj"){
        localStorage.setItem("username","Jiya");
        localStorage.setItem("imgurl","jiya.jpg")
        return true
    }
    else{
        return false
    }
}