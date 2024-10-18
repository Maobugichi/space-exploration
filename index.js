const changeDestination = document.querySelectorAll(".change")
const destiHead = document.querySelector(".desti-header")
const destiPara = document.querySelector(".desti-para")
const destination = document.querySelector(".desti")
const travel = document.querySelector(".travel")
const destiMage = document.querySelector(".desti-image")
const button1 = document.querySelectorAll(".button1")
const crewRole = document.querySelector(".crew-role")
const crewHeader = document.querySelector(".crew-header")
const crewBio = document.querySelector(".crew-bio")
const crewImg = document.querySelector(".crew-img")
const button2 = document.querySelectorAll(".button2")
const techHead = document.querySelector(".tech-head")
const techDesc = document.querySelector(".tech-desc")
const techImg = document.querySelector(".tech-img")
const menu = document.querySelector(".menu")
const sideNav = document.querySelector(".side")


menu.addEventListener("click", () => { 
 sideNav.classList.add("animate-slideIn")
 sideNav.classList.remove("-translate-y-full")
 console.log(sideNav)
})

changeDestination.forEach(item => {
    item.addEventListener("click", () => {
        fetch("./data.json")
        .then(response => {
            if(!response.ok) {
            throw new Error("error")
            }
            return response.json()
        })
        .then(data => {
            const desti = data.destinations.filter(destination => {
                return destination.name == item.innerText
            })
             destiHead.innerText = desti[0].name
             destiPara.innerText = desti[0].description
             destination.innerText = desti[0].distance
             travel.innerText = desti[0].travel
             destiMage.src = desti[0].images.webp
            console.log(desti)
        })
    })
    console.log()
})

button1.forEach(btn => {
 btn.addEventListener("click", () => {
fetch("./data.json")
.then(response => {
    if(!response.ok) {
      throw new Error("error")
    }
    return response.json()
})
.then(data => {
    const crew = data.crew.filter(crew => {
      return crew.name.includes(btn.className.slice(0,5))
    }) 
    crewRole.innerText = crew[0].role
    crewHeader.innerText = crew[0].name
    crewBio.innerText = crew[0].bio
    crewImg.src = crew[0].images.png
})
 })
})


button2.forEach(btn => {
    btn.addEventListener("click", () => {
   fetch("./data.json")
   .then(response => {
       if(!response.ok) {
         throw new Error("error")
       }
       return response.json()
   })
   .then(data => {
       const tech = data.technology.filter(tech => {
         return tech.name.includes(btn.classList[1])
       }) 
       techHead.innerText = tech[0].name
       techDesc.innerText = tech[0].description
       techImg.src = tech[0].images.landscape
       console.log(tech)
   })
    })
   })