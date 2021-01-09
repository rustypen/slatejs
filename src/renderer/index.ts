interface Renderer{
  slate: any;
}


interface NewElement{
  type: string;
  value?: string;
  id: string;
}

function newElement({type, value, id}:NewElement){

  let tag:HTMLElement|Text;
  if(type === "TEXT_NODE"){
    tag = document.createTextNode(value);
  }
  else{
    tag = document.createElement(type);
    (tag as HTMLElement).setAttribute("key", id);
  }
  return tag;
}


function domCreator(state:any){

  function iterator(final:any[], current:any){
    let tag: HTMLElement | Text;
    tag = newElement({
      type:current.type, 
      value:current.value || undefined, 
      id: current.id
    });

    if(current.child){
      const children:HTMLElement[] = current.child.reduce(iterator,[]);
      children.map((child: HTMLElement)=>{
        tag.appendChild(child)
      })
    }

    final.push(tag)
    return final;
  }

  const dom = state.reduce(iterator,[])

  return dom;
}


export default function ({slate}: Renderer){
  const domElements = domCreator(slate.state);
  domElements.map((element:HTMLElement)=>{
    slate.editor.appendChild(element)
  })
}