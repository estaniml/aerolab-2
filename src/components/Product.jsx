import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import styled from 'styled-components'
import aeropay from '../assets/icons/aeropay-3.svg'
import aeropay2 from '../assets/icons/aeropay-2.svg'

const Product = ({product}) => {

    const {data, pointsUpdate, setPointsUpdate, redeem, loader, setLoader} = useContext(MyContext)
 
    

    const redeemItem = async (id, name) => {
        setLoader({
            active: true,
            id: id
        })
        await redeem(id, name)
        setPointsUpdate(!pointsUpdate)
        setLoader({
            active: false,
            id: null
        })
    }

    const enoughPoints = data.points >= product.cost;

  return (
    <Container>
        <ProductCard>
            <div>
                <img src={product.img.url} alt={`get ${product.name} with Aerolab`} />
            </div>

            <hr />
            <h2>{product.name}</h2>
            
            <p>{product.category}</p>
        </ProductCard>

        {
            enoughPoints ?
                    loader.active && loader.id === product._id ? 
                    <LoadingBtn type='button'>
                        <p>Processing...</p> 
                    </LoadingBtn>
                    :
                    <SuccessBtn 
                        type='button'
                        onClick={() => redeemItem(product._id, product.name)}
                        >
                        <p>Redeem for</p>
                        <span> <img src={aeropay} alt='aerolab icon' /> {product.cost}</span> 
                    </SuccessBtn>
            :
                <DisabledBtn>
                    <p>You need</p>
                    <span> 
                        <img src={aeropay2} alt='aerolab icon' /> 
                        {product.cost - data.points}
                    </span>
                </DisabledBtn>
        }
        
        
    </Container>
  )
}

const Container = styled.div`
    margin: 30px 0px;
`

const ProductCard = styled.div`
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

    > h2 {
        margin: 0px 24px;
        font-size: 18px;
        font-weight: 600;
        line-height: 150%;
    }

    > p {
        margin: 0px 24px 12px;
        font-weight: 600;
        font-size: 12px;
        line-height: 150%;
        color: #606a79;
        text-transform: uppercase;
    }
`




const SuccessBtn = styled.button`
    margin-top: 16px;
    width: 100%;
    border: none;
    display: flex;
    justify-content :center ;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;
    background: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    color: #fff; 
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    cursor: pointer;

    &:hover {
        background: linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%);
    }

    > p {
        margin: 0;
    }

    > span {
        display: flex;
        justify-content :center ;
        align-items: center;
        gap: 8px;
        
        > img {
            width: 20px;
            height: 20px;

            @media (min-width: 1024px){
                width: 24px;
                height: 24px;
            }
        }
    }

`

const DisabledBtn = styled(SuccessBtn)`
    background: #E6EDF7;
    color: #7C899C;
    cursor: default;

    &:hover {
        background: #E6EDF7;
    }

    > span > img {
        opacity: 0.5;
    }
`

const LoadingBtn = styled(SuccessBtn)`
    background: linear-gradient(102.47deg, rgba(23, 111, 235, 0.7) -5.34%, rgba(255, 128, 255, 0.7) 106.58%);
`

export default Product