import { IBlockProps } from "./block.interfaces";
import './block.scss';

export default function Block({ titleFirst, titleLast, children }: IBlockProps) {
  return (
    <section className="block">
      <h3 className="block__title">
        <span>{ titleFirst }</span>
        <span>{ titleLast }</span>
      </h3>
      <div className="block__container">
        {
          children
        }
      </div>
    </section>
  )
}
