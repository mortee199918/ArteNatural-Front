import useAuth from "../hooks/useAuth";

const AddWork = () => {
  const { userRole, username } = useAuth();
  const navigate = useNavigate();

  // Protección de ruta
  if (userRole !== "artist") {
    return (
      <div className="add-work-container">
        <p>No tienes permiso para acceder a esta página.</p>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const artworkData = {
      title,
      description,
      price: parseFloat(price),
      imageUrl: "...",
      artistUsername: username, // ← Viene del hook
    };
    // ... enviar a API
  };
};