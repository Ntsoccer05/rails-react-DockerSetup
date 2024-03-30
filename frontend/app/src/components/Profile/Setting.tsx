import React, { useState } from "react"
import { useGetImageUrl } from "../../hooks/useGetImageUrl";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  submit: any;
}

export const Setting = () => {
  const [inputFile, setInputFile] = useState<File | undefined>();
  const [inputName, setInputName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit : SubmitHandler<Inputs> = (data) => console.log(data)

  const changeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
      const targetFile = e.currentTarget.files[0];
      setInputFile(targetFile);
    }
  }

  // state (imageFile)が更新されたら、画像URLを作成する。
	const { imageUrl } = useGetImageUrl({ file: inputFile });
  
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-xl bg-white p-5 rounded shadow-lg basis-full">
                {/* <!-- Avatar Section --> */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-32 h-32 mr-4 overflow-hidden rounded-full">
                    <label htmlFor="avatar" className="cursor-pointer text-blue-500 hover:underline"><img src={imageUrl ? imageUrl : "https://tecdn.b-cdn.net/img/new/avatars/2.webp"} alt="Avatar" className="w-full h-full object-cover hover:opacity-50" /></label>
                    <input type="file" id="avatar" className="hidden" accept="image/*" onChange={changeFile}/>
                    {/* <img src="https://source.unsplash.com/200x200/?portrait" alt="Avatar" className="w-full h-full object-cover" /> */}
                  </div>
                  {/* <div>
                      <label htmlFor="avatar" className="cursor-pointer text-blue-500 hover:underline">Change Profile Picture</label>
                      <input type="file" id="avatar" className="hidden" />
                  </div> */}
                </div>

                {/* <!-- Name Section --> */}
                {/* <div className="grid grid-cols-2 gap-4 mb-6"> */}
                  <div className="mb-6">
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">名前</label>
                    <input type="text" id="firstName"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" 
                    {...register("name")}/>
                  </div>
                  {errors.name?.message && (
                    <p className="error-message">{errors.name?.message}</p>
                  )}
                  {/* <div>
                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                    <input type="text" id="lastName"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                  </div> */}
                {/* </div> */}

                {/* <!-- Email Section --> */}
                <div className="mb-10">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">メールアドレス</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" 
                  {...register("email")}/>
                </div>
                {errors.email?.message && (
                  <p className="error-message">{errors.email?.message}</p>
                )}
                {/* <!-- Buttons --> */}
                <div className="flex justify-between">
                  <button
                    className="inline-flex items-center bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    type="submit">
                    <svg
                      fill="none"
                      className="w-4 text-white mr-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    更新
                  </button>
                  <button
                    className="inline-flex items-center bg-red-500 text-white px-8 py-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
                    type="button">
                    <svg
                      fill="none"
                      className="w-4 mr-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                    </svg>削除
                  </button>
                </div>
            </div>
          </div>
        </form>
    )
}