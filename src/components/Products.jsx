import { lazy, Suspense, useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/MyContext'
import styled from 'styled-components'
import Notification from './Notification'
import Pages from './Pages'
import SortBy from './SortBy'
import LoadingCard from './loaders/LoadingCard'
const Product = lazy(() => import('./Product'))


const Products = ({}) => {

    const [products, setProducts] = useState([])
    const [recents, setRecents] = useState([])
    const [category, setCategory] = useState('');
    const [filteredItems, setFilteredItems] = useState([...products])
    const [currentPage, setCurrentPage] = useState(0)
    const [page, setPage] = useState(1)
    const [option, setOption] = useState([])

    const { 
        productsList, 
        notifications,
        removeNotification
    } = useContext(MyContext)

    //Getting the products
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                contentType: 'application/json',
                accept: 'application/json',
                authorization: `${import.meta.env.VITE_APP_AEROLAB}`
            }
        }

        const getProducts = async () => {
            const response = await fetch('https://coding-challenge-api.aerolab.co/products', options);
            const data = await response.json();
            setRecents(data)
            setProducts(data)
            setFilteredItems(data)
        }
        getProducts();

    }, [])

    // Filtering the products
    useEffect(() => {

        const filterItems = () => {

            if( category !== 'All Products' ){

                const showCategory = products.filter( product => product.category === category )
                setFilteredItems(showCategory)
                setOption('RECENT')
                setCurrentPage(0)
                setPage(1)

            } else {
                setFilteredItems(products)
            }
        }
        filterItems()
    }, [category])

    

    // Creating the pagination
    const itemsPerPage = () => {
        if(screen.width > 1024){  
            if(filteredItems.length >= 16){
                return 16
            } else {
                return filteredItems.length
            }  
        } else {
            if(filteredItems.length >= 8){
                return 8
            } else {
                return filteredItems.length
            } 
        }
    }
    
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage())

    
    const pagination = () => {
        const updatedProducts = [...filteredItems].slice(currentPage, currentPage + itemsPerPage());
        return updatedProducts
    }
    

    // Next page
    const nextPage = () => {
        const next = page + 1;
        setCurrentPage(currentPage + itemsPerPage())
        setPage(next)
        productsList.current.scrollIntoView()
    }

    // Previous page
    const prevPage = () => {
        if(currentPage > 0) {
            const prev = page - 1
            setCurrentPage(currentPage - itemsPerPage())
            setPage(prev)
            productsList.current.scrollIntoView()
        }
    }

  return (
    <Container ref={productsList}>
        <h2><span>Tech</span> products</h2>

        <FilterBar>
            <div>
                <h5>Filter by:</h5>
                <select onChange={e => setCategory(e.target.value)}>
                    <option>All Products</option>
                    <option>Gaming</option>
                    <option>Audio</option>
                    <option>Smart Home</option>
                    <option>Monitors &amp; TV</option>
                    <option>Phones</option>
                </select>
            </div>

            <div>
                <h5>Sort by:</h5>
                <SortBy 
                    filteredItems={filteredItems}
                    setFilteredItems={setFilteredItems}
                    recents={recents}
                    option={option}
                    setOption={setOption}
                    setCurrentPage={setCurrentPage}
                    setPage={setPage}
                    products={products}
                />
            </div>
            
            <div>
                <Pages 
                    pagination={pagination} 
                    prevPage={prevPage}
                    nextPage={nextPage}
                    totalPages={totalPages}
                    page={page}
                />
            </div>
        
        </FilterBar>

        
        <ProductsGrid>
            {   pagination().map( product => (
                    <Suspense fallback={(<LoadingCard />)} key={product._id}>
                        <Product 
                            key={product._id} 
                            product={product} 
                        />
                    </Suspense>
                ))
            }
        </ProductsGrid>

        <Paginator>
            <div>
                <Pages 
                    pagination={pagination}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    totalPages={totalPages}
                    page={page}
                />
            </div>
            <p>
                <span>{page * itemsPerPage()} of {filteredItems.length}</span> products
            </p>
        </Paginator>

        <Notifications>
        {
            notifications?.map( notification => 
                <Notification 
                    key={notification.productName}
                    notification={notification}
                    removeNotification={removeNotification}
                />
                )
            }
        </Notifications>
    </Container>
  )
}

const Container = styled.section`
    margin: 100px 20px 30px 20px;
    position: relative;
    
    @media (min-width: 1400px){
        margin: 200px 120px 30px 120px;
    }

    > h2  {
        font-weight: 900;
        font-size: 32px;
        line-height: 80%;
        text-transform: uppercase;

        @media (min-width: 1024px){
            font-size: 32px;
        }

        @media (min-width: 1400px){
            font-size: 48px;
        }

        > span {
            background: ${({theme}) => theme.gradientBg};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }

`

const FilterBar = styled.div`
    color: #677281;
    
    @media (min-width: 1024px){
        font-size: 18px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1400px){
        font-size: 18px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 110px;
    }

    > div {
        height: 60px;

        &:nth-child(3){
            display: none;
        }

        > h5{
            display: none;

            @media (min-width: 1400px){
                display: flex;
                min-width: 70px;
            }
        }

        @media (min-width: 1024px){

            &:nth-child(2){
                order: 3;
            }

            &:nth-child(3){
                display: block;
                justify-self: end;
            }
        }

        @media (min-width: 1400px){
            display: flex; 
            align-items: center;
            gap: 14px;

            &:nth-child(2){
                margin-bottom: 0px;
                order: 3;
            }

            &:nth-child(3){
                display: block;
                justify-self: end;
                order: 3;
            }

        }
        
        > select {
            display: block;
            width: 100%;
            border: none;
            border: 1px solid #DAE4F2;
            border-radius: 16px;
            padding: 16px;
            font-weight: 600;
            font-size: 16px;
            line-height: 150%;
            color: #677281;
            max-height: 70px;
    
            @media (min-width: 1024px) {
                max-width: 260px;
                font-size: 18px;
            }
        }
    }


`

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;
    width: 100%;
    min-height: 100vh;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
    }

    @media (min-width: 1400px){
        margin: 100px 120px 30px 120px;
        grid-template-columns: repeat(4, 1fr);
        margin: 0;
    }
`

const Paginator = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    
    
    @media (min-width: 1600px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }
    
    > div {
        @media (min-width: 1600px){
            order: 2;
            margin-left: auto;
        }
    }

    > p {
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: #7C899C;

        @media (min-width: 1600px){
            text-align: center;
            grid-column: 2/3;
        }

        span {
            background: ${({theme}) => theme.gradientBg};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }
`

const Notifications = styled.div`
    position: fixed;
    max-width: 90%;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    gap:1rem;
    z-index: 150;
`
export default Products