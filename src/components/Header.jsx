import { MyContext } from '../context/MyContext'
import { useContext } from 'react'
import styled from 'styled-components'
import downArrow from '../assets/icons/downarrow.svg'
import waves from '../assets/illustrations/wavepattern-mobile.png'
import wavesDesktop from '../assets/illustrations/wavepattern-tablet.png'
import hero from '../assets/illustrations/hero.png'

const Header = () => {

    const {productsList } = useContext(MyContext)

    const scrollInto = () => {
        productsList.current.scrollIntoView()
    }

  return (
    <HeaderContainer>
        <Waves></Waves>
        <Landing>
            <h5>Explore the</h5>
            <h1><span>Tech</span> zone</h1>
            <p>Here you’ll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.</p>
            <button
                onClick={scrollInto}
            >
                VIEW ALL PRODUCTS
                <img src={downArrow} alt='Aerolab down arrow' />
            </button>
        </Landing>

        <Hero>
            <img src={hero} alt='aerolab hero' />
        </Hero>
        
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    padding: 26px 20px 100px;
    margin: 0 auto;
    position: relative;

    @media (min-width: 1400px){
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 130px 80px;
    }
`

const Landing = styled.div`
    padding: 0px 30px;
    margin: 0 auto;

    @media (min-width: 1024px) {
        width: 300px;
        padding: 0 0 200px 0; 
    }

    @media (min-width: 1400px) {
        width: 640px;
        height: 525px;
        margin: 0 52px 0 0;
        padding: 0; 
    }

    > h5 {
        text-align: center;
        font-weight: 600;
        letter-spacing: 4px;
        color: #7C899C;
        line-height: 150%;
        text-transform: uppercase;
        margin: 0;

        @media (min-width: 1400px) { 
            font-size: 18px;
            text-align: left;
        }
    }

    > h1 {
        font-weight: 900;
        font-size: 96px;
        line-height: 80%; 
        text-align: center;
        text-transform: uppercase;
        margin: 0;

        @media (min-width: 1400px) { 
            font-size: 180px;
            text-align: left;
        }

        > span {
            background: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }

    p {
        margin: 0;
        margin-top: 26px;
        font-weight: 600;
        text-align: center;
        line-height: 24px;
        color: #7C899C;

        @media (min-width: 1400px) { 
            font-size: 18px;
            text-align: left;
            width: 80%;
        }
    }

    > button {
        font-family: 'Montserrat',  sans-serif;
        line-height: 24px;
        margin: 26px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 38px;
        gap: 10px;
        border: none;
        background: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
        border-radius: 24px;
        color: #ffff;
        font-weight: 600;
        font-size:  16px;
        cursor: pointer;

        &:hover{
        background: linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%);
    }

        > img {
            width: 11px;
            height: 14px;
        }

        @media (min-width: 1024px) {
            margin: 26px 0; 
            width: 100%;
        }

        @media (min-width: 1400px) { 
            margin-top: 30px;
            max-width: 300px;
        }
    }
    
`

const Waves = styled.section`
    background-image: url(${waves});
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -10;

    @media (min-width: 1024px) {
        top:0;
    }

    @media (min-width: 1400px) {
        background-image: url(${wavesDesktop});
    }
`

const Hero = styled.div`
    display: none; 

    @media (min-width: 1400px){
        display: flex;
        position: relative;
        margin: 0px 0px 0px 80px;
        padding: 0;
        width: 700px;
        height: 510px;
        background: linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
        border-radius: 104px;
        
        > img {
            position: absolute;
            bottom:0px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
        }
    }
`

export default Header