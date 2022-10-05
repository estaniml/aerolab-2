import { useState } from 'react'
import { MyProvider } from './context/MyContext'
import styled from 'styled-components'
import Balance from './components/Balance'
import Footer from './components/Footer'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Products from './components/Products'
import Walkthrough from "./components/Walkthrough"

function App() {

  const [card, setCard] = useState(false)

  return (
    <MyProvider>

      <Container>
        <Navbar setCard={setCard} card={card} />
        { card && <Balance />}

        <div onClick={() => setCard(false)}>
          <Header />
          <Walkthrough/>
          <Products />
        </div>

        <Footer />
        
        
        

      </Container>
      
    </MyProvider>

    
  )
}

const Container = styled.div`
  font-family: 'Montserrat',  sans-serif;
  position: relative;
  overflow: hidden;
`

export default App
