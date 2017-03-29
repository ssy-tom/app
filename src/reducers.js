/**
 * Created by Administrator on 2017/2/16 0016.
 */
import { combineReducers } from 'redux'
import {loginData,superloginData,studentType,serverUrl} from './containers/reducers';
import studentManager from './studentManager/reducers';
import superManager from './superManager/reducers';


//班级管理员
const todoApp = combineReducers({
    loginData,
    studentManager,
    superloginData,
    superManager,
    studentType,
    serverUrl
});

export default todoApp