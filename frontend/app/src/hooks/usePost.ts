import {PostData} from "../../types/api/PostData.ts"

export const fetchPosts = ()=>{
    // TODO 表示するカード内容(can_post=trueのみ)
    const result:PostData[] = [
      {
        id: 1,
        user_id: 1,
        tag_id: 1,
        category_id: 1,
        content: "内容１",
        title: "タイトル１",
        can_post: true,
        posted_at: "2024/03/05",
        created_at: "2024/03/05",
        updated_at: "2024/03/05"
      },
      {
        id: 2,
        user_id: 1,
        tag_id: 1,
        category_id: 1,
        content: "内容２",
        title: "タイトル２",
        can_post: false,
        posted_at: "2024/03/06",
        created_at: "2024/03/06",
        updated_at: "2024/03/06"
      },
      {
        id: 3,
        user_id: 3,
        tag_id: 1,
        category_id: 1,
        content: "内容３",
        title: "タイトル３",
        can_post: true,
        posted_at: "2024/03/07",
        created_at: "2024/03/07",
        updated_at: "2024/03/07"
      },
    ]
    return result
    // TODO データ取得（サーバー実装後）
    // const result = await axios.get<PostData[]>('/api/')
    // return result.data
  }