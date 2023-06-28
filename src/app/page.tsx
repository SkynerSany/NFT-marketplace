import Banner from '@/components/banner/banner';
import './home.scss';
import Block from '@/components/block/block';
import { v1 } from 'uuid';
import Card from '@/components/card/card';
import CardList from '@/components/card-list/card-list';

const blocks = [
  {
    titleFirst: 'Featured',
    titleLast: 'Items',
    children: <CardList count={4} />
  },
  {
    titleFirst: 'Top',
    titleLast: 'Creators',
    children: <></>
  },
  {
    titleFirst: 'Newest',
    titleLast: 'Items',
    children: <CardList count={12} />
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
