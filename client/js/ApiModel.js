class ApiModel {

    #adat = []
    constructor() {

    }

    fetchData(vegpont, myCallback) {
        fetch(vegpont, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
        })
        .then((response) => response.json())
        .then((data) => {
            this.#adat = data
            myCallback(this.#adat)
        })
        .catch((error) => {
            console.error("Error:", error)
        })
    }
}

export default ApiModel