import {PostData} from "../../types/api/PostData.ts"

// filterContent:検索ボックス内容
export const fetchPosts = ( filterContent?: string )=>{
    // TODO 表示するカード内容(can_post=trueのみ)
    let result:PostData[] = [
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
      {
        id: 4,
        user_id: 3,
        tag_id: 1,
        category_id: 1,
        content: "内容４",
        title: "タイトル４",
        can_post: true,
        posted_at: "2024/03/09",
        created_at: "2024/03/09",
        updated_at: "2024/03/09"
      },
      {
        id: 5,
        user_id: 1,
        tag_id: 1,
        category_id: 1,
        content: "内容５",
        title: "タイトル５",
        can_post: true,
        posted_at: "2024/03/20",
        created_at: "2024/03/20",
        updated_at: "2024/03/20"
      },
      {
        id: 6,
        user_id: 3,
        tag_id: 1,
        category_id: 1,
        content: "内容６",
        title: "タイトル１",
        can_post: true,
        posted_at: "2024/03/20",
        created_at: "2024/03/20",
        updated_at: "2024/03/20"
      },
    ]

    // 全角→半角(英数字)
    const replaceFullToHalf = (str:string) => {
      return str.replace(/[！-～]/g, function(s){
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
      });
    }

    const filteredData = filterContent && result.filter((data)=> {
      return replaceFullToHalf(data.content).includes(replaceFullToHalf(filterContent)) || replaceFullToHalf(data.title).includes(replaceFullToHalf(filterContent))
    })
    filteredData ? result = filteredData : result = result
    return result
    // TODO データ取得（サーバー実装後）
    // const result = await axios.get<PostData[]>('/api/')
    // return result.data
  }