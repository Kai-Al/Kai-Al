import { SimpleCard } from 'components/simpleCard';
import { CardText } from 'components/cardText';
import { CardGrid } from 'components/cardGrid';

const Home = () => (
  <div className='bg-green-200 min-w-full'>
    {/* Titulo */}
    <div className='justify-center flex'>
      <div className='py-12'>
        <SimpleCard title='Kai David Albornoz Madrigal' />
      </div>
    </div>
    {/* Contenido */}
    <div className='container mx-auto content-around justify-center flex'>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <CardText
          title='¿Quién soy?'
          text='Soy estudiante de ingeniería de sistemas en la Universidad de Antioquia y me apasiona aprender algo nuevo cada día.

                Durante mi formación, he adquirido conocimientos específicos en Git, Docker, Python, Java y Javascript y en los frameworks React.Js y Node.Js. Además, he visto temas relacionados con los micro servicios, metodologías ágiles, buenas prácticas de programación y el trabajo en equipo.'
        />
        <CardGrid
          title='Información academica'
          text1='Estudié la técnica de software infórmatico desde 2015 hasta 2016 en el SENA'
          text2='Estudio ingeniería de sistemas desde el 2019 en la universidad de Antioquia.'
        />
        <CardText
          title='Información laboral'
          text='Auxiliar administrativo en la universidad de Antioquia desde 2019 hasta la actualidad.'
        />
        <CardGrid
          title='Hobbies'
          text1='Visitar pueblos de mi región'
          text2='Jugar videojuegos de estrategia'
          text3='Leer noticias de actualidad y novelas de fantasia'
          text4='Salir a caminar'
        />
        <CardGrid
          title='Cursos y certifaciones'
          text1='Análisis de datos con power Bi'
          text2='Curso de excel básico'
          text3='Curso profesional de Git y GitHub'
        />
        <CardGrid
          title='Idiomas'
          text1='Inglés básico'
          text2='Español nativo'
        />
      </div>
    </div>
  </div>
);

export default Home;
