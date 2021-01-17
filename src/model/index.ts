import view from '../view/index';
import comparator from './comparator';
import _ from 'lodash';

function createElement(type:string, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child =>
                typeof child === "object" ? child : createTextElement(child)
            )
        }
    };
}
  
function createTextElement(text:string) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}

function createDom(fiber: any) {


    function iterator(final:any[], current:any){
    
        return [ 
            ...final,
            createElement(
                current.type,
                current.props,
                (function(children){
                    if(Array.isArray(children)){
                        return current.children.reduce(iterator,[]);
                    }
                    return [children];
                })(current.children)
            )
        ]
    }

    if(fiber){
        const dom = createElement(
            fiber.type,
            fiber.props,
            (function(children){
                if(Array.isArray(children)){
                    return fiber.children.reduce(iterator,[]);
                }   
                return [children];
            })(fiber.children)
        )
        return dom;
    }
    
    return null;
}


function index(model:any){
    
    this.state.data = (this.state.data || "") + model.data;
    let data = createElement(
        "div",
        { id: "foo" },
        this.state.data
    );
    
    console.log(this);

    view.call(this,data);
}


export default index;