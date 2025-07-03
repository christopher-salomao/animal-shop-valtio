import { proxy, subscribe } from "valtio";
import { type ProductProps } from "../../src/interfaces/productProps";
import toast from "react-hot-toast";

export interface CartProps extends ProductProps {
  amount: number;
  total: number;
}

export const cartState = proxy({
  cart: [] as CartProps[],
});

export function addToCart(newItem: ProductProps) {
  const itemIndex = cartState.cart.findIndex((item) => item.id === newItem.id);
  toast.success("Produto adicionado ao carrinho!", {
    style: {
      background: "#121212",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "500",
      borderRadius: "6px",
    }
  });

  if (itemIndex !== -1) {
    cartState.cart[itemIndex].amount += 1;
    cartState.cart[itemIndex].total =
      cartState.cart[itemIndex].amount * cartState.cart[itemIndex].price;
  } else {
    cartState.cart.push({ ...newItem, amount: 1, total: newItem.price });
  }

  saveCartToLocalStorage();
}

function saveCartToLocalStorage() {
  localStorage.setItem("@animalShop", JSON.stringify(cartState.cart));
}

const localCart = localStorage.getItem("@animalShop");
try {
  const parsedCart = JSON.parse(localCart || "[]");
  if (Array.isArray(parsedCart)) {
    cartState.cart = parsedCart;
  }
} catch {
  cartState.cart = [];
}

subscribe(cartState, () => {
  saveCartToLocalStorage();
});
