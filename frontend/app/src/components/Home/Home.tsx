import { Suspense } from "react"
import { Card } from "./Card"
import { ErrorBoundary } from "react-error-boundary"



export const Home = ()=> {
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
                <Card></Card>
            </Suspense>
        </ErrorBoundary>
        </>
    )
}