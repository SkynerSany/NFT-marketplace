export interface ICardListProps {
  count: number;
  size: 'small' | 'medium' | 'large';
  type: 'items' | 'top-creators' | 'featured-creators' | 'news';
}