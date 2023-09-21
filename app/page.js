import Image from 'next/image'
import Button from './component/button'
export default function Home() {
  return (
    <main>
       <div className='linediv'>
          <h1>
            <i>Igniting a Revolution in HR Innovation</i>
          </h1>
          <div className='line'></div>
        </div>

        <div  className='inside'>
            <div className='inside1'>
              <div className='firstimg'></div>
              <div className='textArea'>
                <p>
                  Participate in getlinked tech hackhathon 2023 stand <br />
                  a chance to win a Big prize
                </p>
                <Button name='register'/>
              </div>
          </div>
          <div className='inside2'>
            
            <div className='hackerthonguy'></div>
          </div>
        </div>

        <section className='part2'>
          <div className='lightbulb'>

          </div>
          <div className='text2'>
            <h1>
              Introdruction to getlinked <br/>
               <span>
                  tech Hackathon 1.0
              </span>
            </h1>
            <p>
              Our Tech hackathon is a making point of voilutriary and its purpose is as <br />
              clear as day to shape the future . Whether youre a coding genius, a <br />
              design material or a concept wizard . you;ll have the chance to transform <br />
              your idea into reality. Solving real world problems, pushing the boundaries <br />
              of technology and creating solution that can change the world <br />
              that what we're all about. 
            </p>
          </div>
        </section>
        <section className='part3'>
        <div className='text3'>
          <h1>
            Rules and <br/>
            <span>
                Guidelines
            </span>
          </h1>
          <p>
            Our Tech hackathon is a making point of voilutriary and its purpose is as <br />
            clear as day to shape the future . Whether youre a coding genius, a <br />
            design material or a concept wizard . you;ll have the chance to transform <br />
            your idea into reality. Solving real world problems, pushing the boundaries <br />
            of technology and creating solution that can change the world <br />
            that what we're all about. 
          </p>
        </div>

        <div className='chairlady'></div>
        </section>

        <section className='part4'>
          <div className='workers'></div>

          <div className='text4'>
            <h1>
              Judging Criteria <br />
              <span>Key attributes</span>
            </h1>
            <p>
              <span>Innovation and Creativity:</span>Evaluate  the uniqueness and creativity of the <br />
              solutioncommand whether it addresses a read-more problem in a novel <br />
              way or Introdruction creative features.
            </p>
            <p>
            <span>Functionality:</span>Assess how well the solution works. Does it Perform its <br />
            intenddee functions effectively and without major issuess judges would <br />
            consider the completeness and rebustness of the solution..
            </p>
            <p>
            <span>Impart and Revelence:</span>Determine the potential impart of the solution <br />
            in the real world . Deos it address a significant problem, and is it relevant <br />
            to the target audience. Judges would assess the potential accial. <br />
            economic or enforcemental benefits
            </p>
            <p>
            <span>Technical Complexity:</span>Evaluate the technical sophasication ofthe solution <br/>
            Juged would considerthe complexsity of the codethe used of ehanced  <br />
            Knowldegeor algorithm and the societbility of the sultion.
            </p>
            <p>
            <span>Advance to Hackerathon Rules</span>Evaluate the technical sophasication ofthe solution <br/>
            Juged would considerthe complexsity of the codethe used of ehanced  <br />
            Knowldegeor algorithm and the societbility of the sultion.
            </p>
            <Button name='Read More' />
          </div>
        </section>
    </main>
  )
}
