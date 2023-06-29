import UserIcon from '@/components/user-icon/user-icon';
import './creator-card.scss';
import Image from 'next/image';

export default function CreatorCard() {
  return (
    <div className='creator-card'>
      <div className="creator-card__wrapper">
        <div className="creator-card__user">
          <UserIcon link="/user" image="/assets/images/user-icon.svg" />
          <div className="creator-card__user-info">
            <p className="creator-card__user-name">Robotoco</p>
            <p className="creator-card__user-link">@robotoco</p>
          </div>
        </div>
        <div className="creator-card__created">
          <p className="creator-card__created-count">1538</p>
          <p className="creator-card__created-text">Created</p>
        </div>
        <div className="creator-card__created-cards">
          <div className="creator-card__card-container">
            <Image 
              className='creator-card__card-image'
              src={'/assets/images/card-image.png'}
              alt='nft image'
              fill={true}
            />
          </div>
          <div className="creator-card__card-container">
            <Image 
              className='creator-card__card-image'
              src={'/assets/images/card-image.png'}
              alt='nft image'
              fill={true}
            />
          </div>
          <div className="creator-card__card-container">
            <Image 
              className='creator-card__card-image'
              src={'/assets/images/card-image.png'}
              alt='nft image'
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
