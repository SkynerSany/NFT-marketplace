import './user-icon.scss';
import Link from 'next/link';
import { IUserIconProps } from './user-icon.interfaces';
import Image from 'next/image';

export default function UserIcon({ link, image }: IUserIconProps) {
  return (
    <Link href={link} className="user__icon-container">
      <Image 
        className='user__icon'
        alt='user icon'
        src={image}
        fill={true}
      />
      <div className="user__icon"></div>
    </Link>
  )
}
