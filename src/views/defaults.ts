function typeChecker(type: string){
  const customNode = document.createElement(type).toString();
  return customNode != "[object HTMLUnknownElement]";
}

export default typeChecker;