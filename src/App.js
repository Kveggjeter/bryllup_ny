import oss_1 from './media/oss_1.jpg'
import map1 from './media/map1.png'
import map2 from './media/maps2.png'
import tors from './media/tors.jpg'
import kirke from './media/kirke.jpg'
import redigert from './media/redigert.jpg'
import hamburger from './media/icons/more.png'
import Maps from './Maps'
import './App.css';

function App() {
  return (
    <>
    <div className="frontPage">
      <div className="out_frontpage">
        <div className="menu_box">
          <img className="hamburger" alt="hamburger" src={hamburger}></img>
          <h2 className="menu_text">Meny</h2>
        </div>
          <img className="picture_frontpage" alt="oss" src={redigert} ></img>
          <div className="bottom_text_box">
            <h2 className="bottom_text">Vi gleder oss masse til å feire med deg!</h2>
          </div>
      </div>
    </div>
    <div className="formPage">
    <div className="page"> 
      <form className="rsvp-card"> 
        <div className="form-group"> 
          <label className="form-label" for="navn">Navn</label>
          <input type="text" id="navn" name="navn" /> 
        </div> 
        <div className="form-group"> 
          <p className="question-label">Deltar du?</p> 
          <div className="radio-group"> 
          <label className="radio-label"> 
            <input type="radio" name="deltar" value="ja" /> Ja </label>
          <label className="radio-label"> 
            <input type="radio" name="deltar" value="nei" /> Nei </label>
          </div> 
        </div> 
        <div className="form-group"> 
          <p className="question-label">Behov for overnatting?</p> 
          <div className="radio-group"> 
            <label className="radio-label"> 
              <input type="radio" name="overnatting" value="ja" /> Ja </label>
            <label className="radio-label"> 
              <input type="radio" name="overnatting" value="nei" /> Nei </label> 
            </div> 
          </div> 
          <div className="form-group"> 
            <p className="question-label">Behov for transport fra festen?</p> 
            <div className="radio-group"> 
              <label className="radio-label"> 
                <input type="radio" name="transport" value="ja" /> Ja </label>
              <label className="radio-label"> 
                <input type="radio" name="transport" value="nei" /> Nei </label>
            </div> 
          </div> 
          <div className="form-group"> 
            <label className="form-label" for="epost">Epost</label>
            <input type="email" id="epost" name="epost" /> 
          </div> 
          <div className="form-group"> 
            <label className="form-label" for="mobil">Mobil</label> 
            <input type="tel" id="mobil" name="mobil" /> 
          </div> 
          <div className="form-group"> 
            <label className="form-label" for="kommentarer">Kommentarer</label> 
            <textarea id="kommentarer" name="kommentarer" rows="3"></textarea> 
          </div> 
          <button type="submit" className="btn-primary">Bekreft</button> 
        </form> 
      </div>
    </div>
    <div className="info-page">
      <div className="info-page-holder">
        <div className="text-group">
          <h1>Informasjon</h1>
          <p> Vi gleder oss masse til å feire oss med alle dere 04.07.2026. 
            På denne nettsiden du enten ble henvist via papir eller internett ligger det generell informasjon om den store dagen vår.
            Skulle det være noe informasjon du savner, gjerne ta kontakt med oss for eventuel presisering.</p>
        </div>
        <div className="text-group">
          <h1>Vielsen</h1>
          <p>Bryllupet vil foregå I Skien, nærmere bestemt bygda Skotfoss.
            Det blir vielse I flotte Skotfoss kirke.</p>
        </div>
        <img className="kirke" alt="kirke" src={kirke}></img>
        <div className="text-group">
          <h1>Bryllupsfesten</h1>
          <p>Bryllupsfesten finner sted I retning gamle Skotfoss bruk, ved noen eldre lagringsfasiliteter kalt Tors Plass. 
            Vi har en visjon om at feiring skal minne mer om en ordentlig sommerfest enn et klassisk bryllup, 
            så kutymen blir uformell. Det blir servert alkohol på huset, men om du er nervøs for hvor langt lageret rekker er det bare å ta med noe I reserve for egen del.
            Siden det er alkoholservering blir det også 18 års grense på festen.</p>
        </div>
        <img className="tors" alt="tors" src={tors}></img>
      </div>
    </div>
    <div className="info-page-0">
      <div className="info-page-holder">
        <div className="text-group">
          <h1>Ankomst/Parkering</h1>
          <p>Parkering for vielsen gjøres der det er plass.
            I første omgang blir dette kirkens egne parkeringsplasser, 
            skolen eller på andre siden av vegen ved coop prix. 
            Hvis det er tjåka fult her, er det mulig å parkere ved slusene nede I bakken vår. 
            For festen er det lettest å parkere ved Skotfoss stadion eller ved barnehagen, 
            hvis det fyller seg opp her er det mye plass ved Skotfoss bruk.</p>
        </div>
        <Maps></Maps>
        <div className="text-group">
          <p>Tors Plass ligger helt I enden av halvøya som bruket befinner seg på og det må beregenes rundt 500 meter på fot.
             Anbefalt rute er markert på vedlagt kart. 
             Det er I utgangspunktet ikke lov å kjøre inn på stien, 
             men om du er dårlig til bens og nervøs for at ferden blir for lang gjerne meld I fra, 
             så finner vi ut av det.</p>
        </div>
        <div className="dual-image">
          <img className="map_img_1" alt="alternativ 1" src={map1}></img>
          <img className="map_img_2" alt="alternativ 1" src={map2}></img>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
