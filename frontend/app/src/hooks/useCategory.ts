import axios from "axios"
import { useCallback } from "react"
import {Category} from "../../types/api/Category"

export const useCategory = () =>{
    // TODO 仮のユーザデータ
    let Category: Category[] | undefined = [
        {
            content: "aaa"
        },
        {
            content: "bbb"
        },{
            content: "ccc"
        },
    ]

    // TODO カテゴリーデータ取得
    const getCategory = useCallback(() => {
        // axios.get<Category[]>("")
        // .then((res) => {
            // data = res.data
        // }).catch((err) => {
            // data = undefined
        // })
    },[])

    // 未ログイン時のメニューを表示したい場合に設定
    // data = undefined
    return {Category}
}