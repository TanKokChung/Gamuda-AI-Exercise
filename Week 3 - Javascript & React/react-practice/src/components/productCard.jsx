function ProductCard ({
    id,
    name = "Unknown Product",
    price = 0,
    image = "/placeholder.jpg",
    isOnSale = false,
}) {

    return (
        <div>
            <h1>The product ID is:{id}</h1>
            <p>The product name: {name}</p>
            <p>The price is: {price}</p>
            <img src={image} alt={name} />
            <p>Status: {isOnSale ? 'Active' : 'Inactive' }</p>
        </div>
    );
}

export default ProductCard