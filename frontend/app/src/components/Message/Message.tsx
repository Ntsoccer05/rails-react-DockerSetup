import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { showMessage } from "../../store/showMessage";
import { TEToast } from "tw-elements-react";


type Props = {
    status: string | undefined,
    title: string
    duration: number,
    children: string,
}

// カスタムトーストメッセージ
export const Message = (props: Props) => {
       const { status, title, duration, children} = props;

       // グローバルState
       const [dispMessage, setDispMessage] = useRecoilState(showMessage)

       const [bgColor, setBgColor] = useState<string>("");
    //    const [focusOffsetColor, setFocusOffsetColor] = useState<string>("");
    //    const [focusDarkColor, setFocusDarkColor] = useState<string>("");
       const [textColor, setTextColor] = useState<string>("");
       const [borderColor, setBorderColor] = useState<string>("");

       // statusによりメッセージの色を変更
       useEffect(()=>{
        switch (status) {
            case "info":
                // setBgColor("blue-500");
                // setFocusOffsetColor("blue-800");
                // setFocusDarkColor("blue-700");
                setBgColor("bg-blue-100");
                setTextColor("text-blue-800");
                setBorderColor("border-blue-200");
                break;
            case "warning":
                // setBgColor("yellow-500");
                // setFocusOffsetColor("yellow-800");
                // setFocusDarkColor("yellow-700");
                setBgColor("bg-yellow-100");
                setTextColor("text-yellow-800");
                setBorderColor("border-yellow-200");
                break;
            case "success":
                // setBgColor("green-500");
                // setFocusOffsetColor("green-800");
                // setFocusDarkColor("green-700");
                setBgColor("bg-green-100");
                setTextColor("text-green-800");
                setBorderColor("border-green-200");
                break;
            case "error":
                // setBgColor("red-500");
                // setFocusOffsetColor("red-800");
                // setFocusDarkColor("red-700");
                setBgColor("bg-red-100");
                setTextColor("text-red-800");
                setBorderColor("border-red-200");
                break;
            default:
                break;
        }
       },[status])

       // クリック時にメッセージを閉じる処理
       const toggleShowMessage = () => {
            setDispMessage(!dispMessage)
       }

       useEffect(()=>{
        // メッセージを一定時間で自動的に閉じる
        if(dispMessage === true){
          setTimeout(() => {
            setDispMessage(!dispMessage)
          },duration)
        }
      },[dispMessage])

    return (
        <>
            {/* {dispMessage ?
                <div className={`max-w-xs bg-${bgColor} animate-slideIn text-sm text-white rounded-md shadow-lg  mb-3 mx-auto`} role="alert" onClick={toggleShowMessage}>
                    <div className="flex p-4">
                        {children}
                        <div className="ml-auto">
                            <button type="button" className={`inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${focusOffsetColor} focus:ring-${bgColor} transition-all text-sm dark:focus:ring-offset-${bgColor} dark:focus:ring-${focusDarkColor}`} onClick={toggleShowMessage}>
                            <span className="sr-only">Close</span>
                            <svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            :
            <div className={`max-w-xs bg-${bgColor} animate-slideOut text-sm text-white rounded-md shadow-lg  mb-3 mx-auto`} role="alert">
                <div className="flex p-4">
                    <div className="ml-auto">
                        <button type="button" className={`inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${focusOffsetColor} focus:ring-${bgColor} transition-all text-sm dark:focus:ring-offset-${bgColor} dark:focus:ring-${focusDarkColor}`} onClick={toggleShowMessage}>
                        </button>
                    </div>
                </div>
            </div>
        } */}
            <div className="z-50">
                <TEToast staticToast open={dispMessage} autohide={true} delay={duration} setOpen={setDispMessage} color={`${bgColor} ${textColor}`} className="h-0 fixed inset-0 text-center z-50">
                    <div className={`flex items-center justify-between rounded-t-lg border-b-2 border-opacity-100 bg-clip-padding px-4 pb-2 pt-2.5 + ${bgColor} ${borderColor}`}>
                        <p className="font-bold text-base">
                            {title}
                        </p>
                        <div className="flex items-center">
                            <button
                            type="button"
                            className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            onClick={() => setDispMessage(false)}
                            aria-label="Close"
                            >
                            <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                                </svg>
                            </span>
                            </button>
                        </div>
                    </div>
                    <div className={`break-words rounded-b-lg px-4 py-4 text-left  + ${bgColor}`}>
                        {children}
                    </div>
                </TEToast>
            </div>
        </>
    )
}