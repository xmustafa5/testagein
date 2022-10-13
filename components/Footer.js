import Image from "next/image"
import cta from "../public/assets/images/cta-bg-img.png"
import cta1 from "../public/assets/images/logo-footer.png"
import style2 from "./../styles/footer.module.css"
import { Icon } from '@iconify/react';





const Footer = () => {
    return(
     <div className={style2.er}  >
         <section className={style2.contact}>
        <div className={style2.contactcard} >
            <div className={style2.contactcardbg}><Image src={cta} /></div>
        
          <h2>Start Your Best Online Classes With Us</h2>
          <button className={style2.btn}>
            <p className={style2.btntext}>Explore More</p>
            <span className={style2.square}></span>
          </button>
        </div>
      </section>
      <footer>
      <div className={style2.footergrid}>
        <div className={style2.griditem}>
          <div className={style2.footerlogo}>
          <Image src={cta1}/>

            
          </div>
          <p className={style2.footertext}>
            Duis a tempor magna. Maecenas ligula felis, imperdiet quis arcu eget, blandit ultricies risus. Vivamus
            fringilla urna
            vel risus congue accumsan.
          </p>
          <div className={style2.sociallink}>
            <div className={style2.sociallink2}>
            <a >
            <Icon icon="ion:logo-facebook" />
            </a>
            <a >        <Icon icon="ion:logo-instagram" />

            </a>
            <a >        <Icon icon="ion:logo-twitter" />

            </a>
            <a >        <Icon icon="ion:logo-youtube" />

            </a></div>
          </div>
        </div>
        
      </div>
      <p className={style2.copyright}>
        Copyright  <a >oneline eduction</a>
      </p>
    </footer>
      </div>
    );
  }
  
  export default Footer;