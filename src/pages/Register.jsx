import  { useState } from 'react';
import "../Styled/Register.css"
import { register } from '../services/auth';

const Register = () => {
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const [email,setEmail] = useState('');
const [age, setAge] = useState('');
const [verificPassword,setVerificPassword] = useState('');

  return (
    <form className='form'>
      <h2 className='Register'>Registrarse</h2>
    <div className='container'>
      <div>
        <label>
          Usuario: 
          <input type="text" className='input' name="name" value={username} onChange={(e)=>{setUsername(e.target.value)}} required/> <br/>
        </label>
      </div>

      <div>
        <label>
          Email:
          <input type="email" className='input' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
        </label>
      </div>
      <div>
        <label>
          Edad: 
          <input type="date" className='input' name="number" value={age} onChange={(e)=>{setAge(e.target.value)}} required/> <br/>
        </label>
      </div>

      <div>
        <label>
          Contraseña:
          <input type="password"name="password" className='input' value={password} onChange={(e)=>{setPassword(e.target.value)}}  required/>
        </label>
      </div>

      <div>
        <label>
          Confirmar contraseña:
          <input type="password" className='input' name="confirmPassword" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
        </label>
      </div>

      <div>
        <label>
          Registrarse como:
          <select name="role" className='input' >
            <option value="cliente">Cliente </option>
            <option value="artista">Artista </option>
          </select>
        </label>
      </div>

      <button type="submit" onClick={()=>{
        register(username,password)
      }}>Registrarse</button>
      </div>
    </form>
  );
};

export default Register;