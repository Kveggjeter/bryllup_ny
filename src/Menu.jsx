import './App.css';

function Menu({ onClose }) { 
    return ( 
        <div className="menu-box"> 
            <div className="menu-out-box"> 
                <button className="close-button" onClick={onClose}>X</button>
                <h1 className="registrer"><a href="#registrer" onClick={onClose}>Registrer deg</a></h1>
                <ul>
                    <li><a href="#program" onClick={onClose}>Program</a></li>
                    <li><a href="#kart" onClick={onClose}>Kart</a></li>
                    <li><a href="#gaveliste" onClick={onClose}>Gaveliste</a></li>
                    <li><a href="#informasjon" onClick={onClose}>Informasjon</a></li>
                </ul>
            </div> 
        </div> 
    ); 
} 

export default Menu;