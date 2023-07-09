import Banner from '@/components/banner/banner';
import './home.scss';
import Block from '@/components/block/block';
import { v1 } from 'uuid';
import CardList from '@/components/card-list/card-list';

const blocks = [
  {
    titleFirst: 'Featured',
    titleLast: 'Items',
    children: <CardList count={4} size='small' type='items' />
  },
  {
    titleFirst: 'Top',
    titleLast: 'Creators',
    children: <CardList count={6} size='large' type='top-creators' />
  },
  {
    titleFirst: 'Newest',
    titleLast: 'Items',
    children: <CardList count={12} size='small' type='items' />
  },
  {
    titleFirst: 'Featured',
    titleLast: 'Creators',
    children: <CardList count={2} size='large' type='featured-creators' />
  },
  {
    titleFirst: 'Crypto',
    titleLast: 'News',
    children: <CardList count={6} size='medium' type='news' />
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
