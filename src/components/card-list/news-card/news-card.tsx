import './news-card.scss';
import Image from 'next/image';

export default function NewsCard() {
  return (
    <div className='news-card'>
      <div className="news-card__image-container">
        <Image 
          className='news-card__image'
          src={'/assets/images/card-image.png'}
          alt='nft image'
          fill={true}
        />
      </div>
      <div className="news-card__info">
        <p className="news-card__create-info">
          <span>by</span>
          <a href="/">CryptoBit,</a>
          <span>March 26th, 2021</span>
        </p>
        <h4 className="news-card__info-title">Bitcoin: Making a bear and bull case for where price might go next</h4>
        <p className="news-card__info-description">A cryptocurrency is a digital asset designed to work as a medium of exchange wherein individual coin ownership records...</p>
        <a href="/" className="news-card__info-read">{'Read More >'}</a>
      </div>
    </div>
  )
}
