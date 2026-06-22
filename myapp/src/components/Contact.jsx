import React from 'react';
import { openingHours, socials } from '../../constants';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
  useGSAP(()=>{
   
  const titleSplit = new SplitText("#contact h2", {
    type: "words",
     
  }); 

  const timeline = gsap.timeline({
    scrollTrigger:{trigger:"#contact",
      start:"top center",
    },

    ease:'power1.inOut',
  
  })

 timeline
  .from(titleSplit.words, {
    opacity: 0,
    yPercent: 100,
    stagger: 0.02,
  })
  .from("#contact p, #contact h3", {
    opacity: 0,
    yPercent: 100,
    stagger: 0.02,
  })
  .to("#f-right-leaf", {
    y: -50,
    duration: 1,
    ease: "power1.inOut",
  })
  .to(
    "#f-left-leaf",
    {
      y: -50,
      duration: 1,
      ease: "power1.inOut",
    },
    "<"
  );


  })
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="footer-right-leaf"
        id="f-right-leaf"
      />

      <img
        src="/images/footer-left-leaf.png"
        alt="footer-left-leaf"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to find us</h2>

        <div>
          <h3>Visit us at</h3>
          <p>Kondapur, Hyderabad, Telangana, India</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>workCocktail@gmail.com</p>
          <p>+91 9876543210</p>
        </div>

        <div>
          <h3>Opening Hours</h3>
          {openingHours.map((hour, index) => (
            <p key={index}>
              {hour.day} - {hour.time}
            </p>
          ))}
        </div>

        <div>
            <h3>Socials</h3>
            <div className='flex-center gap-5'>
                {socials.map((social,index)=>(
                    <a href={social.url} key={index} target='_blank' aria-label={social.name} rel='noopener'>
                        <img src={social.icon} alt={social.name} />
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;