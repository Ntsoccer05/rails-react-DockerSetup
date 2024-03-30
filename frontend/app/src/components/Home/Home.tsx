import { Suspense, useState } from "react"
import { Card } from "./Card"
import { ErrorBoundary } from "react-error-boundary"
import { TESelect, TERipple } from "tw-elements-react";
import { SelectData } from "tw-elements-react/dist/types/forms/Select/types";
import { fetchPosts } from "../../hooks/usePost";
import { useQuery } from "@tanstack/react-query";
import { PostData } from "../../../types/api/PostData";

export const Home = ()=> {
    // 並び替え内容
    const data:SelectData | SelectData[] = [
        { text: "更新順", value: 1 },
        { text: "古い順", value: 2 },
        { text: "お気に入り順", value: 3 },
        { text: "閲覧数順", value: 4 },
    ];

    // 並び替え内容取得
    const [selectContent, setSelectContent] = useState<string>("");
    // 検索内容取得
    const [searchContent, setSearchContent] = useState<string>("");
    // const [searchedCards, setSearchedCards] = useState<PostData[] | undefined>();

    const searchInputValue = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchContent(e.target.value)
    })

    // プロパティ名:カスタム変数名、refetchはイベント関数内などで再度useQueryを用いてデータ取得したいときに使える。
    const { data:searchedCards, refetch } = useQuery<PostData[]>({
        queryKey: ["filteredCards"],
        queryFn: () => searchContent ? fetchPosts(searchContent) : fetchPosts()
    })
    const filterCards = () => {
        // const data = searchContent ? fetchPosts(searchContent) : fetchPosts();
        // setSearchedCards(data);
        refetch();
    }

    const selectValue = (data:SelectData | SelectData[])=>{
        setSelectContent( (data as SelectData).text as string)
    }
    return (
        <>
        <ErrorBoundary fallback={
            <p className="text-center">データ取得できませんでした。</p>
        }>
            <Suspense fallback={
                <div className="flex justify-center" aria-label="読み込み中">
                    <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
                </div>
            }>
                <div className="md:flex block h-32 md:h-20">
                    <div className="md:mb-3 pt-6 md:w-96 mx-auto">
                        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon3"
                                onChange={searchInputValue} 
                            />
                            {/* <!--Search button--> */}
                            <TERipple>
                                <button
                                    className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                    type="button"
                                    id="button-addon3"
                                    onClick={filterCards}>
                                    検索
                                </button>
                            </TERipple>
                        </div>
                    </div>
                    <div className="md:relative absolute mb-3 md:w-64 md:pt-6 float-right md:mr-5">
                        <TESelect
                            data={data}
                            placeholder="並び替え"
                            preventFirstSelection
                            onValueChange={selectValue}
                        />
                    </div>
                </div>
                <Card selectedValue={selectContent} filteredCards={searchedCards}></Card>
            </Suspense>
        </ErrorBoundary>
        </>
    )
}