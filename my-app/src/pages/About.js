import './About.css'

export default function About(){
    return <div className="About">
        <p className='Paragraph' > 
            Passionate and enthusiastic 4th-year Computer Science major at UW-Madison with great interpersonal skills 
            and interested in a job at Web app development, Machine Learning, Optimization, and Game Development. 
        </p>
        <div className="Skills">
            <ul className="Language"> Language Proficiency
                <li>
                    <p>English</p> <span className="bar"><span className="English"></span></span>
                </li>
                <li>
                    <p>Mandarin</p> <span className="bar"><span className="Mandarin"></span></span>
                </li>
                <li>
                    <p>Cantonese</p> <span className="bar"><span className="Cantonese"></span></span>
                </li>
            </ul>

            <ul className="Coding"> Programming Proficiency
                <li>
                    <p>Python</p> <span className="Coding bar"><span className="Python"></span></span>
                </li>
                <li>
                    <p>Java</p> <span className="Coding bar"><span className="Java"></span></span>
                </li>
                <li>
                    <p>C++</p> <span className="Coding bar"><span className="C"></span></span>
                </li>
            </ul>
        </div>
    </div>
}