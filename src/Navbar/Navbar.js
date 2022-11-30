import './Navbar.css'
import Button from '../Components/Button/Button';
import CartWidget from '../Components/CartWidget/CartWidget';



const Navbar = (props)=> {

   const handleOnClick = ()=> {
    alert('Frutas congeladas')

   }
    
   const handleOnClick2 = ()=> {
    alert('Verduras congeladas')

   }
   const handleOnClick3 = ()=> {
    alert('Nuestra historia')

   }
   


    return(
        <nav ClasseName='navbar'>
            
            <h1 style={{color:props.colorTitle}}>Congelados Maracuya</h1>
            <Button colorText='red' func={handleOnClick}>Frutas</Button>
            <Button  colorText='green'func={handleOnClick2}>Verduras</Button>
            <Button  colorText='blue'func={handleOnClick3}>Nosotros</Button>
            <CartWidget/>

           
    
        </nav>
    )
}

export default Navbar