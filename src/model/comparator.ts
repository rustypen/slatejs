import _ from 'lodash';

function compareTypes(oldType:string, newType:string){
  return oldType === newType 
}


function compareProps(oldProps:any, newProps: any){
  for (const prop in newProps) {
    if(newProps[prop] !== oldProps)
    console.log(oldProps[prop])
  }
  // return _.
}

function compareChildren(oldChildren: any[], newChildren: any[]){

}

function comparator(oldModel:any, newModel:any){

  if(compareTypes(oldModel.type, newModel.type)){

    if(compareProps(oldModel.props, newModel.props)){
      return true
    }

    return true;
  }
  return false;
};


export default comparator;