import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import {
  Container,
  Title,
  CartItem,
  ItemImage,
  ItemInfo,
  RemoveButton,
  Total,
  CheckoutButton,
  EmptyCart,
} from "../Styled/CartStyles";
import { apiurl } from "../services/api";

const CartPage = () => {
  const { cart, removeFromCart, getTotal, getItemCount } = useCart();
  const { token } = useToken();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!token) {
      alert("Debes iniciar sesión para continuar");
      navigate("/Login");
      return;
    }
    // Guardar carrito en localStorage (ya está guardado, pero aseguramos)
    localStorage.setItem("pendingPurchase", JSON.stringify(cart));
    navigate("/checkout");
  };

  if (getItemCount() === 0) {
    return (
      <EmptyCart>
        <h2>Tu carrito está vacío</h2>
        <button onClick={() => navigate("/open-gallery")}>Ver galería</button>
      </EmptyCart>
    );
  }

  return (
    <Container>
      <Title>TU CARRiTO ({getItemCount()} productos)</Title>

      {cart.map((item) => (
        <CartItem key={item.id}>
          <ItemImage src={apiurl+item.image} alt={item.title} />
          <ItemInfo>
            <h3>{item.title}</h3>
            <p>
              Opciones:{" "}
              {Object.entries(item.selectedOptions)
                .map(([cat, price]) => `${cat} (+${price.toFixed(2)})`)
                .join(", ")}
            </p>
            <p><strong>Total:</strong> ${item.totalPrice.toFixed(2)}</p>
          </ItemInfo>
          <RemoveButton onClick={() => removeFromCart(item.id)}>✕</RemoveButton>
        </CartItem>
      ))}

      <Total>Total: ${getTotal().toFixed(2)}</Total>
      <CheckoutButton onClick={handleCheckout}>Proceder al pago</CheckoutButton>
    </Container>
  );
};

export default CartPage;