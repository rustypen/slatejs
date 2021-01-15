import view from '../view/index';


function index(model:any){
    const data = {
        type: "TEXT_ELEMENT",
        props: {
        },
        children: model.data
    }
    view.call(this,data);
}


export default index;