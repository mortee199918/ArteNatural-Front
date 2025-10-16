// src/pages/CheckoutPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";

const CheckoutPage = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const [purchaseData, setPurchaseData] = useState(null);

  useEffect(() => {
    if (!token) {
      alert("Debes iniciar sesión para continuar con la compra");
      navigate("/Login");
      return;
    }

    const data = localStorage.getItem("pendingPurchase");
    if (!data) {
      navigate("/open-gallery");
      return;
    }
    setPurchaseData(JSON.parse(data));
  }, [token, navigate]);

  const handleConfirmPurchase = async () => {
    try {
      const response = await fetch("http://localhost:8082/purchases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(purchaseData)
      });

      if (response.ok) {
        alert("¡Compra realizada con éxito!");
        localStorage.removeItem("pendingPurchase");
        navigate("/open-gallery");
      } else {
        alert("Error al procesar la compra");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión");
    }
  };

  if (!purchaseData) return <div>Cargando...</div>;

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Confirmar Compra</h2>
      <p><strong>Producto ID:</strong> {purchaseData.productId}</p>
      <p><strong>Total:</strong> ${purchaseData.totalPrice.toFixed(2)}</p>

      <h3>Método de pago</h3>
      <div>
        <label><input type="radio" name="payment" /> Tarjeta de crédito</label><br />
        <label><input type="radio" name="payment" /> PayPal</label><br />
        <label><input type="radio" name="payment" /> Bizum</label>
      </div>

      <button onClick={() => navigate(-1)} style={{ marginTop: "1rem" }}>
        ← Volver
      </button>
      <button
        onClick={handleConfirmPurchase}
        style={{ marginLeft: "1rem", backgroundColor: "#28a745", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "4px" }}
      >
        Confirmar Compra
      </button>
    </div>
  );
};

export default CheckoutPage;