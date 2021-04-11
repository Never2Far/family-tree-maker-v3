import { combineReducers } from 'redux';
import manageRelatives from './manageRelatives'
import  manageUsers  from './manageUsers';


const rootReducer = combineReducers({
    relatives: manageRelatives,
    users: manageUsers
});

export default rootReducer