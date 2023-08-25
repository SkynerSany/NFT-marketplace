'use client'

import Navigation from "./navigation";
import './header.scss';
import Link from "next/link";
import Image from "next/image";
import UserIcon from "../user-icon/user-icon";
import { usePathname } from 'next/navigation';
import Search from "../search/search";

export default function Header() {
  const pathname = usePathname();

  function isMainPage() {
    return pathname === '/';
  }

  return (
    <header className="header">
      <div className="first-line">
        <div className="wrapper">
          <Link href='/' className="logo">
            <Image 
              src="/assets/images/Logo.svg" 
              alt="logo"
              width={100}
              height={100}
            />
            <span>CryptoBit</span>
          </Link>
          {
            isMainPage() ? <Navigation /> : <Search />  
          }
          <div className="user">
            <div className="user__tools">
              <Link href='/search' className="user__button user__button-search"></Link>
              <Link href='/cart' className="user__button user__button-cart"></Link>
              <Link href='/favorite' className="user__button user__button-favourite"></Link>
              <Link href='/notification' className="user__button user__button-notification"></Link>
            </div>
            <div className="user__info">
              <div className="user__info-container">
                <p className="user__name">Jos Shark</p>
                <p className="user__balance">
                  <span className="user__balance-number">123.45</span>
                  <span className="user__balance-currency">eth</span>
                </p>
              </div>
              <UserIcon link="/user" image="/assets/images/user-icon.svg" />
            </div>
          </div>
        </div>
      </div>
      {
        !isMainPage() && 
        <div className="second-line">
          <div className="wrapper">
            <Navigation />
          </div>
        </div>
      }
    </header>
  )
};
