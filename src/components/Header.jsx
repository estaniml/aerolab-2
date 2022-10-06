import { useContext, useRef } from 'react'
import { MyContext } from '../context/MyContext'
import styled from 'styled-components'
import { useInView } from "framer-motion"
import downArrow from '../assets/icons/downarrow.svg'
import waves from '../assets/illustrations/wavepattern-mobile.png'
import wavesDesktop from '../assets/illustrations/wavepattern-tablet.png'
import hero from '../assets/illustrations/hero.png'
const Header = () => {

    const {productsList } = useContext(MyContext)

    const header = useRef(null)
    const isInView = useInView(header)

    const scrollInto = () => {
        productsList.current.scrollIntoView()
    }

    

  return (
    <HeaderContainer>
        <Waves></Waves>
        <Landing ref={header} isInView={isInView}>
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

        <Hero isInView={isInView}>
            <img src={hero} alt='aerolab hero' />
        </Hero>
        
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
    position: relative;
    margin: 0 auto;
    padding: 26px 20px 100px;

    @media (min-width: 1400px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        padding: 0px 130px 80px;
    }
`

const Landing = styled.div`
    margin: 0 auto;
    padding: 0px 30px;    

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
        margin: 0;
        text-align: center;
        color: #7C899C;
        font-weight: 600;
        letter-spacing: 4px;
        line-height: 150%;
        text-transform: uppercase;
        transition: 0.4s ease-in-out all;
        transition-delay: 0.2s;
        opacity: ${({isInView}) => isInView ? '1' : '0'};
    

        @media (min-width: 1400px) { 
            text-align: left;
            font-size: 18px;
        }
    }

    > h1 {
        margin: 0;
        margin-left: ${({isInView}) => isInView ? '0' : '-100px'};
        text-align: center;
        font-weight: 900;
        font-size: 96px;
        line-height: 80%; 
        text-transform: uppercase;
        transition: 0.4s ease-in-out all;
        transition-delay: 0.2s;
        opacity: ${({isInView}) => isInView ? '1' : '0'};

        @media (min-width: 1400px) { 
            text-align: left;
            font-size: 180px;
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
        padding: 20px 30px;
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

const Hero = styled.aside`
    display: none; 
    transition: 0.4s ease-in-out all;
    transition-delay: 0.2s;
    opacity: ${({isInView}) => isInView ? '1' : '0'};

    @media (min-width: 1400px){
        display: flex;
        position: relative;
        margin: 0px 0px 0px 80px;
        padding: 0;
        width: 720px;
        height: 480px;
        background: linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
        border-radius: 104px;
        
        > img {
            position: absolute;
            bottom:0px;
            left: 50%;
            width: 580px;
            height: 600px;
            transform: translateX(-50%);
        }
    }
`

export default Header