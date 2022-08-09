import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/global'
import Home from './pages/home/Home'
import LinkPreview from './pages/home/timeLine/linkPreview/LinkPreview'

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<LinkPreview />} />
      </Routes>
    </BrowserRouter>
  )
}
