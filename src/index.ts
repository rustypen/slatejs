import './style.scss';
import view from './views/index';
import renderer from './renderer/index';

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
        // const slate = this;

        this.editor.addEventListener('beforeinput',(e)=>{
            console.log(e)
            e.preventDefault();
        })


        const data: Data = {
            type: "div",
            props: {
                className: "text"
            }, 
            // children: "QndReact is Quick and dirty react"
            children: [
                {
                    type: "h3",
                    props: {
                        className: "primary"
                    },
                    children: "QndReact is Quick and dirty react"
                },
                {
                    type: "p",
                    props: null,
                    // children: "It is about building your own React in 90 lines of JavaScript"
                    children: [
                        {
                            type: "span",
                            props: {
                                className: "primary"
                            },
                            children: "QndReact is Quick and dirty react"
                        },
                        {
                            type: "span",
                            props: {
                                className: "primary"
                            },
                            children: "QndReact is Quick and dirty react"
                        },
                    ]
                }
            ]
        }

        this.updateState(data)
    }

    updateState(data: any){
        if(typeof data === "function"){
            this.state = data(this.state);
        } 
        else{
            this.state = {...data};
        }
        
        this.render()
    }

    render(){
        const slate = this;
        renderer({slate});
    }
    
}



let editor = new Slate(document.querySelector('.slatejs'));