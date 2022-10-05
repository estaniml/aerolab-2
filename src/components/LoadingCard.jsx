import styled, { keyframes } from 'styled-components'
import aerologo from '../assets/icons/aerolab-logo-2.svg'


const LoadingCard = () => {
  return (
    <Card>
        <div>
            <LoaderImg src={aerologo} />
        </div>

        <hr />
        
        <LoaderText></LoaderText>
        <LoaderText></LoaderText>
    </Card>
  )
}

const Card = styled.div`
    width: 100%;
    border: 1px solid #DAE4F2;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap:8px;

    > div {
        min-height: 330px;
        display: flex;
        align-items: center;
        justify-content: center;

        > img {
            width: 280px;
            height: 204px;
        }

    }
    > hr {
        border-top: 1px solid #DAE4F2;
        width: 100%;
    }

    > h4 {
        margin: 0px 24px;
        font-weight: 600;
        line-height: 150%;
    }

    > p {
        margin: 0px 24px 12px;
        font-weight: 600;
        font-size: 12px;
        line-height: 150%;
        color: #7C899C;
        text-transform: uppercase;
    }
`
const pulse = keyframes`
    0% {
		transform: scale(0.95);
        filter: grayscale(0.9) brightness(0.9);
	}

	70% {
		transform: scale(1);
        filter: grayscale(0.9) brightness(0.1);
	}

	100% {
		transform: scale(0.95);
        filter: grayscale(0.9) brightness(0.9);
	}
`


const LoaderImg = styled.img`
    opacity: 0.1;
	transform: scale(1);
	animation: ${pulse} 2s infinite;
`

const LoaderText = styled.span`
    background: #FF8800;
    opacity: 0.1;
	transform: scale(1);
    border-radius: 12px;
    margin: 0px 24px 12px;
    width: 208px;
    height: 16px;
	animation: ${pulse} 2s infinite;

    &:first-of-type + span {
        width: 104px;
        height: 8px;
        margin: 0px 24px 12px;
    }
`

export default LoadingCard