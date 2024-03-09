import { useState } from "react"
import { Link } from "react-router-dom";
import {PostData} from "../../../types/api/PostData.ts"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = ()=>{
  // 表示するカード内容(can_post=trueのみ)
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
      user_id: 1,
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
  // データ取得（サーバー実装後）
  // const result = await axios.get<PostData[]>('/api/')
  // return result.data
}

export const Card = () => {
  const [like, haslike] = useState<boolean>(false);

  // react-query v5 移行はオブジェクトにてuseQueryに設定する
  const {data} = useQuery<PostData[]>({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  })

  // お気に入りボタン押下時処理
  const liked = () => {
    haslike(!like);
  }
  return (
    <>
    {/* <!-- component --> */}
    <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {data?.map((post) => { 
            return(
              post.can_post && <div className="bg-white rounded-lg border p-4" key={post.id}>
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover"></img>
            <div className="px-1 py-4">
              <div className="grid grid-cols-2">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <div className={"justify-self-end fill-red-500" + (like ? " fill-red-500" : "")}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 justify-end fill-red-500" + (like && "fill-red-500")} onClick={liked}>
                    <path className={like ? "fill-pink-500" : ""} strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 text-base">
              {post.content}
              </p>
            </div>
            <p className="px-1 text-sm">更新日：{post.updated_at}</p>
            <div className="px-1 py-4 mt-5">
            <button
              className="block w-full select-none rounded-lg bg-pink-500 py-2 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            ><Link to={"/detail" + post.id}></Link>Read More
            </button>
            </div>
          </div>
          )})}
        </div>
      </div>
    </div>
    </>
  )
}