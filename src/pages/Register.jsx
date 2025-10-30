import { useState } from 'react';
import { Form, Registers, Input, Container, Label, Boton, Select, Option } from '../Styled/RegisterStyled';
import { register } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [verifiedPassword, setVerifiedPassword] = useState('');
  const [role, setRole] = useState('CONSUMER');
  const navigate = useNavigate();

  return (
    <Form>
      <Registers>REGiSTRARSE</Registers>
      <Container>
        <div>
          <Label>
            Usuario:
            <Input type="text" className='Input' name="name" value={username} onChange={(e) => { setUsername(e.target.value) }} required /> <br />
          </Label>
        </div>

        <div>
          <Label>
            Email:
            <Input type="email" className='Input' name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
          </Label>
        </div>
        <div>
          <Label>
            Edad:
            <Input type="date" className='Input' name="number" value={birthdate} onChange={(e) => { setBirthdate(e.target.value) }} required /> <br />
          </Label>
        </div>

        <div>
          <Label>
            Contraseña:
            <Input type="password" name="password" className='Input' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
          </Label>
        </div>

        <div>
          <Label>
            Confirmar contraseña:
            <Input type="password" className='Input' name="confirmPassword" value={verifiedPassword} onChange={(e) => { setVerifiedPassword(e.target.value) }} required />
          </Label>
        </div>

        <div>
          <Label>
            Registrarse como:
            <Select name="role" className='Input' onChange={(e) => { setRole(e.target.value) }} >
              <Option value="CONSUMER">Cliente </Option>
              <Option value="ARTIST">Artista </Option>
            </Select>
          </Label>
        </div>

        <Boton type="button" onClick={() => {
          if (password === verifiedPassword){
            register(username, password, role, birthdate, email).then(() => navigate('/Login'))
          }

          else
            alert("Las contraseñas no coinciden")
        }}>Registrarse</Boton>
      </Container>
    </Form>
  );
};

export default Register;