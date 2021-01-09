import './style.scss';
import view from './views/index';
import renderer from './renderer/index';

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
        const Slate = this;
        // call view on every change
        let observer = new MutationObserver((mutationRecord)=>{
            return view(mutationRecord, Slate)
        });

        this.editor.addEventListener('focus',()=>{
            observer.observe(this.editor, {
                childList: true, // observe direct children
                subtree: true, // and lower descendants too
                characterDataOldValue: true // pass old data to callback
            });
        })

        const data = [
            {
                type: "h3",
                id: "abcdef",
                child: [
                    {
                        type: "TEXT_NODE",
                        id: "ghijk",
                        value: "placeholder...",
                    }
                ]
            }
        ]
        this.updateState(data)
    }

    updateState(data: any){
        this.state = [...data];
        
        this.render()
    }

    render(){
        const slate = this;
        renderer({slate});
    }
    
}



let editor = new Slate(document.querySelector('.slatejs'));