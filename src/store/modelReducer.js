import { DELETE } from  "./modelActionTypes";
import { initialData } from  "./initialData";

export default function(storeData, action) {
    switch( action.type ) {
        case DELETE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType]
                .filter(p => p.id !== action.payload)
            }
        default:
            return storeData || initialData;
    }
}