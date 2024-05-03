import { useState,useEffect } from 'react';
import Image from '../Images/IMG.jpg';
import Image1 from '../Images/FootwearImage1.jpg';
import Image2 from '../Images/FootwearImage2.jpg';
import Image3 from '../Images/FootwearImage3.jpg';
import Image4 from '../Images/FootwearImage4.jpeg';
import Image5 from '../Images/FootwearImage5.jpg';
import Image6 from '../Images/FootwearImage6.jpg';
import Image7 from '../Images/FootwearImage7.jpg';
import Image8 from '../Images/FootwearImage8.jpg';
import Image9 from '../Images/FootwearImage9.jpg';

function Footwear(){
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

      const cardStyle = {
        width: '22rem',
        marginLeft: '3rem',
        marginRight:'3rem',
        marginTop:'3rem',
        marginBottom:'3rem'
    };

    return(

        <div >

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px'}}>
            <div className="card" style={cardStyle}>
                <img src={Image1} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Rosegold Pumps</h5> 
                        <label>No. Of Stocks Available: </label>
                        <br></br>
                        <div><a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image2} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Loafers</h5>
                        <label>No. Of Stocks Available: </label>
                        <br></br>
                        <div><a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image3} className="card-img-top" alt="..."></img>
                    <div className="card-body" style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Black Shoes</h5>
                        <label>No. Of Stocks Available: </label>
                        <br></br>
                        <div><a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image4} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Slippers</h5>
                        <label>No. Of Stocks Available: </label>
                        <br></br>
                        <div><a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image5} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Sneakers</h5>
                        <label>No. Of Stocks Available: </label>
                        <br></br>
                        <div><a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image6} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Stilletos</h5>
                        <label>No. Of Stocks Available: </label>
                        <br></br>
                        <div><a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image7} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Red Pumps</h5>
                        <label>No. Of Stocks Available: </label>
                        <br></br>
                        <div><a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image8} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">White Pumps</h5>
                        <label>No. Of Stocks Available: </label>
                        <br></br>
                        <div><a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image9} className="card-img-top" alt="..."></img>
                    <div className="card-body" style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Yellow Pumps</h5>
                        <label>No. Of Stocks Available: </label>
                        <br></br>
                        <div><a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Footwear;