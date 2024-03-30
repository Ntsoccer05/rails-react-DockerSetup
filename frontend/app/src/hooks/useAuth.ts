import axios from "axios"
import { useCallback } from "react"
import {User} from "../../types/api/user"

export const useAuth = () =>{
    // TODO 仮のユーザデータ
    let loginUserdata:User | undefined = {
        id: 1,
        name:"test1",
        email:"test1@email.com",
        img: "aaa",
        is_admin: false
    }

    // TODO ユーザーデータ取得
    const getLoginUser = useCallback(() => {
        // axios.get<User>("")
        // .then((res) => {
            // data = res.data
        // }).catch((err) => {
            // data = undefined
        // })
    },[])

    // 未ログイン時のメニューを表示したい場合に設定
    // loginUserdata = undefined
    return {loginUserdata}
}