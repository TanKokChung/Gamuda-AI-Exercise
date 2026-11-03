// import PersonalInfo from "./components/PersonalInfo";
// import "./components/custom.css";
// import UserCard from "./components/UserCard";

// function pracSample() {
//   const number = "10";
//   // const users = [
//   //   {
//   //     id: 1,
//   //     name: "John Doe",
//   //     email: "john@example.com",
//   //     role: "Developer",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Jane Smith",
//   //     email: "jane@example.com",
//   //     role: "Designer",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Alex Johnson",
//   //     email: "alex@example.com",
//   //     role: "Product Manager",
//   //   },
//   // ];

//   return (
//     <div>
//       <PersonalInfo />
//       <h1>Wah! Who have eaten my {number} fishes!</h1>

//       <div className="card">
//         <div className="container">
//           <h1>To test custom css see below</h1>
//           <p>This is a simple template using custom CSS.</p>
//         </div>
//         <button className="btn-primary">Click Me!</button>
//       </div>
//       {/* <div className="app-container">
//         <UserCard users={users} />
//       </div> */}

//       <div>
//         <UserCard/>

//         <UserCard name="ELI" age={22} isActive = {true}/>
//       </div>
//     </div>
//   );
// }

// export default pracSample;

import ProductCard from "./components/productCard";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "KitKat",
      price: 12.5,
      image:
        "https://foodpanda.dhmedia.io/image/darkstores/nv-global-catalog/my/b1850130-0e10-402a-9bae-218c487a2d57.jpg?height=480",
      isOnSale: true,
    },
    {
      id: 2,
      name: "Orange",
      price: 2.5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNoYvMWWjt6tojgEiHnw9gz7D8X2r-G5wnc3ornZ8SaG7gk1cFs4k2S0&s=10",
      isOnSale: false,
    },
    {
      id: 3,
      name: "Cereal",
      price: 11.8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutAUBp8SUvWtN6nA14yXg5IVY8Qf8yQsdNjN-JjJobg&s",
      isOnSale: true,
    },
  ];
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard 
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        isOnSale={product.isOnSale}/>
      ))}
    </div>
  );
}

export default ProductList;
