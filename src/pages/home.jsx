import { SimpleCard } from 'components/simpleCard';
import { CardText } from 'components/cardText';

const Home = () => (
  <>
    {/* Titulo */}
    <div className='justify-center flex'>
      <div className='p-12'>
        <SimpleCard title='Kai David Albornoz Madrigal' />
      </div>
    </div>
    {/* Contenido */}
    <div className='container mx-auto content-around justify-center flex'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='p-12 col-start-1'>
          <CardText
            title='¿Quién soy?'
            text='Soy estudiante de ingeniería de sistemas en la Universidad de Antioquia y me apasiona aprender algo nuevo cada día.

Durante mi formación, he adquirido conocimientos específicos en Git, Docker, Python, Java y Javascript y en los frameworks React.Js y Node.Js. Además, he visto temas relacionados con los micro servicios, metodologías ágiles, buenas prácticas de programación y el trabajo en equipo.'
          />
        </div>
        <div className='p-12'>
          <CardText />
        </div>
        <div className='p-12'>
          <CardText
            title='Información laboral'
            text='Auxiliar administrativo
                Universidad de Antioquia
                2019 - Actualidad'
          />
        </div>
        <div className='p-12'>
          <CardText />
        </div>
        <div className='p-12'>
          <CardText />
        </div>
        <div className='p-12'>
          <CardText />
        </div>
      </div>
    </div>
  </>
);

export default Home;
