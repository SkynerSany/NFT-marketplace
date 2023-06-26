'use client'
import Image from 'next/image';
import './search.scss';
import Select from 'react-select'

const options = [
  { value: 'allCategories', label: 'All Categories' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function Search() {
  return (
    <div className="search">
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: '100%',
            border: 'none',
            borderRadius: '12px 0 0 12px',
            padding: '0 0 0 10px',
          }),
        }}
        className='search__select'
        defaultValue={options[0]}
        options={options} 
      />
      <input className='search__input' type="search" name="search" placeholder='Enter your search here...' />
      <button className='search__button' type="submit">
      <Image 
        src="/assets/icons/Search.svg" 
        alt="button search"
        width={24}
        height={24}
      />
      </button>
    </div>
  )
};
