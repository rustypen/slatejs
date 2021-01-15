import model from "../model/index";

function index(e: InputEvent){
    const command = "INSERT";
    const data = e.data;
    
    model.call(this, {
        command,
        data
    })
}


export default index;