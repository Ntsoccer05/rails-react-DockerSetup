import { RouterConfig } from '../router/route'
import './App.css'
import { Header } from './components/Header/Header'
import {RecoilRoot} from "recoil"

function App() {
  return (
    <>
    {/* react-router-domをコンポーネント内で使用するにはBrowserRouterで囲む必要がある */}
      <RecoilRoot>
        <Header />
        {/* ルーティング */}
        <RouterConfig />
      </RecoilRoot>
    </>
  )
}

export default App
