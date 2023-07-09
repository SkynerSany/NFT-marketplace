import Image from "next/image";
import './footer.scss';

export default function Footer() {
  return (
    <>
      <footer>
        <div className='footer-banner-container'>
          <Image 
            className='footer-banner'
            src={'/assets/images/footer-banner.png'}
            alt='footer banner'
            fill={true}
          />
        </div>
        <div className="footer">
          <div className="wrapper">
            
          </div>
        </div>
      </footer>
    </>
  )
}
