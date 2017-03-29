/**
 * Created by Administrator on 2017/2/22 0022.
 */
// import {combineReducers} from 'redux'

export function loginData(state = [], action) {
    switch (action.type) {
        case "before_get":
            return "正在获取数据";
            break;
        case "After_get":
  
            action.text.grade.set = 1;
            return action.text;
            break;
        case "add_reduce_score":
            let data = state;

            data.students.forEach(function (value, index) {
                if (value.id == action.text.index) {
                    value.score += action.text.value;
                }
            });
            data.selectId = action.text.index;
            data.grade.gscore += action.text.value;
            return data;
            break;
        case "change_set":
            state.grade.set = action.text;

            return {...state};
            break;
        case "add_student":
            // state.grade.set=action.text;
            state.students.push(
                action.text
            );
            console.log(state);
            return {...state};
            break;
        case "update_student":

            if (action.text[2]) {
                let obj = state.students[action.text[0]];
                let changeDataArr = Object.keys(action.text[1]);
                changeDataArr.map((value)=> {
                    obj[value] = action.text[1][value]
                });
                
            } else {
              
                state.students.splice(action.text[0], 1)
            }

            return {...state};
            break;
        case "delete_change_total_score":
            state.grade.gscore+=action.text.value;
            state.students.map((obj,index)=>{
                console.log(obj.id,action.text);
               if(obj.id==action.text.sid){
                   obj.score+=action.text.value;
               }
            });
            return {...state};
            break;
        default:
            return state
    }
}

export function superloginData(state = [], action) {
    switch (action.type) {
        case "before_super_data":
            return "正在加载数据";
            break;
        case "super_data":
            action.text.set = 1;
            return action.text;
            break;
        case "super_content_change":
            state.set = action.text;
            return {...state};
            break;
        case "change_one_reward":
            if (action.text.flag == 1) {
                state.rewards.push({
                    des: "",
                    id: "",
                    name: action.text.name,
                    type: action.text.type,
                    score: action.text.score
                })
            }else if(action.text.flag == 2){

                for(let [i,obj] of state.rewards.entries()){

                    if(obj.id==action.text.id){
                        state.rewards[i]={...state.rewards[i],name: action.text.name,
                            type: action.text.type,
                            score: action.text.score}
                    }
                }
                
            }
            return {...state};
            break;
        case "delete_one_reward":
            state.rewards.map((obj,index)=>{
               if(obj.id==action.text.value.id){
                   state.rewards.splice(index,1);
               }
            });

            return {...state};
            break;
        case "add_class":
            state.grades.push(action.text);
         
            return {...state};
            break;
        case "update_class":
            console.log("state333",state.grades);

            state.grades.map((obj, index)=> {
            //
                if (obj.id == action.text.id) {
                    let changeDataArr = Object.keys(action.text);
                    changeDataArr.map((value)=> {
                        obj[value] = action.text[value]
                    });
                }
            });


            return {...state};
            break;
        case "super_delete_change_total_score":

         state.grades.forEach((obj,index)=>{
             if(obj.id==action.text.classId){
                 obj.gscore+=action.text.value;
                 obj.list.forEach((obj2,index2)=>{
                     if(obj2.id==action.text.studentId){
                         obj2.score+=action.text.value;
                     }
                 })
             }
         });

            return {...state};
            break;
        default:
            return state
    }
}

export function studentType(state = false, action) {
    switch (action.type) {
        case "student_type":
            return true;
            break;
        default:
            return state
    }
}
export function serverUrl(state = "http://192.168.60.100:8080", action) {
    switch (action.type) {
        case "fixed_url":
            return action.text;
            break;
        default:
            return state
    }
}
