window.addEventListener("scroll", () => {
    if(window.scrollY > 450) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})


const modalButton = document.querySelector("#signup")

const modal = document.querySelector("dialog")

const closeButton = document.querySelector("#closeButton")

modalButton.addEventListener("click", ()=> {
    modal.showModal()
})

closeButton.addEventListener("click", ()=> {
    modal.close()
})


const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    console.log(`Nome: ${name}`)
    console.log(`Email: ${email}`)

})

