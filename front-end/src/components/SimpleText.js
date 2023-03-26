import Typewriter from 'typewriter-effect';
import '../sass/pages/_simple.scss';

function SimpleText() {
  return (
    <div className='simple-text'>
        <Typewriter
            options={{
                strings: ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Mboté', 'Szia', 'Guten Tag', 'Hej', 'Tere', 'Yasou', 'Hei',
                 'Hej', 'Salut', 'Salam', 'Bonjou', 'Goeiedag', 'Houje', 'Konnichi Wa' ],
                autoStart: true,
                loop: true,
                delay: 100,
            }}
        />
    </div>
  )
}

export default SimpleText