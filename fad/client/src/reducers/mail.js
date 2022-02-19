import { MAIL} from '../constants/actionTypes';

export default (crud = [], action) => {
    switch(action.type ){
        case MAIL:
            return action.payload;
            // case AUTH:
        //     {
        //         console.log(action.payload);
        //         localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

        //         return { ...crud, authData: action.data, loading: false, errors: null };
        //     }
        // case LOGOUT:
        // {
        //     localStorage.clear();

        //     return { ...crud, authData: null, loading: false, errors: null };
        // }
        default :
            return crud;
    }
}