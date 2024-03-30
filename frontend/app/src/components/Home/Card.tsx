import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { PostData } from "../../../types/api/PostData.ts"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../hooks/usePost.ts";
import { useRecoilState } from "recoil";
import { cardsData } from "../../store/cardsData.ts";

type Props = {
  selectedValue: string,
  filteredCards: PostData[] | undefined
}

export const Card = (Props:Props) => {
  // 並び替え内容
  const {selectedValue, filteredCards} = Props;

  const [like, haslike] = useState<boolean>(false);

  const [ cards, setCards ] = useRecoilState(cardsData);
  // const [sortedCards, setSortedCards] = useState<PostData[]>()

  // react-query v5 移行はオブジェクトにてuseQueryに設定する useQueryはHooksなので一番外側でしか呼べない
  const { data } = useQuery<PostData[]>({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  });

  useEffect(()=>{
    filteredCards ? setCards(filteredCards) : setCards( data );
  }, [data, filteredCards])

  // 並び替え機能
  useEffect(()=>{
    // 再レンダリングが生じるため一度変数にdataを格納
    let sortedCards = cards && Array.from(cards)
    switch(selectedValue){
      case "古い順":
        sortedCards && sortedCards.sort((beforeVal, nextVal)=>{
          const beforeDate = new Date(beforeVal.updated_at as string)
          const nextDate = new Date(nextVal.updated_at as string)
          if(beforeDate > nextDate){
            return 1;
          }else{
            return -1;
          }
        });
        setCards(sortedCards);
        break;
      case "更新順":
        sortedCards && sortedCards.sort((beforeVal, nextVal)=>{
          if((new Date(beforeVal.updated_at as string)) > (new Date(nextVal.updated_at as string))){
            return -1
          }else{
            return 1;
          }
        });
        setCards(sortedCards);
      break;
      default:
    }
    
  }, [selectedValue])

  // お気に入りボタン押下時処理
  const liked = () => {
    haslike(!like);
  }
  return (
    <>
    {/* <!-- component --> */}
      <div className="w-full bg-gradient-to-bl from-blue-50 to-violet-50 ">
        <div className="container mx-auto p-4 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {cards?.map((post) => { 
            return(
              post.can_post && <div className="bg-white rounded-lg border p-4" key={post.id}>
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover"></img>
            <div className="px-1 py-4">
              <p className="text-base text-surface/75 dark:text-neutral-300 text-right mb-3">
                <small>
                  By ユーザ名
                </small>
              </p>
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
              <Link to={"/detail/" + post.id}>
                <button
                  className="block w-full select-none rounded-lg bg-pink-500 py-2 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >Read More</button>
              </Link>
            </div>
          </div>
          )})}
        </div>
      </div>
    </>
  )
}