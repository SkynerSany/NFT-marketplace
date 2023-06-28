'use client'
import Image from 'next/image'
import Link from 'next/link'
import './card.scss';
import Button from '../button/button';

export default function Card() {
  return (
    <div className='card'>
      <div className="card__info">
        <div className='card__image-container'>
          <Image 
            className='card__image'
            src={'/assets/images/card-image.png'}
            alt='nft image'
            fill={true}
          />
        </div>
        <div className="card__info-text">
          <p className="card__name">Golden Man</p>
          <div className="card__author">
            <Link href='/user' className="user__icon-container">
              <div className="user__icon"></div>
            </Link>
            <p className="user__name">@illusion</p>
          </div>
        </div>
        <div className="card__timer">
          <div className="card__timer-icon"></div>
          <p className="card__timer-time">
            <span>20h</span>
            <span>:</span>
            <span>50m</span>
            <span>:</span>
            <span>10s</span>
          </p>
        </div>
        <button className="card__favourite" aria-label='add nft to favourite'>
          <div className="card__favourite-icon"></div>
          <p className="card__favourite-count">22</p>
        </button>
      </div>
      <div className="card__bid">
        <div className="card__bid-info">
          <div className="card__bid-text">current bid</div>
          <div className="card__bid-number">2.01 ETH</div>
        </div>
        <Button handleClick={() => {}} type='color' size='medium' text='Place a Bid' />
      </div>
    </div>
  )
}
