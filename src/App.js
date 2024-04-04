// import { Button } from 'bootstrap';
import './App.css';
import img from './images/Images.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
      <div>
          <ul>
            <div>
              <li><a href="#home">testimonials</a></li>
              <li><a href="#services">About</a></li>
              <li><a href="#How it works">How it works</a></li>
              <li><a href="#about">Services</a></li>
              <li><a href="#testimonials">Home</a></li>
              </div>
            </ul>

            <h3><strong>Delivery</strong></h3>
      </div>
      
      
        <div className='container'>
        <div className='row'>
          <div className='col-6'>
                
                <h1 className="content"><b>Home Delivery </b>From<br/>
                Stores Near You</h1>

                <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed<br/>
                diam nonumy eirmod tempor innvidut ut labore et dolore<br/>
                magna aliquyam erat, sed diam volupettua.</p><br/>

                <input className="submit" type="submit" value="Download App"/>

          </div>
          <div className='col-6'>
            <div className="image">
              <img src={img} alt=""/>
            </div>
          </div>
          </div>
        </div>
        </>
  );
}

export default App;
