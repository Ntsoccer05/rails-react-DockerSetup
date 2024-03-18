import { useEffect, useState } from "react"
import { cardsData } from "../../store/cardsData";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { PostData } from "../../../types/api/PostData";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../hooks/usePost";
import { useAuth } from "../../hooks/useAuth";

export const PostDetail = () => {
  // お気に入り登録
  const [like, haslike] = useState<boolean>(false);

  // ポストカードID
  const { id } = useParams()

  // ログインユーザー情報取得
  const { loginUserdata } = useAuth();

  // 全てのカード情報
  const [ getCardsData, setCardsData ] = useRecoilState(cardsData);
  // ポストカードIDのカード情報
  const [ cardsDataDetail, setCardsDataDetail ] = useState<PostData[]>([]);

  // 全てのカード情報取得
  const { data } = useQuery<PostData[]>({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  })

  // 全てのカード情報を設定
  useEffect(()=>{
    setCardsData( data )
  }, [data])

  // ポストカードIDのカード情報を設定
  useEffect(()=>{
    if(getCardsData && getCardsData?.length>0){
      setCardsDataDetail(getCardsData?.filter((cardData)=>{
        return cardData.id === Number(id)
      }))
    }
  },[getCardsData])
  

  // お気に入りボタン押下時処理
  const liked = () => {
    haslike(!like);
  }
  return (
    <>
      <div
        className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface mt-10">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg mx-auto"
            src="https://tecdn.b-cdn.net/img/new/slides/041.webp"
            alt="" />
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 mb-3">
            <p className="text-base text-surface/75 dark:text-neutral-300 text-left md:text-center">
              <small>
                By ユーザ名
              </small>
            </p>
            <p className="text-base text-surface/75 dark:text-neutral-300 mb-3 text-right align-bottom md:text-center">
              <small>
                Last updated {cardsDataDetail.length > 0 && cardsDataDetail[0].updated_at}
              </small>
            </p>
          </div>
          <h5
            className="mb-2 text-xl font-medium leading-tight text-center">
            {cardsDataDetail.length > 0 && cardsDataDetail[0].title}
          </h5>
          <hr />
          <p className="mb-4 text-base mt-5">
            {cardsDataDetail.length > 0 && cardsDataDetail[0].content}
          </p>
          <hr />
          <div className="text-center">
            {cardsDataDetail.length > 0 && loginUserdata.id === cardsDataDetail[0].user_id ?
              <>
                <button
                  type="button"
                  className="mt-5 mr-3 inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-green-400 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  編集
                </button>
                <button
                  type="button"
                  className="mt-5 mr-3 inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-red-400 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  削除
                </button>
              </>
              :<></>
            }
            <button
              type="button"
              className="mt-5 inline-block rounded bg-pink-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-pink-400 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              お気に入り
            </button>
          </div>
        </div>
      </div>
    </>
  )
}