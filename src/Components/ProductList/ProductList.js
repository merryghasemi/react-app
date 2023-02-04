


const ProductList = ({products}) =>{

return(

    <div>

{products.map((item)=>{

return <p key={item.id}>{item.title}</p>

})}

    </div>
)
    
}

export default ProductList;