import Ash from '../core/index';

interface Renderer{
  slate: any;
}


function stateRenderer (state:any){
  
  function iterator(final:any[], current:any){
    
    return [ 
      ...final,
      Ash.createElement(
        current.type,
        current.props,
        (function(children){
          if(Array.isArray(children)){
            return current.children.reduce(iterator,[]);
          }
          return children;
        })(current.children)
      )
    ]

  }

  if(state){
    const dom = Ash.createElement(
      state.type,
      state.props,
      ...state.children.reduce(iterator,[])
    )
    return dom;
  }
  return null;
}



export default function ({slate}: Renderer){
  const state = slate.state;

  const element = stateRenderer(state)

  Ash.render(element,slate.editor);
}