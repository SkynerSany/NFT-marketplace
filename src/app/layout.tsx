import Header from '@/components/header/header';
import './layout.scss';
import Footer from '@/components/footer/footer';

interface IRootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: 'NFT marketplace',
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
