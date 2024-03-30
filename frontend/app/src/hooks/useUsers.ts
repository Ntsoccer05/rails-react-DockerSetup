import axios from "axios"
import { useCallback } from "react"
import { User } from "../../types/api/user"

export const useAuth = () =>{
    // TODO 仮のユーザデータ
    let usersData:User[] | undefined = [
        {
            id: 1,
            name:"test1",
            email:"test1@email.com",
            img: "aaa",
            is_admin: false
        },
        {
            id: 2,
            name:"test2",
            email:"test2@email.com",
            img: "aaa",
            is_admin: false
        },
        {
            id: 3,
            name:"test3",
            email:"test3@email.com",
            img: "aaa",
            is_admin: true
        },
    ]

    // TODO ユーザーデータ取得
    const getUsers = useCallback(() => {
        // axios.get<User[]>("")
        // .then((res) => {
            // data = res.data
        // }).catch((err) => {
            // data = undefined
        // })
    },[])

    // 未ログイン時のメニューを表示したい場合に設定
    // data = undefined
    return {usersData}
}