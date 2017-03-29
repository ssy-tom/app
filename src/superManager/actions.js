/**
 * Created by Administrator on 2017/3/1 0001.
 */
export function superLink(text) {
    return { type:"super_link" , text }
}

export function super_change(text) {
    return { type:"super_content_change" , text }
}
export function pageRewrds(text) {
    return { type:"page_rewrds" , text }
}
export function getBefore(text) {
    return { type:"get_before" , text }
}
export function getStu(text) {
    return { type:"get_stu" , text }
}
export function setClassOrRewards(text) {
    return { type:"setClassOrRewards" , text }
}

export function setMask(text) {
    return { type:"super_mask" , text }
}

export function changeTodayReward(text) {
    return { type:"superChangeToday" , text }
}
export function addClass(text) {
    return { type:"add_class" , text }
}
export function updateClass(text) {
    return { type:"update_class" , text }
}
export function superDeleteChangeTotalScore(text) {
    return { type:"super_delete_change_total_score" , text }
}
