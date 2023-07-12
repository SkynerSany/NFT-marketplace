import Image from "next/image";
import './footer.scss';
import Link from "next/link";

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
            <div className="footer__top-row">
              <div className="footer__left-column">
                <Link href='/' className="logo">
                  <Image 
                    src="/assets/images/Logo.svg" 
                    alt="logo"
                    width={100}
                    height={100}
                  />
                  <span>CryptoBit</span>
                </Link>
                <p className="footer__about">We are a huge marketplace dedicated to connecting great artists of all mediums with their fans and unique token collectors!</p>
                <div className="footer__social">
                  <a href="/" className="footer__social-link">
                    <Image 
                      src="/assets/icons/facebook.svg" 
                      alt="logo"
                      width={16}
                      height={16}
                    />
                  </a>
                  <a href="/" className="footer__social-link">
                    <Image 
                      src="/assets/icons/google.svg" 
                      alt="logo"
                      width={16}
                      height={16}
                    />
                  </a>
                  <a href="/" className="footer__social-link">
                    <Image 
                      src="/assets/icons/messenger.svg" 
                      alt="logo"
                      width={16}
                      height={16}
                    />
                  </a>
                  <a href="/" className="footer__social-link">
                    <Image 
                      src="/assets/icons/discord.svg" 
                      alt="logo"
                      width={16}
                      height={16}
                    />
                  </a>
                  <a href="/" className="footer__social-link">
                    <Image 
                      src="/assets/icons/twitch.svg" 
                      alt="logo"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>
              </div>
              <div className="footer__right-column">
                <div className="footer__navigation-column">
                  <p className="footer__navigation-title">CryptoBit Market</p>
                  <div>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/">Explore</a></li>
                      <li><a href="/">Creators</a></li>
                      <li><a href="/">Collectors</a></li>
                      <li><a href="/">Spotlight</a></li>
                    </ul>
                    <ul>
                      <li><a href="/">Profile Page</a></li>
                      <li><a href="/">Artwork Page</a></li>
                      <li><a href="/">Activity</a></li>
                      <li><a href="/">Upload Art</a></li>
                    </ul>
                  </div>
                </div>
                <div className="footer__navigation-column">
                  <p className="footer__navigation-title">CryptoBit Market</p>
                  <ul>
                    <li><a href="/">3D Artworks</a></li>
                    <li><a href="/">Motion Graphics</a></li>
                    <li><a href="/">Illustrations</a></li>
                    <li><a href="/">Photography</a></li>
                    <li><a href="/">Pop Culture</a></li>
                  </ul>
                </div>
                <div className="footer__navigation-column">
                  <p className="footer__navigation-title">Helpful Links</p>
                  <ul>
                    <li><a href="/">Our Blog</a></li>
                    <li><a href="/">Become a Creator</a></li>
                    <li><a href="/">FAQs</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer__bottom-row">
              <p>CryptoBit 2022 - All Rights Reserved</p>
              <div>
                <a href="/">Terms of Service</a>
                <a href="/">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
