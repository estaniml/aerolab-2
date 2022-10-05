import styled from 'styled-components'
import wave from '../assets/illustrations/wavepattern-aerocard.png'
import aerologo2 from '../assets/icons/aeropay-2.svg'
import AddPoints from './AddPoints'

const Balance = () => {
  return (
    <Card>
        <h3>Add balance</h3>
        
        <hr />

        <Aerocard>
            <div>
                <h2>Aerocard</h2>
                <img src={aerologo2}  alt='aerolab logo' />
            </div>
            <div>
                <p>John Kite</p>
                <p>07/23</p>
            </div>

            <Pattern>
                <img src={wave} />
                <img src={wave} />
                <img src={wave} />
                <img src={wave} />
                <img src={wave} />
            </Pattern>

        </Aerocard>
        
        <AddPoints />

    </Card>
  )
}

const Card = styled.div`
    z-index: 50;
    position: fixed;
    width: 90%;
    right: 20px;
    background: #FFFFFF;
    border: 1px solid #DAE4F2;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    padding: 24px; 

    @media (min-width: 1024px){
        width: 310px;
        top: 70px;
        right: 111px;
    }

    > h3 {
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        margin: 0;
    }

    > hr {
        border: 1px solid #DAE4F2;
        position: absolute;
        width: 100%;
        left: 0;
    }
`

const Aerocard = styled.div`
    position: relative; 
    margin-top: 32px;
    background-color: #111827;
    width: 80%;
    height: 150px;
    color: #fff; 
    border-radius: 8px;
    overflow: hidden;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1024px){
        width: 100%;
    }

    > div {
        display: flex;
        justify-content: space-between;

        > h2, p {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            line-height: 27px;
        }

        > p {
            font-size: 14px;
        }
    }
`

const Pattern = styled.div`
    position: absolute;
    width: inherit;
    bottom: -10px;
    left: -10px;
`



export default Balance