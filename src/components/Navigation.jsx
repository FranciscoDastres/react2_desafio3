import { Navbar } from 'react-bootstrap'
import pokeIcon from '../assets/img/poke-icon.png';
import { useNavigate, NavLink } from 'react-router-dom'

const Navigation = () => {

    // const activeClass = "navLinkActive"
    const activeClass = ({ isActive }) => (isActive ? 'active' : 'inactive')

    const navigate = useNavigate();
    const handleClick = () =>
        navigate('/')

    return (
      <Navbar className='d-flex gap-5 p-4 contenedor justify-content-end'>
        <section>
          <Navbar.Brand
            className='navBrand'
            onClick={handleClick}
          >
            <img
              className='navIcon'
              src={pokeIcon}
              alt="Pokemon icon lines"
            />
         </Navbar.Brand>
        </section>
        <section className='navLinks'>
          <NavLink
            className={activeClass}
            to="/"
            >
              Home |
          </NavLink>
          <NavLink
            className={activeClass}
            to="/pokemons"
            >
              Pokemons
          </NavLink>
          </section>
        </Navbar >
      )
}
export default Navigation