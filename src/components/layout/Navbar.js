import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import logo from '../../img/logo-abem-png.png';
import style from './Navbar.module.css'

export default function Navbar(){
    return(
        <div>
            <Container maxWidth="lg">
            <nav>
            <Link to='/'>
                <img src={logo} alt='Logo da ABEM'/>
            </Link>
            <ul>   
                <li>
                    <Link to="/duvidas"> Dúvidas </Link>
                </li>
                <li className='style.Navbar.module.css'>
                    <Link to="/doe"> Doe </Link>
                </li>
                </ul>
                </nav>
            </Container>
        </div>
        
    )
}