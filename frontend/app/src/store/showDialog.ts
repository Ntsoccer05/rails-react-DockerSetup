import {atom} from "recoil"

// ダイアログを表示するState
export const showDialog = atom({
    key: "showDialog",
    default: false
})