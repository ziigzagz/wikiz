import { Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css'
import  Index  from './views/Index'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  )
}

export default App
