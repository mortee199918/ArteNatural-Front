import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'cliente'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form>
      <h2>Registrarse</h2>

      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Confirmar contraseña:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Registrarse como:
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="cliente">Cliente</option>
            <option value="artista">Artista</option>
          </select>
        </label>
      </div>

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;