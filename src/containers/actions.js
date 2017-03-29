/**
 * Created by Administrator on 2017/2/22 0022.
 */


export function beforeGetTeacherAllData(text) {
    return { type: "before_get", text }
}
export function GetTeacherAllData(text) {
    return { type: "After_get", text }
}
export function addReduceScore(text) {
    return { type: "add_reduce_score", text }
}



export function beforeSuperData(text) {
    return { type: "before_super_data", text }
}

export function getSuper(text) {
    return { type: "super_data", text }
}
export function changeOneReward(text) {
   
    return { type: "change_one_reward", text }
}
export function deleteOneReward(text) {
   
    return { type: "delete_one_reward", text }
}

export function studentType(text) {
    return { type: "student_type", text }
}

export function fixedUrl(text) {
    return { type: "fixed_url", text }
}