import {atom} from "recoil"

// メッセージを表示するState
export const showMessage = atom({
    key: "showMessage",
    default: false
})

// トーストメッセージの内容を表示するState
export const showMessageContent = atom({
    key: "showMessageContent",
    default: ''
})

// トーストメッセージのタイトルを表示するState
export const showMessageTitle = atom({
    key: "showMessageTitle",
    default: ''
})

// トーストメッセージのステータスを表示するState
export const showMessageStatus = atom({
    key: "showMessageStatus",
    default: ''
})