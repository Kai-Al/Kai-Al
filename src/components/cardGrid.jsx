import { Title } from 'components/title';

export const CardGrid = ({
  title = 'Titulo',
  text1 = 'Text',
  text2 = 'Text 2',
  text3,
  text4,
}) => (
  <div className='p-2'>
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-orange-200'>
      <div className='px-6 py-4'>
        <Title title={title} />
        <div className='container mx-auto content-around justify-center flex p-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <p className=''>{text1}</p>
            </div>
            <div>
              <p className=''>{text2}</p>
            </div>
            <div>
              <p className=''>{text3}</p>
            </div>
            <div>
              <p className=''>{text4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
