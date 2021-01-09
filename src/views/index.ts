// import defaults from './defaults';
import utils from '../utils/utils';

function createData(mutationRecord:any){


}


export default function (mutationRecord: any, slate: any):void{
    const data = createData(mutationRecord);
    
    slate.updateState(data)
}