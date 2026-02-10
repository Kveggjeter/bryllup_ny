import oss_1 from './media/oss_1.jpg'
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
    <p>fddddddddddddddddddddddddddddd</p>
    </div>
    </>
  );
}

export default App;
