import './App.css';

function Menu({ onClose }) { 
    return ( 
        <div className="menu-box"> 
            <div className="menu-out-box"> 
                <button className="close-button" onClick={onClose}>X</button>
                <h1 className="registrer">Registrer deg</h1>
                <ul>
                    <li>Program</li>    
                    <li>Informasjon</li>
                    <li>Vielse</li>
                    <li>Etterfest</li>
                    <li>Gaveliste</li>
                </ul>
            </div> 
        </div> 
    ); 
} 

export default Menu;