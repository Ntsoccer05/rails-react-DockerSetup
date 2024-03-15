import axios from "axios"
import { useCallback } from "react"
import {User} from "../../types/api/user"

export const useAuth = () =>{
    // TODO 仮のユーザデータ
    let data:User | undefined = {
        name:"test",
        email:"test@email.com",
        img: "aaa",
        is_admin: false
    }

    // TODO ユーザーデータ取得
    const login = useCallback(() => {
        // axios.get<User>("")
        // .then((res) => {
            // data = res.data
        // }).catch((err) => {
            // data = undefined
        // })
    },[])

    // data = undefined
    return {data}
}