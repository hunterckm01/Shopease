import { createContext, useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopContextProvider = ({children})=>{

    const [productData , setProductData] = useState([]);
    const [category , setCategory] = useState("");
    const [categories , setCategories] = useState([]);
    const [loading , setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    async function fetchProducts(category){
        setLoading(true);
        var baseUrl = "https://fakestoreapi.com/products";
        // console.warn(baseUrl);

        if(category){
            console.log("category fetch data called");
            console.log(`${baseUrl}/category/${category}`)
            baseUrl += `/category/${category}`
        }

        try{
            // console.warn(baseUrl)
            const response = await fetch(baseUrl);
            const result = await response.json();
            setProductData(result);
        }
        catch(e){
            console.warn("Error Found : " , e);
            alert("Error Found : Please Reload");
            setProductData([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProducts();
    },[location.pathname])


    async function fetchCategories(){
    setLoading(true);
    const url = "https://fakestoreapi.com/products/categories";
    try{
        const response = await fetch(url);
        const result = await response.json();
        // console.log(result);
        setCategories(result);
    }
    catch(e){
        console.alert("error happened : " , e);
        alert("Error Found : Please Reload");
    }
    setLoading(false);
   }

   useEffect(()=>{
    fetchCategories();
   },[])
    

    useEffect(()=>{
        window.scrollTo(0,0);
    },[navigate])


    const value = {
        productData , setProductData,
        categories , category ,
        setCategories , setCategory 
        , fetchProducts , fetchCategories,
        dispatch,
        loading, navigate
    }

    return <ShopContext.Provider value = {value}>
        {children}
        </ShopContext.Provider>
}