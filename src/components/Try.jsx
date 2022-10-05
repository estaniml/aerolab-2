import React, { useContext, useEffect } from 'react'
import { MyContext } from '../context/MyContext'
import styled from 'styled-components'

const Try = ({products}) => {
    const {data, pointsUpdate, setPointsUpdate, redeem, loader, setLoader} = useContext(MyContext)

    const redeemItem = async id => {
        setLoader(true)
        const resp = await redeem(id)
        setPointsUpdate(!pointsUpdate)
        setLoader(false)
    }


  return (
        <>
            <div>
                <p>{data.points}</p>
            </div>

            <div>
                <p></p>
                {
                    products.map( el => 
                        <SuccessBtn 
                            type='button'
                            key={el._id}
                            onClick={() => redeemItem(el._id)}
                            loader={loader}
                        >
                            { loader && el._id === id ? 
                                <p>Processing...</p> 
                                :
                                <>
                                    <p>Redeem for</p>
                                </>
                            }
                        </SuccessBtn>
                    )
                }
            </div>
        </>
  )
}

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
    opacity: ${({loader}) => loader && '0.7' };

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
    }
`


export default Try