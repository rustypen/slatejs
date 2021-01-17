import './style.scss';
import control from "./control/index";

interface Data{
    type: string;
    props: any;
    children?: Data[] | string | null;
}

class Slate{
    editor: HTMLDivElement;
    state: {};
    constructor(editorElement: HTMLDivElement){
        this.state = {};
        this.editor = editorElement;
        this.init();
    }

    // Initialize editor
    init(){
        this.editor.setAttribute("contentEditable","true");
        const slate = this;

        this.editor.addEventListener('beforeinput',(e)=>{
            // console.log(e)
            control.call(this, e)                                                    
            e.preventDefault();
        })

    }

    model(){

    }

    render(){
    }
    
}



let editor = new Slate(document.querySelector('.slatejs'));