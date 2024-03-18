import { atom } from "recoil";
import { PostData } from "../../types/api/PostData.ts"

// ジェネリックを使用して、atomのデフォルト値の型を定義
type AtomDefaultValue<T> = T | undefined;

// カード一覧データ
export const cardsData = atom<AtomDefaultValue<PostData[]>>({
    key: "cardsData",
    default: undefined
})