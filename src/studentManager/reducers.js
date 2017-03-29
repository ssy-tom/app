/**
 * Created by Administrator on 2017/2/24 0024.
 */
import { combineReducers } from 'redux'

function clickLinkage(state = {}, action) {
    switch (action.type) {
        case "content_change":
            return action.text || {};
            break;
        default:
            return state
    }
}

function updateStudentData(state = {}, action) {
    switch (action.type) {
        case "add_reduce_score":
            return action.text;
            break;
        default:
            return state
    }
}
function getStudentRecord(state = {status: 1, data: null}, action) {
    switch (action.type) {
        case "get_before_rec":
            return {...state, data: action.text};
            break;
        case "get_stu_rec":
            //token数组 用于排序
            let data = [];
            //历史 时间：记录 对象
            let dataObj = {};
            //今天记录数据
            let todayData = [];
            
            let today = new Date();
            today = `${today.getYear() + 1900}${(today.getMonth() + 1).toString().length == 1 ? "0" + (today.getMonth() + 1)
                : (today.getMonth() + 1)}${today.getDate().toString().length == 1 ? "0" + today.getDate() : today.getDate()}`
            
            action.text.data.forEach(function (obj, index) {
                const token = `${obj.year}${obj.month.toString().length == 1 ? "0" + obj.month : obj.month}${obj.day.toString().length == 1 ? "0" + obj.day : obj.day}`
                action.text.data[index].token = token;
                data.push(token)
            });

            data = [...new Set(data)];
            data.sort(function (a, b) {
                return b - a;
            });

            data.forEach(function (obj, index) {
                if(obj != today) {
                    dataObj[obj] = []
                }
            });

            action.text.data.forEach(function (obj, index) {
                if (obj.token == today) {
                    todayData.push(obj);
                } else {
                    dataObj[obj.token].push(obj);
                }
            });
            if (data[0] == today) {
                data.splice(0, 1)
            }
            return {status: 2, todayData: todayData, historyData: dataObj ,order:data};
            break;
        case "ChangeToday":
            state.todayData.splice(action.text,1);
            return {...state};
            break;
        default:
            return state

    }
}

function setMask(state = false, action){
    switch (action.type) {
        case "mask":

            return action.text;
            break;
        default:
            return state
    }
}

const studentManager = combineReducers({
    clickLinkage,
    updateStudentData,
    getStudentRecord,
    setMask
});
export default studentManager
