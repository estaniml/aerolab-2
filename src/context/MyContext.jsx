import { createContext, useEffect, useRef, useState } from "react";

export const MyContext = createContext();


export const MyProvider = ({ children }) => {

        const [data, setData] = useState({})
        const [points, setPoints] = useState(null)
        const [pointsUpdate, setPointsUpdate] = useState(false)
        const [loading, setLoading] = useState(false)
        const [status, setStatus] = useState(false)
        const [loader, setLoader] = useState({
            active: false,
            id: null,
        })
        const [notifications, setNotifications] = useState([])

        const productsList = useRef(null)
     
        // Gettign user's data
        useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                contentType: 'application/json',
                accept: 'application/json',
                authorization: `${import.meta.env.VITE_APP_AEROLAB}`
            }
        }

        const getUser = async () => {
            setLoading(true);
            const response = await fetch('https://coding-challenge-api.aerolab.co/user/me', options);
            const res = await response.json();
            setData(res);
            setLoading(false);
        }
        getUser();
        }, [points, pointsUpdate])

  
        // Adding user's points
        useEffect(() => {

            if( points !== null ) {

                setLoader(true)
                const url = 'https://coding-challenge-api.aerolab.co/user/points'

                fetch(url, {
                    method: 'POST',
                    headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': `${import.meta.env.VITE_APP_AEROLAB}`
                    },
                    body: JSON.stringify({ 'amount': parseInt(`${points}`) })
            })
                .then( res => res.json())
                .catch( err => {
                    console.error('Error:', err) 
                })
                .then( response => {
                    console.log('Success:', response)
                })
            
            }   
            setLoader(false)
            setPoints(null)
    
        }, [points])

        //Reediming items
        const redeem = async (id, name) => {

            const url = 'https://coding-challenge-api.aerolab.co/redeem';

            const response = await fetch(url, {
                 method: 'POST',
                 headers: {
                         'Content-Type': 'application/json',
                         'Accept': 'application/json',
                         'Authorization': `${import.meta.env.VITE_APP_AEROLAB}`
                    },
                 body: JSON.stringify({ 'productId':  `${id}` })
            })
                .then( res => res.json())
                .catch( err => {
                    console.error('Error:', err) 
                    setNotifications([...notifications,
                        {
                            status: 'error',
                            productName: name
                        }
                    ])
                })
                .then( response => {
                    console.log('Success:', response)
                    setNotifications([...notifications,
                        {
                            status: 'success',
                            productName: name
                        }
                    ])
                })
            return response
        }
        
        

        // Removing an item from the notification's list
        const removeNotification = name => {
            setNotifications( notifications.filter( noti => noti.productName !== name ))
        }

    return (
        <MyContext.Provider value={{
            data,
            setPoints,
            loading,
            pointsUpdate,
            setPointsUpdate,
            productsList,
            loader,
            setLoader,
            setStatus,
            status,
            redeem,
            notifications,
            setNotifications,
            removeNotification
        }}>
            { children }
        </MyContext.Provider>
    );
}
