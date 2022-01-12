import logo from './images/logo-in.png'
import {Navbar,Form,FormControl,Container,Button} from 'react-bootstrap';
import { useGlobalContext } from "./Context";

const NavBar=()=>{
const {login,changeLogin}=useGlobalContext();
    return (
        <div className="row container-fluid">
    <Navbar className='nav-bar' expand={false}>
   <Container fluid>
    <Navbar.Brand><img src={logo} alt='ATG GLOBAL'/></Navbar.Brand>
      <Form>  
        <FormControl
          type="search"
          placeholder="Find Groups in ATG!"
        />
      </Form>
      {!login?<Button variant='success' onClick={changeLogin} className='btn'>SignUp/Login!</Button>:
      <Button variant='danger' onClick={changeLogin} className='btn'>Logout</Button>}
  </Container>
    </Navbar>
    </div>


    )
}



export default NavBar;