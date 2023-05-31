import ApiModel from "./ApiModel.js"
import View from "./View.js"

class Controller {
    
    constructor() {
        const model = new ApiModel()
        model.fetchData('http://localhost:5000/kategoria', this.kategoria)

        const kategira = document.querySelector(".form-select")
        model.fetchData(`http://localhost:5000/tesztek/kategoria/1`, this.data)

        kategira.addEventListener('change', () => {
            model.fetchData(`http://localhost:5000/tesztek/kategoria/${kategira.value}`, this.data)
        })
    }
    
    data(data) {
        const test = document.querySelector(".tesztek")
        test.innerHTML = ""
        data.forEach(element => {
            new View(element)  
        })
    }

    kategoria(data) {
        const kategiraSelect = document.querySelector(".form-select")
        data.forEach(element => {
            let html = `<option value="${element.id}">${element.kategorianev}</option>`
            kategiraSelect.insertAdjacentHTML('beforeend', html)
        })

    }
}

export default Controller