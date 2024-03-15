import { useState } from "react"

export const PostDetail = () => {
  const [like, haslike] = useState<boolean>(false);
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
          {/* <!-- Replace this with your grid items --> */}
          <div className="bg-white rounded-lg border p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover"></img>
            <div className="px-1 py-4">
              <div className="grid grid-cols-2">
                <div className="font-bold text-xl mb-2">Blog Title</div>
                <div className={"justify-self-end fill-red-500" + (like ? " fill-red-500" : "")}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 justify-end fill-red-500" + (like && "fill-red-500")} onClick={liked}>
                    <path className={like ? "fill-pink-500" : ""} strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div className="px-1 py-4 mt-5">
            <button
              className="block w-full select-none rounded-lg bg-pink-500 py-2 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >Read More
            </button>
            </div>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover"></img>
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">Blog Title</div>
              <p className="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div className="px-1 py-4">
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover"></img>
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">Blog Title</div>
              <p className="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div className="px-1 py-4">
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover"></img>
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">Blog Title</div>
              <p className="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div className="px-1 py-4">
            <button
      className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >Read More</button>
            </div>
          </div>
          {/* <!-- Add more items as needed --> */}
        </div>
      </div>
    </div>
    </>
  )
}