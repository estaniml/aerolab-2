import { useState } from 'react'
import { MyProvider } from './context/MyContext'
import styled, { ThemeProvider } from 'styled-components'
import Balance from './components/Balance'
import Footer from './components/Footer'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Products from './components/Products'
import Walkthrough from "./components/Walkthrough"

function App() {

  const [card, setCard] = useState(false)

  const theme = {
    gradientBg: "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)",
    buttons: {
      btnShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
      btnHover: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)"
    }
  }

  return (
    <MyProvider>
      <ThemeProvider theme={theme}>

        <Container>
          <Navbar 
            setCard={setCard} 
            card={card} 
            />

          { card && <Balance />}

          <div onClick={() => setCard(false)}>
            <Header />
            <Walkthrough/>
            <Products />
          </div>

          <Footer />

        </Container>
      </ThemeProvider>
      
    </MyProvider>

    
  )
}

const Container = styled.div`
  font-family: 'Montserrat',  sans-serif;
  position: relative;
  overflow: hidden;
`

export default App
