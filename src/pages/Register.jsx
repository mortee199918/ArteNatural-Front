import { useState } from 'react';
import { Form, Registers, Input, Container, Label, Boton, Select, Option } from '../Styled/RegisterStyled';
import { register } from '../services/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [verificPassword, setVerificPassword] = useState('');

  return (
    <Form>
      <Registers>Registrarse</Registers>
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
            <Input type="date" className='Input' name="number" value={age} onChange={(e) => { setAge(e.target.value) }} required /> <br />
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
            <Input type="password" className='Input' name="confirmPassword" value={verificPassword} onChange={(e) => { setVerificPassword(e.target.value) }} required />
          </Label>
        </div>

        <div>
          <Label>
            Registrarse como: 
            <Select name="role" className='Input' >
              <Option value="cliente">Cliente </Option>
              <Option value="artista">Artista </Option>
            </Select>
          </Label>
        </div>

        <Boton type="submit" onClick={() => {
          register(username, password)
        }}>Registrarse</Boton>
      </Container>
    </Form>
  );
};

export default Register;