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
    position: fixed;
    right: 20px;
    z-index: 50;
    width: 90%;
    padding: 24px; 
    background: #FFFFFF;
    border: 1px solid #DAE4F2;
    border-radius: 16px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);

    @media (min-width: 1024px){
        top: 70px;
        right: 111px;
        width: 310px;
    }

    > h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        line-height: 150%;
    }

    > hr {
        position: absolute;
        left: 0;
        width: 100%;
        border: 1px solid #DAE4F2;
    }
`

const Aerocard = styled.div`
    overflow: hidden;
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: 150px;
    margin-top: 32px;
    padding: 16px;
    color: #fff; 
    background-color: #111827;
    border-radius: 8px;

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
    left: -10px;
    bottom: -10px;
    width: inherit;
`



export default Balance