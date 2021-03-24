import { combineReducers } from 'redux';
import manageRelatives from './manageRelatives'


const rootReducer = combineReducers({
    relatives: manageRelatives
});

export default rootReducer