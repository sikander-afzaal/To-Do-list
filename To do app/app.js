const submit = document.querySelector(".btn-submit")
const text = document.querySelector(".todo")
const ul = document.querySelector(".todo-list")
const all = document.querySelector(".all")
const completed = document.querySelector(".completed")
const active = document.querySelector(".active")
const filters = document.querySelectorAll(".p")
const tasks = document.querySelector(".tasks")
var todos = []
var counter = 0
submit.addEventListener("click", list);
function list(event) {
    counter += 1
    event.preventDefault()
    const main = document.createElement("div")
    main.classList.add("main-div")
    main.classList.add("hi")
    const li = document.createElement("li")
    li.classList.add("list-items")
    main.appendChild(li)
    li.innerText = text.value
    const marked = document.createElement("button")
    marked.innerHTML = `<i class="far fa-check-circle"></i>`
    marked.classList.add("marked")
    main.appendChild(marked)
    const trash = document.createElement("button")
    trash.innerHTML = `<i class="fas fa-trash"></i>`
    trash.classList.add("trash")
    main.appendChild(trash)
    ul.appendChild(main)
    text.value = ""
    marked.addEventListener("click", () => {
        marked.classList.toggle("bg")
        li.classList.toggle("comp")
        main.classList.toggle("opacity")
        main.classList.toggle("completed")
        main.classList.remove("hi")
    })
    todos.push(main)
    tasks.innerText = `${counter} tasks `
    console.log(todos)
    trash.addEventListener("click", () => {
        main.classList.add("animate")
        counter -= 1
        main.addEventListener("transitionend", () => {
            main.remove()
            tasks.innerText = `${counter} tasks `
        })
    })
}
completed.addEventListener("click", () => {
    todos.forEach(item => {
        if (!item.classList.contains("completed")) {
            item.style.display = "none"
        } else { item.style.display = "flex" }
    })
})
active.addEventListener("click", () => {
    todos.forEach(item => {
        if (!item.classList.contains("completed")) {
            item.style.display = "flex"
        } else { item.style.display = "none" }
    })
})
all.addEventListener("click", () => {
    todos.forEach(item => {
        item.style.display = "flex"
    })
})