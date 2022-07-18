import React from 'react';
import { SocialNetwork } from 'components/socialNetwork';
import { Title } from 'components/title';

export const SimpleCard = ({ title = 'Titulo' }) => (
  <div className='max-w-sm rounded overflow-hidden shadow-lg bg-red-500'>
    <div className='px-6 py-4'>
      <Title title={title} />
      <div className='px-6 py-4 columns-2'>
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
