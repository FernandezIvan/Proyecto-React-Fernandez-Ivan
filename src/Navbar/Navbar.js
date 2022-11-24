import './Navbar.css'
import Button from '../Components/Button/Button'
const Navbar = (props)=> {

    const handleOnClick=()=> {
    alert('hice click')

    }


    return(
        <nav ClasseName='navbar'>
            
            <h1 style={{color:PaymentResponse.colorTitle}}>Congelados Maracuya</h1>
            <Button text='Frutas' click={handleOnClick}/>
            <Button text='Verduras'/>
            <Button text='Nosotros'/>
            <button>Carrito</button>
    
        </nav>
    )
}

export default Navbar