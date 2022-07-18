import { Title } from 'components/title';

export const CardText = ({ title = 'Titulo', text = 'Text' }) => (
  <div className='p-2'>
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-orange-200'>
      <div className='px-6 py-4'>
        <Title title={title} />
        <div className='px-6 py-4'>
          <div>
            <p className=''>{text}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
