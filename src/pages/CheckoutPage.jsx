// src/pages/CheckoutPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import { useCart } from "./CartContext";
import {
  CheckoutContainer,
  Title,
  Section,
  SectionTitle,
  CartSummary,
  CartItem,
  ItemImage,
  ItemInfo,
  TotalAmount,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  PaymentMethod,
  PaymentOption,
  Button,
  BackLink,
  ErrorMessage,
} from "../Styled/CheckoutStyles";

const CheckoutPage = () => {
  const { cart, getTotal, clearCart } = useCart();
  const { token } = useToken();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "card", // 'card', 'paypal', 'bizum'
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      alert("Debes iniciar sesión para continuar con la compra");
      navigate("/Login");
      return;
    }

    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [token, cart, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmPurchase = async () => {
    // Validación básica
    if (!formData.name || !formData.email || !formData.address) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Por favor, introduce un email válido.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    console.log("Token enviado:", token);

    try {
      // Aquí iría la llamada a tu backend para crear la compra
      const response = await fetch("http://localhost:8082/purchases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: cart,
          total: getTotal(),
          customer: {
            name: formData.name,
            email: formData.email,
            address: `${formData.address}, ${formData.city}, ${formData.postalCode}`,
          },
          paymentMethod: formData.paymentMethod,
        }),
      });

      if (response.ok) {
        clearCart();
        alert("¡Compra realizada con éxito! 🎉");
        navigate("/open-gallery");
      } else {
        const errorData = await response.text();
        throw new Error(errorData || "Error al procesar la compra");
      }
    } catch (err) {
      console.error(err);
      setError("Error al procesar la compra. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) return null;

  return (
    <CheckoutContainer>
      <Title>Finalizar Compra</Title>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {/* Resumen del carrito */}
        <Section style={{ flex: 2, minWidth: "300px" }}>
          <SectionTitle>Resumen del pedido</SectionTitle>
          <CartSummary>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={`http://localhost:8082${item.image}`} alt={item.title} />
                <ItemInfo>
                  <h4>{item.title}</h4>
                  <p>
                    Opciones:{" "}
                    {Object.entries(item.selectedOptions)
                      .map(([cat, price]) => `${cat} (+${price.toFixed(2)}€)`)
                      .join(", ")}
                  </p>
                  <p><strong>{item.totalPrice.toFixed(2)}€</strong></p>
                </ItemInfo>
              </CartItem>
            ))}
          </CartSummary>
          <TotalAmount>Total: {getTotal().toFixed(2)}€</TotalAmount>
        </Section>

        {/* Formulario y pago */}
        <Section style={{ flex: 1, minWidth: "300px" }}>
          <SectionTitle>Datos de envío</SectionTitle>
          <Form>
            <FormGroup>
              <Label>Nombre completo *</Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
            </FormGroup>

            <FormGroup>
              <Label>Email *</Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
              />
            </FormGroup>

            <FormGroup>
              <Label>Dirección *</Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Calle, número"
              />
            </FormGroup>

            <div style={{ display: "flex", gap: "1rem" }}>
              <FormGroup style={{ flex: 1 }}>
                <Label>Ciudad</Label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ciudad"
                />
              </FormGroup>
              <FormGroup style={{ flex: 1 }}>
                <Label>Código postal</Label>
                <Input
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="12345"
                />
              </FormGroup>
            </div>

            <SectionTitle style={{ marginTop: "1.5rem" }}>Método de pago</SectionTitle>
            <PaymentMethod>
              <PaymentOption
                active={formData.paymentMethod === "card"}
                onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: "card" }))}
              >
                💳 Tarjeta de crédito/débito
              </PaymentOption>
              <PaymentOption
                active={formData.paymentMethod === "paypal"}
                onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: "paypal" }))}
              >
                🅿️ PayPal
              </PaymentOption>
              <PaymentOption
                active={formData.paymentMethod === "bizum"}
                onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: "bizum" }))}
              >
                💬 Bizum
              </PaymentOption>
            </PaymentMethod>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Button
              onClick={handleConfirmPurchase}
              disabled={isSubmitting}
              style={{ marginTop: "1.5rem" }}
            >
              {isSubmitting ? "Procesando..." : "Confirmar compra"}
            </Button>
          </Form>
        </Section>
      </div>

      <BackLink onClick={() => navigate("/cart")}>&larr; Volver al carrito</BackLink>
    </CheckoutContainer>
  );
};

export default CheckoutPage;