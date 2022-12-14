import { useRef } from 'react'
import styled from 'styled-components'
import { useInView } from "framer-motion"
import hero from '../assets/illustrations/hero-desktop.png'
import browse from '../assets/illustrations/walkthroug-1-responsive.png'
import choose from '../assets/illustrations/walkthroug-2-responsive.png'
import enjoy from '../assets/illustrations/walkthroug-3-responsive.png'
import browseIcon from '../assets/icons/walkthrough-1.svg'
import enjoyIcon from '../assets/icons/walkthrough-2.svg'
import chooseIcon from '../assets/icons/walkthrough-3.svg'

const data = [
    {
        id: 1,
        img: browse,
        icon: browseIcon,
        title: '1—browse',
        description: 'Browse our tech catalog with more than 20 top tech products'
    },
    {
        id: 2,
        img: choose,
        icon: chooseIcon,
        title: '2—choose',
        description: 'Exchange your hard-earned AeroPoints for a cool tech item'
    },
    {
        id: 3,
        img: enjoy,
        icon: enjoyIcon,
        title: '3—enjoy',
        description: 'All done We’ll take care of delivery of your tech item!'
    }
]

const Walkthrough = () => {

    const card = useRef(null)
    const isInView = useInView(card)

  return (
    <Container>
        <img src={hero} alt='aerolab hero' />

        <div>
            {
                data?.map( article => (
                    <Card 
                        key={article.id}
                        ref={card}
                        isInView={isInView}
                    >
                        <CardImg>
                            <img src={article.img} alt='aerolab hero browsing'  />
                        </CardImg>
                        <CardDescription>
                            <h2><span><img src={article.icon} alt='browse icon' /></span>{article.title}</h2>
                            <p>{article.description}</p>
                        </CardDescription>
                    </Card>
                ))
            }
            
        </div>
    </Container>
  )
}

const Container = styled.section`
    background: linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%); 
    position: relative;
    padding: 0px 20px 40px 20px;
    width: 100%;
    min-height: 100%;

    @media (min-width: 1400px) {
        margin-top: 90px;
        max-height: 540px;
        padding: 0px 120px;
    }

    > img {
        position: absolute;
        width: 540px;
        height: 540px;
        left: calc(50% - 540px/2);
        top: -120px;
        z-index: 10;

        @media (min-width: 1024px) {
            top: -320px;
        }

        @media (min-width: 1400px) {
            display: none;
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 370px;
        gap: 24px;

        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: center;
            padding-top: 120px;
        }

        @media (min-width: 1400px) {
            padding-top: 0px;
            min-height: 100%;
        }
    }
`

const Card = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 10;
    width: 335px;
    border: 12px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.10);
    border-radius: 32px;
    min-height: 460px;

    @media (min-width: 1400px) {
        border: 12px solid rgb(255, 255, 255);
        min-width: 480px;
        min-height: 660px;
        position: relative;
        top: -80px;
        transition: box-shadow 0.3s ease-in-out;
        transition: opacity 1s ease-in-out;
        opacity: ${({isInView}) => isInView ? '1' : '0'};
        
        &:nth-child(1) {
            transform: rotate(355deg);
            left: 120px;

            &:hover{
                transform: rotate(355deg) scale(1.01);
                box-shadow: 1px 1px 10px #7296EB;
            }
        }

        &:nth-child(2) {
            top: -120px;

            &:hover{
                transform: scale(1.01);
                box-shadow: 1px 1px 10px #7296EB;
            }
        }

        &:nth-child(3) {
            transform: rotate(5deg);
            left: -100px;

            &:hover{
                transform: rotate(5deg) scale(1.01);
                box-shadow: 1px 1px 10px #7296EB;
            }
        }
    }
`

const CardImg = styled.div`
    width: 100%;
    background: linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%);
    border-radius: 20px 20px 0px 0px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;

    
    > img {
        height: 280px;
        width: 280px;

        @media (min-width: 1400px) {
            height: 460px;
            width: 100%;
        }
    }
`

const CardDescription = styled.div`
    background-color:white ;
    border-radius: 0px 0px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1px 24px 14px;
    min-height: 160px;

    @media (min-width: 1400px) {
        width: 101%;
        min-height: 190px;
    }
    

    > h2 {
        font-weight: 900;
        font-size: 24px;
        line-height: 100%;
        text-transform: uppercase;
        background: ${({theme}) => theme.gradientBg};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-bottom: 0;
     
        @media (min-width: 1400px) {
         font-size: 32px;
         margin: 0;
        }

        > span {
            width: 36px;
            height: 36px;
            background: #E5F0FF;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (min-width: 1400px) {
                width: 48px;
                height: 48px;
            }

            > img {
                width: 26px;
                height: 26px;
             
                @media (min-width: 1400px) {
                    width: 32px;
                    height: 32px;
                }
            }
        }
    }

    > p {
        width: 100%;
        color: #677281;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;

        @media (min-width: 1400px) {
            font-size: 18px;
            width: 80%;
        }
    }
`

export default Walkthrough