interface Index{
    type: string,
    data: string
}

function index(mutationRecord: any, Slate: any):void{
    Slate.updateState("data")
}

export default index;