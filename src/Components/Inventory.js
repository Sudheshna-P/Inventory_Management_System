import { useState,useEffect } from 'react';
import Image from '../Images/IMG.jpg';
import Image1 from '../Images/InventoryImage1.jpg';
import Image2 from '../Images/InventoryImage2.jpg';
import Image3 from '../Images/InventoryImage3.jpg';
import Image4 from '../Images/InventoryImage4.jpg';
import Image5 from '../Images/InventoryImage5.jpg';
import Image6 from '../Images/InventoryImage6.jpg';
import Image7 from '../Images/InventoryImage7.jpg';
import Image8 from '../Images/InventoryImage8.jpg';
import Image9 from '../Images/InventoryImage9.jpg';
import Image10 from '../Images/InventoryImage10.jpg';
import Image11 from '../Images/InventoryImage11.jpg';
import Image12 from '../Images/InventoryImage12.jpg';

function Inventory(){
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
        marginBottom:'3rem',
        
    };

    return(

        <div >

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px'}}>
            <div className="card" style={cardStyle}>
                <img src={Image1} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Stationery Items</h5> 
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image2} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Electronic Items</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image3} className="card-img-top" alt="..."></img>
                    <div className="card-body" style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Footwear</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image4} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Cosmetics</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image5} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Dairy Products</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image6} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Snacks</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image7} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Groceries</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image8} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Clothing</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image9} className="card-img-top" alt="..."></img>
                    <div className="card-body" style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Jewellery</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image10} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Furniture</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image11} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Medicine</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image12} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Toys</h5>
                        <a href="#" className="btn btn-primary" style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none'}}>View</a>
                    </div>
            </div>
        </div>
        <style>{`
                /* CSS for hover effects */
                .card:hover {
                    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
                }

                .btn-primary:hover {
                    background-color: #d687e5;
                }
            `}</style>
        </div>
    );
}

export default Inventory;