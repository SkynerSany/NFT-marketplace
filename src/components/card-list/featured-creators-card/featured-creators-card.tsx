'use client'
import UserIcon from '@/components/user-icon/user-icon';
import './featured-creators-card.scss';
import Image from 'next/image';
import Button from '@/components/button/button';

export default function FeauteredCreatorCard() {
  return (
    <div className='featured-creators-card'>
      <div className="featured-creators-card__wrapper">
        <div className="featured-creators-card__image-container">
          <Image 
            className='featured-creators-card__image'
            src={'/assets/images/card-image.png'}
            alt='nft image'
            fill={true}
          />
        </div>
        <div className="featured-creators-card__info">
          <div className="featured-creators-card__user">
            <div className="creator-card__user-container">
              <UserIcon link="/user" image="/assets/images/user-icon.svg" />
              <div className="featured-creators-card__user-info">
                <p className="featured-creators-card__user-name">Robotoco</p>
                <p className="featured-creators-card__user-link">@robotoco</p>
              </div>
            </div>
            <Button 
              handleClick={() => {}} 
              type='black' 
              size='small' 
              text='Follow'
            />
          </div>
          <p className="featured-creators-card__description">I have over 3 years of hands-on work experience in UI/UX design and rapid prototyping for rich Internet applications and mobile devices. I practice user-centered design principles basing design decisions on user needs and business goals.</p>
          <div className="featured-creators-card__author-info">
            <div className="featured-creators-card__table">
              <p>14.5K</p>
              <p>Followers</p>
            </div>
            <div className="featured-creators-card__table">
              <p>7.2K</p>
              <p>Following</p>
            </div>
            <div className="featured-creators-card__table">
              <p>516</p>
              <p>Created</p>
            </div>
            <div className="featured-creators-card__table">
              <p>32</p>
              <p>On Sale</p>
            </div>
          </div>
          <div className="featured-creators-card__author-cards">
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
            <div className="creator-card__card-container">
              <Image 
                className='creator-card__card-image'
                src={'/assets/images/card-image.png'}
                alt='nft image'
                fill={true}
              />
            </div>
            <div className="creator-card__card-container">
              <p>...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
