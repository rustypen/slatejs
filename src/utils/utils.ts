function typeChecker(type: string){
  const customNode = document.createElement(type).toString();
  return customNode != "[object HTMLUnknownElement]";
}

function getCurrentData(mutationRecord:any){
  return mutationRecord.reduce((finalValue:any, record:any)=>{
      return record.target.nodeValue;
  },null)
}

function getOldData(mutationRecord:any){
  return mutationRecord.reduce((finalValue:any, record:any)=>{
      return record.oldValue;
  },null)
}

function getRecordType(mutationRecord:any){
  return mutationRecord.reduce((finalValue:any, record:any)=>{
      return record.type;
  },null)
}








export default {
  typeChecker,
  getCurrentData,
  getOldData,
  getRecordType
}