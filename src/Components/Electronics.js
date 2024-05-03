import { useState,useEffect } from 'react';
import Image from '../Images/IMG.jpg';
import Image1 from '../Images/ElectronicsImage1.jpg';
import Image2 from '../Images/ElectronicsImage2.jpg';
import Image3 from '../Images/ElectronicsImage3.jpg';
import Image4 from '../Images/ElectronicsImage4.jpg';
import Image5 from '../Images/ElectronicsImage5.jpg';
import Image6 from '../Images/ElectronicsImage6.jpg';
import Image7 from '../Images/ElectronicsImage7.jpg';
import Image8 from '../Images/ElectronicsImage8.avif';
import Image9 from '../Images/ElectronicsImage9.jpg';

function Electronics(){

    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);
    const[count3,setCount3]=useState(0);
    const[count4,setCount4]=useState(0);
    const[count5,setCount5]=useState(0);
    const[count6,setCount6]=useState(0);
    const[count7,setCount7]=useState(0);
    const[count8,setCount8]=useState(0);
    const[count9,setCount9]=useState(0);


    const incrementCount1 = () => {
        setCount(count1+1);
    };

    const decrementCount1 = () => {
        setCount(count1-1);
    };

    const incrementCount2 = () => {
        setCount(count2+1);
    };

    const decrementCount2 = () => {
        setCount(count2-1);
    };

    const incrementCount3 = () => {
        setCount(count3+1);
    };

    const decrementCount3 = () => {
        setCount(count3-1);
    };

    const incrementCount4 = () => {
        setCount(count4+1);
    };

    const decrementCount4 = () => {
        setCount(count4-1);
    };

    const incrementCount5 = () => {
        setCount(count5+1);
    };

    const decrementCount5 = () => {
        setCount(count5-1);
    };

    const incrementCount6 = () => {
        setCount(count2+1);
    };

    const decrementCount6 = () => {
        setCount(count2-1);
    };


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
                        <h5 className="card-title">Camera</h5> 
                        <div className='count' style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count}</p></div>
                        <br></br>
                        <div><a className="btn btn-primary" onClick={incrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a  className="btn btn-primary" onClick={decrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image2} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Mobile Phone</h5>
                        <div className='count' style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count}</p></div>
                        <br></br>
                        <div><a  className="btn btn-primary" onClick={incrementCount2} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a className="btn btn-primary" onClick={decrementCount2} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image3} className="card-img-top" alt="..."></img>
                    <div className="card-body" style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Headphones</h5>
                        <div className='count' style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count}</p></div>
                        <br></br>
                        <div><a  className="btn btn-primary" onClick={incrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a  className="btn btn-primary" onClick={decrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image4} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Smart Watch</h5>
                        <div className='count' style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count}</p></div>
                        <br></br>
                        <div><a  className="btn btn-primary" onClick={incrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a  className="btn btn-primary" onClick={decrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image5} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Joy Stick</h5>
                        <div className='count' style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count}</p></div>
                        <br></br>
                        <div><a  className="btn btn-primary" onClick={incrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a  className="btn btn-primary" onClick={decrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image6} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Laptop</h5>
                        <div className='count' style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count}</p></div>
                        <br></br>
                        <div><a className="btn btn-primary" onClick={incrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a  className="btn btn-primary" onClick={decrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image7} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Washing Machine</h5>
                        <div className='count' style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count}</p></div>
                        <br></br>
                        <div><a  className="btn btn-primary" onClick={incrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a  className="btn btn-primary" onClick={decrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image8} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Microwave Oven</h5>
                        <div className='count' style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count}</p></div>
                        <br></br>
                        <div><a className="btn btn-primary" onClick={incrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a  className="btn btn-primary" onClick={decrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image9} className="card-img-top" alt="..."></img>
                    <div className="card-body" style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Refridgerator</h5>
                        <div className='count' style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count}</p></div>
                        <br></br>
                        <div><a className="btn btn-primary" onClick={incrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a  className="btn btn-primary" onClick={decrementCount} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Electronics;