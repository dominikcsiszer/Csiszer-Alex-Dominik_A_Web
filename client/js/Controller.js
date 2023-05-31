import ApiModel from "./ApiModel.js"

class Controller {
    
    constructor() {
        console.log("asd");
        const model = new ApiModel()
        model.fetchData('http://localhost:5000/', this.data)
    }
    
    data(data) {
        console.log(data);
    }
}

export default Controller