import oss_1 from './media/oss_1.jpg'
import tors from './media/tors.jpg'
import kirke from './media/kirke.jpg'
import redigert from './media/redigert.jpg'
import hamburger from './media/icons/more.png'
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
    <div class="page"> 
      <form class="rsvp-card"> 
        <div class="form-group"> 
          <label class="form-label" for="navn">Navn</label>
          <input type="text" id="navn" name="navn" /> 
        </div> 
        <div class="form-group"> 
          <p class="question-label">Deltar du?</p> 
          <div class="radio-group"> 
          <label class="radio-label"> 
            <input type="radio" name="deltar" value="ja" /> Ja </label>
          <label class="radio-label"> 
            <input type="radio" name="deltar" value="nei" /> Nei </label>
          </div> 
        </div> 
        <div class="form-group"> 
          <p class="question-label">Behov for overnatting?</p> 
          <div class="radio-group"> 
            <label class="radio-label"> 
              <input type="radio" name="overnatting" value="ja" /> Ja </label>
            <label class="radio-label"> 
              <input type="radio" name="overnatting" value="nei" /> Nei </label> 
            </div> 
          </div> 
          <div class="form-group"> 
            <p class="question-label">Behov for transport fra festen?</p> 
            <div class="radio-group"> 
              <label class="radio-label"> 
                <input type="radio" name="transport" value="ja" /> Ja </label>
              <label class="radio-label"> 
                <input type="radio" name="transport" value="nei" /> Nei </label>
            </div> 
          </div> 
          <div class="form-group"> 
            <label class="form-label" for="epost">Epost</label>
            <input type="email" id="epost" name="epost" /> 
          </div> 
          <div class="form-group"> 
            <label class="form-label" for="mobil">Mobil</label> 
            <input type="tel" id="mobil" name="mobil" /> 
          </div> 
          <div class="form-group"> 
            <label class="form-label" for="kommentarer">Kommentarer</label> 
            <textarea id="kommentarer" name="kommentarer" rows="3"></textarea> 
          </div> 
          <button type="submit" class="btn-primary">Bekreft</button> 
        </form> 
      </div>
    </div>
    <div class="info-page">
      <div class="info-page-holder">
        <div class="text-group">
          <h1>Informasjon</h1>
          <p> Vi gleder oss masse til å feire oss med alle dere 04.07.2026. 
            På denne nettsiden du enten ble henvist via papir eller internett ligger det generell informasjon om den store dagen vår.
            Skulle det være noe informasjon du savner, gjerne ta kontakt med oss for eventuel presisering.</p>
        </div>
        <div class="text-group">
          <h1>Vielsen</h1>
          <p>Bryllupet vil foregå I Skien, nærmere bestemt bygda Skotfoss.
            Det blir vielse I flotte Skotfoss kirke.</p>
        </div>
        <img class="kirke" alt="kirke" src={kirke}></img>
        <div class="text-group">
          <h1>Bryllupsfesten</h1>
          <p>Bryllupsfesten finner sted I retning gamle Skotfoss bruk, ved noen eldre lagringsfasiliteter kalt Tors Plass. 
            Vi har en visjon om at feiring skal minne mer om en ordentlig sommerfest enn et klassisk bryllup, 
            så kutymen blir uformell. Det blir servert alkohol på huset, men om du er nervøs for hvor langt lageret rekker er det bare å ta med noe I reserve for egen del.
            Siden det er alkoholservering blir det også 18 års grense på festen.</p>
        </div>
        <img class="tors" alt="tors" src={tors}></img>
      </div>
    </div>
    </>
  );
}

export default App;
