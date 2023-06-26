import './Home.css'
import Typewriter from 'typewriter-effect';

export default function Home(){
    return <h1 className='Home'>
        <p className = "Typing" /> Welcome to My website!
        <h1 > Han Yu Foong
            <Typewriter
            options={{
                strings: ['Tech enthusiast', 'An aspiring Software Engineer', 'Student enrolled at UW-Madison'],
                autoStart: true,
                loop: true,
            }}/> 
        </h1>
    </h1>
}