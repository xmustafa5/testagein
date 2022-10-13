import Image from "next/image"
import aboutbg from "../public/assets/images/about-img-bg.png"
import aboutor from "../public/assets/images/about-img.png"
import banneralimenticon3 from "../public/assets/images/banner-aliment-icon-3.png"
import banneralimenticon1 from "../public/assets/images/banner-aliment-icon-1.png"
import stylo from "./../styles/df.module.css"


const aboutus =()=>{
    return( <div className="trak">  
       
        <section className={stylo.about} >
        <div className={stylo.aboutleft}>
            <div className="know"> 
        <div className={stylo.imgbox}>
    <Image src={aboutor} alt="banner image" className={stylo.bannerimg}/>
  <div className={stylo.icon}> 
 
  <div className={stylo.icon1} ><Image src={banneralimenticon1}  alt=""  width="222" height="55" /></div>
   <div className={stylo.icon3}> <Image src={banneralimenticon3}  alt=""  width="212" height="55"/></div>
   

   </div>
</div>
            </div>
            
          
        </div>
        <div className={stylo.flexing}>
        <div>
        <div className={stylo.aboutright}>
          <p className={stylo.title}>About Us</p>
          <h2 className={stylo.sectiontitle}>We Have Best Online Education</h2>
          <p className={stylo.text}>
            Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa vel, porttitor
            semper magna.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <ul className={stylo.aboutul}>
            <li>
              <ion-icon name="checkmarkcircle"></ion-icon>
              <p>Suspendisse nunc massa, pellentesque eu nibh eget.</p>
            </li>
            <li>
              <ion-icon name="checkmarkcircle"></ion-icon>
              <p>Suspendisse nunc massa, pellentesque eu nibh eget.</p>
            </li>
            <li>
              <ion-icon name="checkmarkcircle"></ion-icon>
              <p>Suspendisse nunc massa, pellentesque eu nibh eget.</p>
            </li>
          </ul>
          <button className={stylo.btn}>
            <p className={stylo.btntext}>Explore More</p>
            <span className={stylo.square}></span>
          </button>
        </div></div > </div>
      </section>
      </div>
    )
}
export default aboutus;