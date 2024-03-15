import {atom} from "recoil"

// メッセージを表示するState
export const showMessage = atom({
    key: "showMessage",
    default: false
})