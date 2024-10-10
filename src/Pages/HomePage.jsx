import React,{useState,useEffect,useContext} from 'react'
import {Context} from  '../Context.jsx'


const HomePage = () => {
    //const [] = useState([])
    const {ProductsData,setProductsData,searchText,} = useContext(Context)
    const [categoryOption,setCategoryOpition] = useState('All')

    const onChangeDropdown = (e) =>{
        setCategoryOpition(e.target.value)
        
    }
    
    useEffect(() => {
        console.log(categoryOption);
    }, [categoryOption]);
    

    useEffect(()=>{
        const fetchedData = async() =>{
             const response = await fetch('https://fakestoreapiserver.reactbd.com/products')
             const result = await response.json()
             console.log(result)
             setProductsData(result)
        }
        fetchedData()
    },[])

    useEffect(()=>{
        const getfilteredProducts = ProductsData.filter((eachItem)=>{
            return eachItem.title.toLowerCase().includes(searchText.toLowerCase())
           
        })
        setProductsData(getfilteredProducts)
        
    },[setProductsData,searchText])

    useEffect(()=>{
        if(categoryOption==="All"){
            setProductsData(ProductsData)
        }else{
            const categoryFilteredProducts = ProductsData.filter((eachItem)=>{
                return eachItem.category===categoryOption.toLocaleLowerCase()
            })
            setProductsData(categoryFilteredProducts)
            //console.log("categoryFilteredProducts :",categoryFilteredProducts)
        }
    },[categoryOption,ProductsData])

  return (
    <>
    <div style={{position:'absolute',right:5,margin:10}}>
    <select style={{padding:5,borderRadius:5}} onChange={onChangeDropdown}>
        <option value="All">All</option>
        <option value="Women">Women</option>
        <option value="Men">Men</option>
    </select>
    </div>
    
    <div className='Cardcontainer'>
        {
            ProductsData.map((eachItem,index)=>(
                <div className="card" key={index}>
                    <img src={eachItem.image} alt=""/>
                    <div className='cardContent'>
                    <h4>{eachItem.title}</h4>
                    <p>{eachItem.description}</p>
                    </div>

                </div>
                
            ))
            }
    </div>
    </>
  )
}

export default HomePage