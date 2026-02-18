import oss_1 from './media/oss_1.jpg'
import map1 from './media/map1.png'
import map2 from './media/maps2.png'
import tors from './media/tors.jpg'
import kirke from './media/kirke.jpg'
import redigert from './media/redigert.jpg'
import hamburger from './media/icons/more.png'
import Maps from './Maps'
import Menu from './Menu'
import {useState} from 'react'
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {menuOpen && <Menu onClose={() => setMenuOpen(false)}/>}
    <div className="frontPage">
      <div className="out_frontpage">
        <div className="menu_box" onClick={() => setMenuOpen(true)}>
          <img className="hamburger" alt="hamburger" src={hamburger}></img>
          <h2 className="menu_text">Meny</h2>
        </div>
          <img className="picture_frontpage" alt="oss" src={redigert} ></img>
          <div className="bottom_text_box">
            <h2 className="picture_text">4. Juli 2026 - Skien</h2>
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
        <div className="text-group">
          <h1>Bilder/fotograf</h1>
          <h3>Vielsen i kirka</h3>
          <p>I kirken kommer det til å være designerte fotografer som tar flotte bilder av vielsen.
             Derfor er det ikke lov til å bruke mobiltelefon eller eget kamera til bilder og video. 
             La mobilen ligge i lomma, og vær tilstede med oss i det dyrebare øyeblikket. 
             Fotografene er profesjonelle, og vil fange stemningen gjennom linsene sine, som vi vil dele med dere i etterkant av bryllupet.
          </p>
          <h3>Selskap og kveld</h3>
          <p>
            Ellers i selskapet og resten av kvelden håper vi dere vil hjelpe oss 
            å fange så mye som mulig av stemningen gjennom bilder og video med egne mobilkameraer. 
            Mingling, venting, spising, dansing, drikking, aktiviteter og resten av selskapet blir ekstra gøy å se gjennom deres øyne, 
            og vil berike av våre minner.
          </p>
        </div>
        <div className="text-group">
          <h1>Antrekk og Huskeliste</h1>
          <p>Til oss kan du komme som du er, og det er ikke noe som heter å pynte seg for mye!
            Selv om vi ikke har et utpreget tema for bryllupet, 
            ser vi for oss at stemningen blir preget av følgende 
            stikkord: sommerfest, hagefest, picknick, festival, blomster, country.
            <br></br>
            <br></br>
            Ta gjerne frem din flotteste galla-kjole, dress eller bunad, 
            men hvis du ønsker å bruke en luftig sommerkjole, shorts eller lin-dress, 
            er det veldig lov. Eneste regelen vi setter er å unngå å bruke hvit kjole.
            <br></br>
            <br></br>
            Vær oppmerksom på at det blir gåing på skogbunn/sti i 10 min til selskapslokasjonen. 
            Selskapslokasjonen er utendørs, men med tak over, og partytelt.
            Vi har bestilt varmt sommervær, men ta forbehold om kulde og nedbør! 
            Vi forventer også at alle tar den helt ut på dansegulvet, så viktig å ha gode komfortable sko.
            </p>
            <h3>Ta med hvis du har:</h3>
            <ul>
              <li>Piknikk/hagestol</li>
              <li>Teppe til utover kvelden</li>
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
            og leker, som kubb o.l.
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
          <h1>Matservering</h1>
          <p>Ved ankomst til selskapslokalet vil det stå snacks fremme som alle kan forsyne seg av. 
              Det vil også være mulighet for å grille seg en “ventepølse”.
              Kakebordet vil også være åpent fra starten av selskapet.
              <br></br>
              <br></br>
              Middagen vil bestå av mexikansk taco-buffét og serveres kl.17
              Nattmat blir pizza og serveres kl.23
              <br></br>
              <br></br>
              Meld i fra på innmeldingsskjema om du har allergier eller preferanser.
          </p>
        </div>
        <div className="text-group">
          <h1>Overnatting</h1>
          <h3>Telt/Camping</h3>
          <p>De som ønsker å overnatte i telt, campingvogn eller hengekøye i hagen vår, er velkomne til dette. 
            Adresse: Skotfossvegen 292, hvitt murhus med én etasje til venstre
            Det er god plass, men send oss beskjed på forhånd så vi har oversikt over hvem som kommer. 
            Det er ikke lov å telte på Tors plass (selskapslokalet).
            Det er ikke lov å telte i hagen til naboen (trehuset med to etasjer til høyre).
          </p>
        </div>
        <div className="text-group">
          <h1>Transport</h1>
          <h3>Til Skotfoss med bil</h3>
          <p>
            Hvis du skal kjøre bil og har plass til passasjerer, 
            kan du registrere deg her, slik at det vises nedenfor 
            (les om parkering her [lenke]). Og hvis du trenger skyss, 
            kan du ta kontakt med en av de på listen nedenform
          </p>
          <table>
            <tr>
              <th>Navn:</th>
              <th>Telefon:</th>
              <th>Reiser til Skotfoss fra:</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
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
          <p>Bussrute P6 er eneste rute som går til og fra Skotfoss. Se farte.no for rutetabeller.
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
          <img alt="Busstabell p6"></img>
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
