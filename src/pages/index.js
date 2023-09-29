import Image from "next/image"
import CartPage from "./cartPage/CartPage"

export default function Home() {
  return (
    <div className="bg-gold-g w-full h-full">
      {/* i exported the cart page to the home page to test the code  */}
      {/* <h1>hi</h1> */}
      {/* <CartPage /> */}
    </div>
  )
}

// import React, { useState, useEffect } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../config/FirebaseConfig";

// const Home = () => {
//   const [products, setProducts] = useState([]); // Initialize products as an empty array
//   const productCollectionRef = collection(db, "products");

//   const getAllProducts = async () => {
//     try {
//       // Fetch data from your API
//       const response = await fetch("https://fakestoreapi.com/products/");
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products from API:", error);
//     }
//   };

//   const addProductToFirestore = async (productName, productPrice) => {
//     try {
//       // Add the product to Firestore with a unique identifier (e.g., product id)
//       await addDoc(productCollectionRef, {
//         name: productName,
//         price: productPrice,
//         // Add other product properties as needed
//       });
//       console.log("Product added to Firestore");
//     } catch (error) {
//       console.error("Error adding product to Firestore:", error);
//     }
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   return (
//     <div>
//       <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-md">
//           <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//             Add Product
//           </h2>
//         </div>

//         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//           <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//             <form
//               className="space-y-6"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 addProductToFirestore("Product Name", 10.99); // Replace with actual product data
//               }}
//             >
//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Add Product to Firestore
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <h1>Products</h1>
//       <ul className="divide-y divide-gray-200">
//         {products.map((product) => (
//           <li
//             key={product.id}
//             className="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
//           >
//             <div className="flex justify-between space-x-3">
//               <div className="min-w-0 flex-1">
//                 <a href="#" className="block focus:outline-none">
//                   <span className="absolute inset-0" aria-hidden="true" />
//                   <p className="truncate text-sm font-medium text-gray-900">
//                     {product.title}
//                   </p>
//                   <p className="truncate text-sm text-gray-600">
//                     Price: ${product.price.toFixed(2)}
//                   </p>
//                   {/* Add other product properties here */}
//                 </a>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
