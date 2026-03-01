import program from './media/tillegg/bryllup/program.png'
import bussrute from './media/bussrute.png'
import map1 from './media/map1.png'
import map2 from './media/maps2.png'
import jippi from './media/tillegg/bryllup/jippi.jpeg'
import redigert from './media/redigert.png'
import hamburger from './media/icons/more.png'
import Maps from './Maps'
import Menu from './Menu'
import {useState, useEffect} from 'react'
import {supabase} from './client'
import './App.css';


function formValidator(post) {

  const errors = {}

  if (!post.navn || post.navn.trim().length < 2) { 
    errors.navn = "Vennligst skriv inn et gyldig navn."; 
  }
  
  if (post.folge !== true && post.folge !== false) {
     errors.folge = "Vennligst velg om du har følge."; 
    } 
  
  if (post.overnatting !== true && post.overnatting !== false) { 
    errors.overnatting = "Vennligst velg om du trenger overnatting."; 
  }
  
  if (post.taxi !== true && post.taxi !== false) {
    errors.taxi = "Vennligst velg om du trenger transport."; 
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (!post.epost || !emailRegex.test(post.epost)) { 
    errors.epost = "Vennligst skriv inn en gyldig e‑postadresse."; 
  }
  
  const phoneRegex = /^[0-9]{8,}$/; 
  if (!post.mobil || !phoneRegex.test(post.mobil)) { 
    errors.mobil = "Vennligst skriv inn et gyldig mobilnummer (minst 8 siffer)."; 
  }  
   
  return errors;
}

function driveValidator(drive) {

  const driveErrors = {}

  if(!drive.drive_navn || drive.drive_navn.trim().length < 2) {
    driveErrors.drive_navn = "Vennligst skriv inn et gyldig navn.";
  }

  const phoneRegex = /^[0-9]{8,}$/; 
  if (!drive.drive_mobil || !phoneRegex.test(drive.drive_mobil)) { 
    driveErrors.drive_mobil = "Vennligst skriv inn et gyldig mobilnummer (minst 8 siffer)."; 
  } 
  
  if(!drive.drive_sted || drive.drive_sted.trim().length < 2) {
    driveErrors.drive_sted = "Vennligst skriv inn et gyldig sted.";
  }

  return driveErrors;

}


function App() {
  const [success, setSuccess] = useState(false);
  const [driveSuccess, setDriveSuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [driveErrors, setDriveErrors] = useState([]);
  const [drives, setDrives] = useState([]);
  const [drive, setDrive] = useState({
    drive_navn: "",
    drive_mobil: "",
    drive_sted: ""
  });
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    navn: "",
    folge: null,
    overnatting: null,
    taxi: null,
    epost: "",
    mobil: "",
    allergi: "", 
    kommentar: ""
  });

  const {
    navn,
    folge, 
    overnatting, 
    taxi, 
    epost,
    mobil,
    allergi,
    kommentar
  } = post;
  const {
    drive_navn,
    drive_mobil,
    drive_sted
  } = drive;

  useEffect(() => {
    fetchPosts()
    fetchDrive()
  }, [])


  useEffect(() => {
     if (driveSuccess) {
      fetchDrive(); 
      setDriveSuccess(false); 
  } }, [driveSuccess])

  async function fetchPosts() {
    const { data } = await supabase
      .from('users')
      .select()
    setPosts(data)
    console.log("data: ", data);
  }

  async function fetchDrive() {
    const { data } = await supabase
      .from('drive')
      .select()
    setDrives(data)
    console.log("drive ", data);
  }

  async function createPost(e) {

    e.preventDefault();
    const result = formValidator(post);
    setErrors(result);

    if (Object.keys(result).length > 0) {
      return;
    }

    await supabase
      .from('users')
      .insert([{
        navn, 
        folge, 
        overnatting, 
        taxi, 
        epost, 
        mobil,
        allergi,
        kommentar 
      }])
      .single()
    setPost({
      navn: "",
      folge: null,
      overnatting: null,
      taxi: null,
      epost: "",
      mobil: "",
      allergi: "",
      kommentar: ""
    })

    setSuccess(true);
  }

  async function createDrive(e) {
    
    e.preventDefault();
    
    const result = driveValidator(drive)
    
    setDriveErrors(result);

    if (Object.keys(result).length > 0) {
      return;
    } 

  await supabase
    .from('drive')
    .insert([{
      navn: drive_navn,
      mobil: drive_mobil,
      sted: drive_sted
    }])
      .single()
    setDrive({
      drive_navn: "",
      drive_mobil: "",
      drive_sted: ""
    })

    setDriveSuccess(true);
  }


  return (
    <>
    {menuOpen && <Menu onClose={() => setMenuOpen(false)}/>}
    <div className="frontPage">
      <div className="out_frontpage">
        <div className="menu_box" onClick={() => setMenuOpen(true)}>
          <img className="hamburger" alt="hamburger" src={hamburger}></img>
          <h2 className="menu_text">Meny</h2>
        </div>
          <div className="picture-box">
            <img className="picture_frontpage" alt="oss" src={redigert} ></img>
          </div>
          <div className="bottom_text_box">
            <h2 className="picture_text">4. Juli 2026 - Skien</h2>
            <h2 className="bottom_text">Vi gleder oss masse til å feire med deg!</h2>
          </div>
      </div>
    </div>
    <div id="registrer" className="formPage">
    <div className="page"> 
      <form className="rsvp-card" onSubmit={createPost}> 
        <div className="form-group"> 
          <label className="form-label" for="navn">Navn</label>
          <input
           className={`input-field ${errors.navn ? "error" : ""}`}
           type="text" 
           id="navn" 
           name="navn" 
           value={navn}
           onChange={e => setPost({ ...post, navn: e.target.value})}
           /> 
           {errors.navn && <p className="error-text">{errors.navn}</p>}
        </div> 
        <div className="form-group"> 
          <p className="question-label">Har du følge?</p> 
          <div className={`radio-group ${errors.folge ? "error" : ""}`}> 
          <label className="radio-label"> 
            <input
              type="radio"
              name="folge" 
              value="true"
              checked={post.folge === true}
              onChange={e => setPost({ ...post, folge: true})} 
              /> Ja </label>
          <label className="radio-label"> 
            <input
              type="radio"
              name="folge" 
              value="false"
              checked={post.folge === false}
              onChange={e => setPost({ ...post, folge: false})} 
            /> Nei </label>
          </div> 
          {errors.navn && <p className="error-text">{errors.folge}</p>}
        </div> 
        <div className="form-group"> 
          <p className="question-label">Behov for overnatting?</p> 
          <div className={`radio-group ${errors.overnatting ? "error" : ""}`}> 
            <label className="radio-label"> 
              <input
               type="radio" 
               name="overnatting" 
               value="true"
               checked={post.overnatting === true}
               onChange={e => setPost({ ...post, overnatting: true})}  
               /> Ja </label>
            <label className="radio-label"> 
              <input
               type="radio" 
               name="overnatting" 
               value="false"
               checked={post.overnatting === false}
               onChange={e => setPost({ ...post, overnatting: false})}  
               /> Nei </label>
            </div> 
            {errors.navn && <p className="error-text">{errors.overnatting}</p>}
          </div> 
          <div className="form-group"> 
            <p className="question-label">Behov for transport fra festen?</p> 
            <div className={`radio-group ${errors.taxi ? "error" : ""}`}> 
              <label className="radio-label"> 
                <input 
                type="radio" 
                name="transport" 
                value="true"
                checked={post.taxi === true}
                onChange={e => setPost({ ...post, taxi: true})}  
                /> Ja </label>
              <label className="radio-label"> 
                <input
                type="radio" 
                name="transport" 
                value="false"
                checked={post.taxi === false}
                onChange={e => setPost({ ...post, taxi: false})}  
                /> Nei </label>
            </div> 
            {errors.navn && <p className="error-text">{errors.taxi}</p>}
          </div> 
          <div className="form-group"> 
            <label className="form-label" for="epost">Epost</label>
            <input
              className={`input-field ${errors.epost ? "error" : ""}`}
              type="email" 
              id="epost" 
              name="epost"  
              value={epost}
              onChange={e => setPost({ ...post, epost: e.target.value})}
             /> 
             {errors.navn && <p className="error-text">{errors.epost}</p>}
          </div> 
          <div className="form-group"> 
            <label className="form-label" for="mobil">Mobil</label> 
            <input
            className={`input-field ${errors.mobil ? "error" : ""}`} 
            type="mobil" 
            id="mobil" 
            name="mobil" 
            value={mobil}
            onChange={e => setPost({ ...post, mobil: e.target.value})}
            /> 
            {errors.navn && <p className="error-text">{errors.mobil}</p>}
          </div>
          <div className="form-group"> 
            <label className="form-label" for="allergi">Allergi/preferanser</label> 
            <input
            className="input-field" 
            type="allergi" 
            id="allergi" 
            name="allergi" 
            value={allergi}
            onChange={e => setPost({ ...post, allergi: e.target.value})}
            /> 
          </div>  
          <div className="form-group"> 
            <label className="form-label" for="kommentarer">Kommentarer</label> 
            <textarea
              className="input-field"
              id="kommentarer"
              name="kommentarer"
              rows="3"
              value={post.kommentar}
              onChange={e => setPost({ ...post, kommentar: e.target.value })}
              />
          </div>
          {success && (
            <div className="success-box">
              <p>Takk! Vi gleder oss til å se deg der!</p>
            </div>
          )}
          <button 
            type="submit" 
            className="btn-primary"
            >Bekreft</button> 
        </form> 
      </div>
    </div>
    <div id="program" className="program-page">
      <div className="program-page-holder">
        <img alt="program" src={program} />
      </div>
    </div>
    <div id="kart" className="map-page">
      <div className="map-page-holder">
         <div className="text-group">
          <h1>Hvor skjer det?</h1>
          <p>Bruk kartet til å se hva og hvor ting ligger. Addresse er vedlagt på vært interessepunkt</p>
        </div>
        <Maps></Maps>
      </div>
    </div>
    <div id="gave" className="gave-page">
      <div className="gave-page-holder">
        <div className="gave-group">
          <div className="gave-text">
            <h1>Gaveliste</h1>
            <p>Vi er heldige nok til å ha det vi trenger av ting og tang, så vi ønsker ikke at noen tar med bryllupsgaver.
              Hvis det allikevel er ønske om å gi oss en bryllupsgave, takker vi med stort hjerte for bidrag til festen og bryllupsreisen vår til Japan!
              <br></br><br></br>
              Hvis du ønsker å øremerke bidraget, så har vi vedlagt en liten liste med forslag (naturligvis ikke begrenset til). 
              Hvis du øremerker bidraget, sender vi tilbake en hilsen når vi gjør aktiviteten. 
              <ul>
                <li>Flybilletter</li>
                <li>Togbilletter</li>
                <li>Leiebil</li>
                <li>Overnatting Okinawa</li>
                <li>Overnatting Kyoto</li>
                <li>Overnatting Tokyo</li>
                <li>Spabehandling (onsen)</li>
                <li>Te-sermoni</li>
                <li>Geisha</li>
                <li>Kimono leie</li>
                <li>Studio Ghibli park</li>
                <li>Tokyo sky tree</li>
                <li>Middag - Sushi</li>
                <li>Middag - Kobe</li>
                <li>Middag - Ramen</li>
                <li>Cat cafe</li>
                <li>Museum</li>
                <li>Sake</li>
                <li>Øl</li>
              </ul>
              Vipps: Amanda, 458 84 182<br></br>
              Bankkontonummer: 2601 41 08504
              <br></br><br></br>
              Tusen hjertelig takk!
          </p>
          </div>
          <img alt="jippi" src={jippi}></img>
        </div>
      </div>
    </div>
    <div id="info" className="info-page">
      <div className="info-page-holder">
        <div className="text-group">
          <h1>Informasjon</h1>
          <p> Vi gleder oss masse til å feire oss med alle dere 04.07.2026. 
            På denne nettsiden du enten ble henvist via papir eller internett ligger det generell informasjon om den store dagen vår.
            Skulle det være noe informasjon du savner, gjerne ta kontakt med oss for eventuel presisering.</p>
        </div>
        <div className="text-group">
          <h1>Ankomst/Parkering</h1>
          <p>Det er markert på kartet lengre opp på siden hvor det er mulig å parkere. 
            Hvis du skal kjøre bil og har plass (og ønsker) til passasjerer, kan du registrere deg her, slik at det vises nedenfor.
            Trenger du skyss er det bare å ta kontakt med en av de på denne listen. </p>
            <table>
          <thead>
            <tr>
              <th>Navn:</th>
              <th>Telefon:</th>
              <th>Reiser til Skotfoss fra:</th>
            </tr>
          </thead>
          <tbody>
            {drives && drives.length > 0 ? (
              drives.map((d, index) => (
                <tr key={index}>
                  <td>{d.navn}</td>
                  <td>{d.mobil}</td>
                  <td>{d.sted}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Ingen har registrert skyss enda</td>
              </tr>
            )}
          </tbody>
          </table>
          <form onSubmit={createDrive} className="drive-form">
            <div className="form-group">
              <label className="form-label" for="drive_navn">Navn</label>
              <input
                className={`input-field ${driveErrors.drive_navn ? "error" : ""}`}
                value={drive_navn}
                onChange={e => setDrive({ ...drive, drive_navn: e.target.value })}
              />
              {driveErrors.drive_navn && <p className="error-text">{driveErrors.drive_navn}</p>}
            </div>
            <div className="form-group">
              <label className="form-label" for="drive_mobil">Mobil</label>
            <input
              className={`input-field ${driveErrors.drive_mobil ? "error" : ""}`}
              value={drive_mobil}
              onChange={e => setDrive({ ...drive, drive_mobil: e.target.value })}
            />
            {driveErrors.drive_mobil && <p className="error-text">{driveErrors.drive_mobil}</p>}
            </div>
            <div className="form-group">
              <label className="form-label" for="drive_sted">Reiser fra</label>
            <input
              className={`input-field ${driveErrors.drive_sted ? "error" : ""}`}
              value={drive_sted}
              onChange={e => setDrive({ ...drive, drive_sted: e.target.value })}
            />
            {driveErrors.drive_sted && <p className="error-text">{driveErrors.drive_sted}</p>}
            </div>
            {driveSuccess && (
            <div className="success-box">
              <p>Takk! Vi gleder oss til å se deg der!</p>
            </div>
            )}
            <button
            type="submit"
            className="btn-primary"
            >Bekreft</button>
          </form>
        </div>
        <div className="text-group">
          <p>Selskapslokalet ligger helt i enden av halvøya som bruket befinner seg på og det må beregenes rundt 500 meter på fot.
             Anbefalt rute er markert på vedlagt kart. 
             Det er i utgangspunktet ikke lov å kjøre inn på stien, 
             men om du er dårlig til bens eller nervøs for at ferden blir for lang gjerne meld i fra, 
             så finner vi ut av det.</p>
        </div>
        <div className="dual-image">
          <img className="map_img_1" alt="alternativ 1" src={map1}></img>
          <img className="map_img_2" alt="alternativ 1" src={map2}></img>
        </div>
        <div className="text-group">
          <h1>Bilder/fotograf</h1>
          <h3>Vielsen i kirka</h3>
          <p>I kirken kommer det til å være fotografer som tar flotte bilder av vielsen.
             Derfor er det ikke lov til å bruke mobiltelefon. 
             La mobilen ligge i lomma, og vær tilstede med oss i det dyrebare øyeblikket. 
             Fotografene er profesjonelle, og vil fange stemningen gjennom linsene sine, som vi vil dele med oss i etterkant av bryllupet.
          </p>
          <h3>Selskap og kveld</h3>
          <p>
            Ellers i selskapet og resten av kvelden håper vi dere vil hjelpe oss 
            å fange så mye som mulig av stemningen gjennom bilder og video med egne mobilkameraer. 
            Mingling, venting, spising, dansing, aktiviteter og resten av selskapet blir ekstra gøy å se gjennom deres øyne, 
            og vil berike våre minner.
          </p>
        </div>
        <div className="text-group">
          <h1>Antrekk og Huskeliste</h1>
          <p>
            Selv om vi ikke har et utpreget tema for bryllupet, 
            ser vi for oss at stemningen blir preget av følgende 
            stikkord: sommerfest, hagefest, picknick, festival, blomster, rustikk.
            <br></br>
            <br></br>
            Til oss kan du komme som du er, og det er ikke noe som heter å pynte seg for mye!
            Ta gjerne frem din flotteste galla-kjole, dress eller bunad, 
            men hvis du ønsker å bruke en luftig sommerkjole, shorts eller lin-dress, 
            er det også veldig lov. Eneste regelen vi setter er å unngå å bruke hvit kjole.
            <br></br>
            <br></br>
            Vær oppmerksom på at det blir gåing på grusvei/skogbunn i 10 min til selskapslokasjonen. 
            Selskapslokasjonen er utendørs, men med tak over, og partytelt.
            Vi har bestilt varmt sommervær, men ta forbehold om kulde og nedbør! 
            Vi forventer også at alle tar den helt ut på dansegulvet, så viktig å ha gode komfortable sko.
            </p>
            <h3>Ta med hvis du har:</h3>
            <ul>
              <li>Piknikk/hagestol</li>
              <li>Teppe og genser til utover kvelden</li>
              <li>Myggspray og solkrem</li>
              <li>Hatt/caps</li>
              <li>Solbriller</li>
            </ul>
        </div>
        <div className="text-group">
          <h1>Aktiviteter</h1>
          <p>Gjennom dagen blir det diverse aktiviteter og kanskje litt 
            konkurranse som vi håper dere vil være med på og sette pris på.            
            Hvis du ønsker, er du hjertelig velkommen til å ta med andre spill 
            og leker, som kubb, boccia, ringspill o.l.
          </p>
        </div>
        <div className="text-group">
          <h1>Vakthold</h1>
          <p>Det vil være vakter tilstede hele kvelden som har vår fullmakt til å be enhver gjest som oppfører seg urimelig om å forlate festen.
            Dette forventer vi at respekteres fra første advarsel.
            Selskapslokalet er også en offentlig tilgjengelig plass,
            hvor folk kan gå på tur forbi. Dersom du ser noen som sniker seg inn på festen,
             eller oppfører seg urimelig. gi beskjed til en vakt.
          </p>
        </div>
        <div className="text-group">
          <h1>Drikkeservering</h1>
          <p>Ved ankomst til selskapslokalet vil det være klargjort velkomst-drinker, hvor man kan forsyne seg én per person
              Under hele selskapet vil det også være mulig å forsyne seg med det vi har av forfriskninger. Vi førster å beregne en
              generøs mengde pønsj, vin, øl og cider på vært hode. Det er lov å ta med eget også, men det strengt talt ikke nødvendig. 
              <br></br>
              <br></br>
              Det vil også være rikelig med vann og alkoholfri drikke. 
          </p>
        </div>
        <div className="text-group">
          <h1>Matservering</h1>
          <p>Ved ankomst til selskapslokalet vil det stå snacks fremme som alle kan forsyne seg av. 
              Det vil også være mulighet for å grille seg en “ventepølse”.
              Kakebordet vil også være åpent fra starten av selskapet.
              <br></br>
              <br></br>
              Middagen vil bestå av mexikansk taco-buffét og serveres 16:30
              Nattmat blir pizza og serveres 22:00
              <br></br>
              <br></br>
              Meld i fra på innmeldingsskjema om du har allergier eller preferanser.
          </p>
        </div>
        <div className="text-group">
          <h1>Overnatting/hjemkomst</h1>
          <h3>Hotell</h3>
          <p>I Skien og Porsgrunn kan du bestille overnatting på følgende hoteller:</p>
          <ul>
            <li>Thon Hotel Høyers, Kongens gate 6, 3717 Skien</li>
            <li>Henriks hotell, Prinsessegata 7, 3724 Skien</li>
            <li>Home Hotel Bryggeparken, Langbrygga 7, 3724 Skien</li>
            <li>Hotell Fritidsparken, Moflatvegen 59, 3733 Skien</li>
            <li>Comfort Hotel Porsgrunn, Kammerherreløkka 3, 3915 Porsgrunn</li>
            <li>Hotell Vic, Skolegata 1, 3916 Porsgrunn</li>
          </ul>
          <h3>Telt/Camping</h3>
          <p>De som ønsker å overnatte i telt, campingvogn eller hengekøye i hagen vår, er velkomne til dette.
            <br></br> 
            Adresse: Skotfossvegen 292, hvitt murhus med én etasje.
            <br></br>
            Det er god plass, men send oss beskjed på forhånd så vi har oversikt over hvem som kommer. 
            Det er ikke lov å telte på Tors plass (selskapslokalet).
            Det er ikke lov å telte i hagen til naboen (trehuset med to etasjer).
          </p>
        </div>
        <div className="text-group">     
          <h3>Fra Skotfoss med taxi</h3>
          <p>
            Vi setter opp maxi-taxier fra Skotfoss til Skien kl.23:00 og kl.02:00 
            (festen avsluttes kl.01:30). Taxien kjører fra idrettsplassen, Børrebakken 39, 3720 Skien.
            Meld deg på nedenfor, innen 15.juni, slik at vi vet hvor mange vi skal bestille til.
            For å forsikre oss om at påmeldte faktisk møter opp til taxien, velger vi å be om en symbolsk pris på 40kr per person. Dette kan vippses til Amanda (45884182) før bryllupet.
            <br></br>
            <br></br>
            Taxiene kjører presis på de oppsatte tidspunktene, 
            som betyr at du må beregne MINST 15 min gange fra Tors Plass (selskapslokalet). 
            Dersom du kommer for sent, må du ordne egen transport på egen regning.
            Dersom du melder deg på første taxi kl.23, og misser den, 
            kan du IKKE bli med den andre kl.02. Om du ikke stoler på deg selv, 
            kan du melde deg på begge taxiene, men da må du vippse dobbelt, 80 kr til Amanda 
            (45884182) før bryllupet.
            De som ikke melder seg på maxi-taxi, ordner egen transport hjem fra bryllupet selv.
          </p>
          <h3>Kollektivtransport - buss</h3>
          <p>Bussrute P6 er eneste rute som går til og fra Skotfoss.
            <br></br>
            <br></br>
            Aktuelle busstopp:
            <br></br>
            Nærmeste til kirka: Coop Prix/Tonika frisør, busstopp “Skotfoss”
            Nærmeste til huset vårt og Tors plass (selskapslokalet): Løveid sluse, busstopp “Kanalen”
            <br></br>
            <br></br>
            MERK: Siste buss fra Skotfoss til Skien på lørdager går fra busstopp “Kanalen” kl.21:00
          </p>
          <div className="bussholder">
            <img className="bussrute" alt="Busstabell p6" src={bussrute}></img>
          </div>
          <h3>Kollektivtransport - tog</h3>
          <p>Det går tog til og fra Skien stasjon, se vy.no for avganger.
            Du kan ta buss fra Skien stasjon til Skotfoss fra busstopp “Rektor Ørns gate”.
            Merk at stasjonen ligger litt i “utkanten” av bysentrum dersom du kommer med tog
            og skal overnatte på hotell.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
