import './App.css'
import {RouterConfig} from '../router/route'
import { Header } from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    {/* react-router-domをコンポーネント内で使用するにはBrowserRouterで囲む必要がある */}
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <RouterConfig />
    </>
  )
}

export default App
