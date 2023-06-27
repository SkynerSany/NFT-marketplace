import Banner from '@/components/banner/banner';
import './home.scss';
import Block from '@/components/block/block';
import { v1 } from 'uuid';

const blocks = [
  {
    titleFirst: 'Featured',
    titleLast: 'Items',
    children: <></>
  },
  {
    titleFirst: 'Top',
    titleLast: 'Creators',
    children: <></>
  },
  {
    titleFirst: 'Newest',
    titleLast: 'Items',
    children: <></>
  },
  {
    titleFirst: 'Featured',
    titleLast: 'Creators',
    children: <></>
  },
  {
    titleFirst: 'Crypto',
    titleLast: 'News',
    children: <></>
  }
]

export default function Home() {
  return (
    <div className="page home">
      <Banner />
      <div className="wrapper">
        {
          blocks.map((blockData) => (
            <Block 
              key={ v1() }
              titleFirst={blockData.titleFirst} 
              titleLast={blockData.titleLast}
              children={blockData.children} 
            />
          ))
        }
      </div>
    </div>
  )
}
