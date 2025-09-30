import  { useState } from 'react';
import "../Styled/Register.css"

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
    <form className='form'>
      <h2 className='Register'>Registrarse</h2>
    <div className='container'>
      <div>
        <label>
          Nombre: 
          <input type="text" className='input' name="name" value={formData.name} onChange={handleChange} required/> <br/>
        </label>
      </div>

      <div>
        <label>
          Email:
          <input type="email" className='input' name="email" value={formData.email} onChange={handleChange}required/>
        </label>
      </div>

      <div>
        <label>
          Contraseña:
          <input type="password"name="password" className='input' value={formData.password} onChange={handleChange} required/>
        </label>
      </div>

      <div>
        <label>
          Confirmar contraseña:
          <input type="password" className='input' name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}required/>
        </label>
      </div>

      <div>
        <label>
          Registrarse como:
          <select name="role" className='input' value={formData.role} onChange={handleChange}>
            <option value="cliente">Cliente </option>
            <option value="artista">Artista </option>
          </select>
        </label>
      </div>

      <button type="submit">Registrarse</button>
      </div>
    </form>
  );
};

export default Register;