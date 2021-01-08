import './style.scss';
import View from './views/index';


class Slate{
    editor: HTMLDivElement;
    state: {};
    constructor(editorElement: HTMLDivElement){
        this.editor = editorElement;
        this.init();
        this.state = {};
    }

    // Initialize editor
    init(){
        this.editor.setAttribute("contentEditable","true");
        const Slate = this;
        // call view on every change
        let observer = new MutationObserver((mutationRecord)=>{
            return View(mutationRecord, Slate)
        });

        this.editor.addEventListener('focus',()=>{
            observer.observe(this.editor, {
                childList: true, // observe direct children
                subtree: true, // and lower descendants too
                characterDataOldValue: true // pass old data to callback
            });
        })
    }

    updateState(data: any){
        this.state = {
            data
        }
        this.render(this.state)
    }

    render(data: any){
        console.log(data)
    }
    
}



let editor = new Slate(document.querySelector('.slatejs'));

console.log(editor)