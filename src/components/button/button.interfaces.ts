export interface IButtonProps {
  handleClick: () => void;
  size: 'large' | 'medium' | 'small';
  type: 'color' | 'black';
  text: string;
}