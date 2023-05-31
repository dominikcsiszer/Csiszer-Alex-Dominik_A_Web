class View {

    #adat
    constructor(adat) {
        this.#adat = adat
        this.html()
    }

    html() {
        const test = document.querySelector(".tesztek")
        let html = `<div class="card">
                    <div class="card-header">
                        <h5 class="card-title">${this.#adat.kerdes}</h5>
                    </div>
                    <div class="card-body">
                        <div class="row row-cols-1 row-cols-md-2">
                            <div class="col kerdes" id="v1">${this.#adat.v1}</div>
                            <div class="col kerdes" id="v2">${this.#adat.v3}</div>
                            <div class="col kerdes" id="v3">${this.#adat.v4}</div>
                            <div class="col kerdes" id="v4">${this.#adat.v2}</div>
                        </div>
                    </div>
                </div>`
        test.insertAdjacentHTML('beforeend', html)

    }
}

export default View