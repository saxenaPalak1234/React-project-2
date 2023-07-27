import './App.css'
import Form from './components/ContactForm/Form'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <>
    <div>
      <Navbar/>
    
      <main className='main_container'>
      <ContactHeader/>
      </main>
      
      <Form />

    </div>
      
    </>
  )
}

export default App
