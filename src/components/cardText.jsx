export const CardText = ({ title = 'Titulo', text = 'Text' }) => (
  <div className='max-w-sm rounded overflow-hidden shadow-lg bg-orange-200'>
    <div className='px-6 py-4'>
      <div className='font-bold text-xl mb-2 bg-red-500 text-center'>
        {title}
      </div>
      <div className='px-6 py-4'>
        <div>
          <p className=''>{text}</p>
        </div>
      </div>
    </div>
  </div>
);
