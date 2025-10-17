// src/pages/ProductDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import { getProductById } from "../services/product";
import { useCart } from "./CartContext";
import {
  Container,
  BackButton,
  Content,
  ProductImage,
  ProductInfo,
  Title,
  Description,
  BasePrice,
  OptionGroup,
  OptionLabel,
  OptionSelect,
  TotalPrice,
  BuyButton,
} from "../Styled/ProductDetailStyles";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useToken();
  const [product, setProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        if (!data) {
          alert("Producto no encontrado");
          navigate("/open-gallery");
          return;
        }
        setProduct(data);
        setTotalPrice(data.price);
      })
      .catch((err) => {
        console.error("Error al cargar el producto:", err);
        alert("No se pudo cargar el producto");
        navigate("/open-gallery");
      });
  }, [id, navigate]);

  useEffect(() => {
    if (!product) return;
    let total = product.price;
    Object.values(selectedOptions).forEach((price) => {
      total += price;
    });
    setTotalPrice(total);
  }, [selectedOptions, product]);

  const handleOptionChange = (category, price) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: price,
    }));
  };

  const handleBuy = () => {
    if (!token) {
      alert("Debes iniciar sesión para realizar una compra");
      navigate("/Login");
      return;
    }

    const purchaseData = {
      productId: product.id,
      selectedOptions,
      totalPrice,
    };
    localStorage.setItem("pendingPurchase", JSON.stringify(purchaseData));
    navigate("/checkout");
  };

  if (!product) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Cargando producto...</div>;
  }

  const optionsByCategory = {};
  if (product.options) {
    product.options.forEach((opt) => {
      if (!optionsByCategory[opt.category]) {
        optionsByCategory[opt.category] = [];
      }
      optionsByCategory[opt.category].push(opt);
    });
  }

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>← Volver</BackButton>

      <Content>
        <ProductImage
          src={`http://localhost:8082${product.image}`}
          alt={product.title}
        />

        <ProductInfo>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <BasePrice>
            <strong>Precio base:</strong> {product.price.toFixed(2)}€
          </BasePrice>

          {Object.entries(optionsByCategory).map(([category, opts]) => (
            <OptionGroup key={category}>
              <OptionLabel>{category}:</OptionLabel>
              <OptionSelect
                onChange={(e) => {
                  const selectedOpt = opts.find((o) => o.option === e.target.value);
                  handleOptionChange(category, selectedOpt?.price || 0);
                }}
              >
                <option value="">Selecciona una opción</option>
                {opts.map((opt) => (
                  <option key={opt.id} value={opt.option}>
                    {opt.option} (+{opt.price.toFixed(2)}€)
                  </option>
                ))}
              </OptionSelect>
            </OptionGroup>
          ))}

          <TotalPrice>Total: {totalPrice.toFixed(2)}€</TotalPrice>
          <BuyButton onClick={handleBuy}>Comprar</BuyButton>
          <BuyButton
            style={{ backgroundColor: "#28a745" }}
            onClick={() => {
              addToCart(product, selectedOptions, totalPrice);
              alert("Producto añadido al carrito");
            }}
          >
            Añadir a la cesta
          </BuyButton>
        </ProductInfo>
      </Content>
    </Container>
  );
};

export default ProductDetail;