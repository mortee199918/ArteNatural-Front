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
  PaymentMethod,
  PaymentOption,
  Button,
  BackLink,
  ErrorMessage,
} from "../Styled/CheckoutStyles";
import { apiurl } from "../services/api";

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
    paymentMethod: "card",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayCart, setDisplayCart] = useState([]);
  const [displayTotal, setDisplayTotal] = useState(0);

  useEffect(() => {
    if (!token) {
      alert("Debes iniciar sesión para continuar con la compra");
      navigate("/Login");
      return;
    }

    // Caso 1: Compra directa (pendingPurchase)
    const pending = localStorage.getItem("pendingPurchase");
    if (pending) {
      try {
        const data = JSON.parse(pending);
        console.log(data)
        const fakeItem = {
          id: Date.now(),
          productId: data.productId,
          title: "Producto seleccionado",
          image: "", // opcional: podrías cargarlo con una llamada
          basePrice: data.totalPrice - Object.values(data.selectedOptions).reduce((sum, p) => sum + p, 0),
          selectedOptions: data.selectedOptions,
          totalPrice: data.totalPrice,
        };
        setDisplayCart([fakeItem]);
        setDisplayTotal(data.totalPrice);
        return;
      } catch (e) {
        console.error("Error al cargar compra directa", e);
      }
    }

    // Caso 2: Carrito normal
    if (cart.length === 0) {
      alert("No hay productos para comprar");
      navigate("/open-gallery");
      return;
    }

    setDisplayCart(cart);
    setDisplayTotal(getTotal());
  }, [token, cart, getTotal, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmPurchase = async () => {
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


    console.log(1111111111, formData.paymentMethod)
    try {
      const response = await fetch(apiurl + "/purchases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: displayCart.map(item => ({
            productId: item.productId,
            basePrice: item.basePrice,
            totalPrice: item.totalPrice,
            selectedOptions: item.selectedOptions,
            customMessage: item.customMessage || "", // ✅ Enviar al backend
          })),
          total: displayTotal,
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
        localStorage.removeItem("pendingPurchase"); // Limpia compra directa
        alert("¡Compra realizada con éxito! 🎉");
        navigate("/open-gallery");
      } else {
        const errorText = await response.text();
        throw new Error(errorText || "Error al procesar la compra");
      }
    } catch (err) {
      console.error("Error en la compra:", err);
      setError("Error al procesar la compra. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (displayCart.length === 0) {
    return <div style={{ padding: "2rem" }}>Cargando...</div>;
  }

  return (
    <CheckoutContainer>
      <Title>Finalizar Compra</Title>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {/* Resumen del pedido */}
        <Section style={{ flex: 2, minWidth: "300px" }}>
          <SectionTitle>Resumen del pedido</SectionTitle>
          <CartSummary>
            {displayCart.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={apiurl + item.image} alt={item.title} />
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
          <TotalAmount>Total: {displayTotal.toFixed(2)}€</TotalAmount>
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

      <BackLink onClick={() => navigate(-1)}>&larr; Volver</BackLink>
    </CheckoutContainer>
  );
};

export default CheckoutPage;