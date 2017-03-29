/**
 * Created by Administrator on 2017/2/24 0024.
 */
export function clickOperationContent(text) {
    return { type:"content_change" , text }
}
export function change_set(text) {
    return { type:"change_set" , text }
}
export function getBeforeRecord(text) {
    return { type:"get_before_rec" , text }
}
export function getRecord(text) {
    return { type:"get_stu_rec" , text }
}

export function setMask(text) {
    return { type:"mask" , text }
}
export function changeTodayReward(text) {
    return { type:"ChangeToday" , text }
}
export function addStudent(text) {
    return { type:"add_student" , text }
}

export function updateStudent(text) {
    return { type:"update_student" , text }
}
export function deleteChangeTotalScore(text) {
    return { type:"delete_change_total_score" , text }
}