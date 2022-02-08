import React from 'react';
import "./Startuppage.css"
const Startuppage = () => {
  return <div>
   <div className="startupheading">
          Startup Description
      </div>
      <div className="startuppage">
     
          <div className="startupdescription">
            <div className="content">
            <div className="startupheader">
                <div className="photostartup" style={{marginTop:'5vh'}}>
                <img src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png" alt="" width={'150px'} className='startupphoto'/>
                </div>
                <div className="aboutit">
                    <h4 style={{fontSize:'40px',fontFamily: '"Dongle", sans-serif'}}>PayTM</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quod illo quo aut minus quas magnam quidem, ad optio exercitationem corrupti illum dolor repellat cupiditate ab? Numquam sint repudiandae odio accusantium ipsum, quos optio, soluta labore dolor a facere inventore esse laudantium recusandae vero temporibus in natus! </p>
                    <br />  
                    <i class="fas fa-map-marker-alt"></i> B-121, Sector 5, Noida, Uttar Pradesh, India
                </div>
            </div>
            <div className="description">
                <h3>Description</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor fugit a quo velit minima temporibus ipsam distinctio tempora dolores quos iste eos neque, rem eveniet similique tenetur, enim ducimus doloribus recusandae voluptate voluptatum. At cumque, eligendi, iste inventore, consequatur obcaecati praesentium nemo suscipit adipisci modi veritatis laudantium nostrum. Atque nihil vel voluptates doloremque cumque reiciendis odit, quae accusamus illum cum est provident consequatur adipisci nemo corporis ratione ut tenetur, quia ducimus corrupti? Laboriosam harum voluptate incidunt vitae fuga est repellendus enim, non eum, sed, magnam et nihil libero animi commodi perferendis temporibus quisquam odio. Illum quos in incidunt eligendi accusamus, esse maxime consequuntur minima porro id ad quam! Consequuntur, itaque maxime ea sint mollitia quis tenetur, facere numquam nulla sit obcaecati cum culpa praesentium. Dolore officiis accusamus vitae, veniam a sed obcaecati magni eius officia dolores placeat provident inventore aut cumque, totam deleniti tenetur harum minus rerum libero exercitationem fuga voluptates molestias consequuntur! Tenetur iusto placeat quos aspernatur repellendus ad magnam tempore, vitae consequatur numquam? Ipsum quasi aspernatur fugit. Exercitationem illo ut asperiores illum odio, blanditiis excepturi beatae quae nulla adipisci. Enim earum quae culpa corporis quasi nesciunt cupiditate minus velit possimus amet vel, nam excepturi dolorem officia explicabo eum.</p>
            </div>
            <div className="informationpalletee">
                <div className="infosection">
                    <ul style={{listStyle:'none'}}>
                        <li className='infosectionlist'><i class="fas fa-project-diagram iconstartup"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Category</li>
                        <li className='infosectionlist'><i class="fas fa-calendar-day iconstartup"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Founded Date</li>
                        <li className='infosectionlist'><i class="fas fa-user iconstartup"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Founders</li>
                        <li className='infosectionlist'><i class="fas fa-link iconstartup"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Website</li>
                        <li className='infosectionlist'><i class="far fa-envelope iconstartup"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</li>
                    </ul>
                    
                </div>
                <div className="infovalues">
                <ul style={{listStyle:'none'}}>
                        <li className='infosectionlistb'>financial services</li>
                        <li className='infosectionlistb'>August 2010</li>
                        <li className='infosectionlistb'>Vijay Shekhar Sharma </li>
                        <li className='infosectionlistb'><a style={{textDecoration:'none'}} href=" https://paytm.com/" target={'_blank'}>Paytm.com</a></li>
                        <li className='infosectionlistb'>https://paytm.com/</li>
                    </ul>
                </div>
            </div>
          </div>
          </div>
      </div>
  </div>;
};

export default Startuppage;
