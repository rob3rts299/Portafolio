const newDateUTC=day=>{
    let date = new Date()
    date.setTime(date.getTime()+day*1000*60*60*24)
    return date.toUTCString()
}

const createCookie = (name,day) =>{
    let expires = newDateUTC(day)
    document.cookie= `${name};Dias=${expires};`
}

const readCookies = cookieName=>{
    let cookies = document.cookie
    cookies = cookies.split(";")
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim()
        if (cookie.startsWith(cookieName)) {            
            return cookie.split("=")[1]
        }
    }
    return "no hay cookies con ese nombre"
}

if (readCookies("acceptCookies")!== "Si") {//hacemos aparecer el cartel para que el usuario acepte las cookies o las rechace. En caso de que el valor sea negativo el cartel aparecera
    setTimeout(() => {
        document.querySelector(".bg-modal").style.opacity = "1"
        document.querySelector(".bg-modal").style.zIndex = "10"
        document.getElementById("accept").addEventListener("click",()=>{
            createCookie("acceptCookies=Si",30)
            document.querySelector(".bg-modal").style.opacity = "0"
        setTimeout(() => {
            document.querySelector(".bg-modal").style.zIndex = "-1"
        }, 100);
            console.log("Se acepto la cookie")
    })
    document.getElementById("deny").addEventListener("click",()=>{
        createCookie("acceptCookies=No",30)
        document.querySelector(".bg-modal").style.opacity = "0"
        setTimeout(() => {
            document.querySelector(".bg-modal").style.zIndex = "-1"
        }, 100);
       
    })
    }, 200);
}
