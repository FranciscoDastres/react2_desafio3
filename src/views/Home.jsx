import pikachuIMG from '../assets/img/pikachu.svg'
import './home.css'
const Home = () => {
  return (
    <section className="container mw-100 vh-100">
      <h1>Bienvenido Maestro Pokemon</h1>
      <img className="pikachuIMG" src={pikachuIMG} alt="Pikachu image" />
    </section>
  )
}
export default Home
