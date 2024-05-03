import { useState,useEffect } from 'react';
import Image from '../Images/IMG.jpg';
import Image1 from '../Images/StationeryImage1.jpg';
import Image2 from '../Images/StationeryImage2.jpg';
import Image3 from '../Images/StationeryImage3.jpg';
import Image4 from '../Images/StationeryImage4.jpg';
import Image5 from '../Images/StationeryImage5.jpg';
import Image6 from '../Images/StationeryImage6.jpeg';
import Image7 from '../Images/StationeryImage7.jpg';
import Image8 from '../Images/StationeryImage8.jpg';
import Image9 from '../Images/StationeryImage9.jpg';

function Stationery(){
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
                        <h5 className="card-title">Color Pencil</h5> 
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
                        <h5 className="card-title">Eraser</h5>
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
                        <h5 className="card-title">Scissors</h5>
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
                        <h5 className="card-title">Notebook</h5>
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
                        <h5 className="card-title">Highlighter</h5>
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
                        <h5 className="card-title">Pencil</h5>
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
                        <h5 className="card-title">Sharpener</h5>
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
                        <h5 className="card-title">Pen</h5>
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
                        <h5 className="card-title">Calculator</h5>
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

export default Stationery;