class View {

    #adat
    #parent
    constructor(adat, parent) {
        this.#adat = adat
        this.#parent = $(parent)
        this.html()
    }

    html() {
        console.log(this.#adat);
    }
}

export default View