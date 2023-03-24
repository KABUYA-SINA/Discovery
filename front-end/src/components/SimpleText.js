import Typewriter from 'typewriter-effect'
import '../sass/pages/_simple.scss'

function SimpleText() {
  return (
    <div className='simple-text'>
        <Typewriter
            options={{
                strings: ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Mboté', 'Szia', 'Hallo', 'Hej', 'Tere', 'Yasou', 'Hei', 'Hej', 'salut' ],
                autoStart: true,
                loop: true,
                delay: 100,
            }}
        />
    </div>
  )
}

export default SimpleText