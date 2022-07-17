import React from 'react';
import { SocialNetwork } from 'components/socialNetwork';

export const SimpleCard = ({
  title = 'Titulo',
  text1 = 'Texto',
  text2 = 'Texto 2',
}) => (
  <div className='max-w-sm rounded overflow-hidden shadow-lg bg-red-500'>
    <div className='px-6 py-4'>
      <div className='font-bold text-xl mb-2'>{title}</div>
      <div className='px-6 py-4 columns-2'>
        <p className='text-gray-700 text-base'> {text1} </p>
        <p className='text-gray-700 text-base'> {text2} </p>
        <div className='columns-2'>
          <SocialNetwork
            text='https://github.com/Kai-Al'
            image='https://img.icons8.com/ios-glyphs/30/000000/github.png'
          />
          <SocialNetwork
            text='https://www.linkedin.com/in/kai-david-albornoz-madrigal/'
            image='https://img.icons8.com/ios-glyphs/30/000000/linkedin.png'
          />
          <SocialNetwork
            text='mailto:kai.albornoz@gmail.com'
            image='https://img.icons8.com/ios-glyphs/30/000000/gmail.png'
          />
        </div>
      </div>
    </div>
  </div>
);
