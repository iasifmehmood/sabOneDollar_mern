// import { useUIContext } from "../context/ui";

// function useCart(product) {
//   const { cart, setCart } = useUIContext();

//   const addToCart = () => {
//     cart.findIndex(c => c.id === product.id) >= 0
//       ? setCart(cart.filter(c => c.id !== product.id))
//       : setCart(c => [...c, product]);
//   };

//   const addToCartText =
//     cart.findIndex(c => c.id === product.id) >= 0
//       ? "Remove from Cart"
//       : "Add to cart";

//   const removeFromCart = () => {
//     cart.findIndex(c => c.id === product.id) <= 0
//       ? setCart(cart.filter(c => c.id === product.id))
//       : setCart(c => [...c, product]);
//   };

//   const removeToCartText = cart.findIndex(c => c.id === product.id)
//     ? "Remove from Cart"
//     : "Add to cart";

//   return { addToCart, addToCartText, removeFromCart, removeToCartText };
// }

// export default useCart;

// // import * as actionTypes from "../redux/constants/cartConstants";
// // import axios from "axios";
// // import { useUIContext } from "../context/ui";
// // import { useSelector, useDispatch } from "react-redux";
// // import { useEffect } from "react";
// // import { useParams } from "react-router-dom";

// // function useCart() {
// //   const { cart, setCart } = useUIContext();

// //   return { addToCart, addToCartText, removeFromCart };
// // }

// // export default useCart;
