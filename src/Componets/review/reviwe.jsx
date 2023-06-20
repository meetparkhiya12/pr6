import React, { useState } from "react"
import './Reviwe.css';


function Reviwe() {

    const [inputvalue, setInputValue] = useState({
        fname : ''
    });

    
    const [data,setData] = useState([]);


    const changevalue = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setInputValue({...inputvalue, [name] : value})
    }


    const handlesubmit = (e) =>{
        e.preventDefault();
        setData([...data,inputvalue]);
    }
    

  return (
    <>
        <div className="container">
            <form className="form" onSubmit={handlesubmit}>
                <label>Add Your Coment:-</label><br /><br />
                <input type="text" name="fname" value={inputvalue.fname} onChange={changevalue} />

                <button type="submit">submit</button>
            </form>
        </div>

        <div>
            
          {
                  data.length >= 1 ?
                  data.map((d) => {
                      return(
                        <div className="quote-container">

                        <div className="star-rating">★★★★★</div>
                      
                        <h1 className="quote">
                            {
                                d.fname
                            }
                        </h1>
                      
                        <div className="reviewer-photo">
                       
                        </div>
                      
                        <div className="reviewer-details">
                          <span className="name">{d.fname}</span>
                       
                        </div>
                      
                        <div className="bottom">
                          <svg width="100%" height="80">
                            <rect width="100%" height="80" className="shape-fill" />
                          </svg>
                          <svg className="curves" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 200" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".35" className="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                          </svg>
                        </div>
                      
                      </div>
                      )
                  })
                  :
                  ''

          }
            
        </div>
    </>
  )
}

export default Reviwe


