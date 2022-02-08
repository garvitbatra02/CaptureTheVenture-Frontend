import React from 'react'
import "./Login_startup.css"
const LoginStartup = () => {
    return (
        <div>
            <div className="maincontainer">
                <div className="loginsection">
                <div className="signupheading">
                    Sign Up For Startups
                </div>
                <div className="loginentries">
                    <div className="entry">
                        Name
                        <br />
                        <input  type="text" name="name" id="" style={{minWidth:'200px',borderRadius:'300px',height:'4vh',border:'2px solid white', marginTop:'2vh'}} />
                    </div>
                    <div className="entry">
                        Name
                        <br />
                        <input  type="text" name="name" id="" style={{minWidth:'200px',borderRadius:'300px',height:'4vh',border:'2px solid white',marginTop:'2vh'}}/>
                    </div>
                    <div className="entry">
                        Name
                        <br />
                        <input type="text" name="name" id="" style={{minWidth:'200px',borderRadius:'300px',height:'4vh',border:'2px solid white',marginTop:'2vh'}} />
                    </div>
                </div>
                </div>
              
            </div>
        </div>
    )
}

export default LoginStartup
