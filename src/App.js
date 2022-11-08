import { Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css'
import Index from './views/Index'
import Info from './views/Info'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/info" element={<Info />} />
        <Route></Route>
      </Routes>
    </div>
  )
}

export default App


