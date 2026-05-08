import './App.css'

import MenuBar from "./components/MenuBar.jsx";

function App() {

  return (
    <>
        <div className="bg-[url(/bg.jpg)] bg-cover bg-center min-h-screen max-h-screen min-w-screen max-w-screen">
            <div className='absolute w-full bottom-0'>
                <MenuBar />
            </div>
        </div>
    </>
  )
}

export default App
