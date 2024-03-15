import './App.css'
import {RouterConfig} from '../router/route'
import { Header } from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import {RecoilRoot} from "recoil"

function App() {
  return (
    <>
    {/* react-router-domをコンポーネント内で使用するにはBrowserRouterで囲む必要がある */}
      <RecoilRoot>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        <RouterConfig />
      </RecoilRoot>
    </>
  )
}

export default App
