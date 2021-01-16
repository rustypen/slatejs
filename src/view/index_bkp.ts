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


const isProperty = (key:string) => key !== "children"

function createNode(type:string, props:any, children:any[]|any){

    if(type === "TEXT_ELEMENT"){
        return document.createTextNode(children)
    }
    else{
        const element:any = document.createElement(type);

        Object.keys(props)
            .filter(isProperty)
            .forEach(name => {
                element[name] = props[name]
            })

        children.forEach((child:HTMLElement)=>{
            element.append(child)
        })
    
        return element;
    }
}


function createDom(fiber: any) {


    function iterator(final:any[], current:any){
    
        return [ 
            ...final,
            createNode(
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
        const dom = createNode(
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

function index(data: any){
    const element = createDom.call(this, data);

    this.editor.append(element)
}

export default index;