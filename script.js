const wrapper = document.querySelector(".wrapper")
const createAccount = document.querySelector(".create")
const sign = document.querySelector(".sign")

createAccount.addEventListener("click", () => {
    wrapper.classList.add("active");
})

sign.addEventListener("click", () => {
    wrapper.classList.remove("active");
})