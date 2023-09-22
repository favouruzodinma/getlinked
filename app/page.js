'use client'
import { useState } from 'react';
import AccordionItem from './component/Accordionitem';
import Button from './component/button'
// import collapse from './component/collapse';
export default function Home() {

  const [open, setOpen] = useState(false);
  const toggle = (index) =>{
    if(open === index){
      return setOpen(null)
    }
    setOpen(index)
  }
  const faqData = [
    
    {
      question: 'What is GetLinked Hackathon 1.0?',
      answer:
        'GetLinked Hackathon 1.0 is a tech innovation competition where participants can showcase their coding and problem-solving skills to create innovative solutions for real-world problems.'
    },
    {
      question: 'Who can participate in the hackathon?',
      answer:
        'The hackathon is open to students, developers, designers, and anyone passionate about technology. You can participate individually or as a team.'
    },
    {
      question: 'How can I register for the hackathon?',
      answer:
        'To register for the hackathon, visit our registration page and follow the instructions. Make sure to provide accurate information.'
    },
    {
      question: 'What are the prizes for the winners?',
      answer:
        'We have exciting prizes for the winners, including cash rewards, mentorship opportunities, and more. Check the prizes section on our website for detailed information.'
    },
    {
      question: 'When and where will the hackathon take place?',
      answer:
        'The hackathon will take place on [Date] at [Location]. Be sure to check our schedule for the latest updates and event details.'
    }
  ];

  return (
    <main>
       <div className='linediv'>
          <h1>
            <i>Igniting a Revolution in HR Innovation</i>
          </h1>
          <div className='line'></div>
        </div>

        <div  className='insidehours'>
            <div className='inside1'>

              <div className='firstimg'></div>

              <div className='textArea'>
                <p>
                  Participate in getlinked tech hackhathon 2023 stand <br />
                  a chance to win a Big prize
                </p>
                <Button name='register'/> 
                  <div className='hours'>
                    <pre>00 <small>H</small> </pre>
                    <pre>00 <small>M</small> </pre>
                    <pre>00 <small>S</small> </pre>
                  </div>
              </div>

          </div>
          <div className='inside2'>
            
            <div className='hackerthonguy'></div>
          </div>

        </div>

        <section className='part2'>
          <div className='bulbdiv'>
              <div className='lightbulb'></div>
          </div>

         <div className='text2div'>
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

         <div className='ladyDiv'>
         <div className='chairlady'></div>
         </div>
        </section>

        <section className='part4'>
            <div className='workersDiv'>
              <div className='workers'></div>
            </div>
          <div className='sm:flex sm:justify-center max-sm:w-[100vw] sm:items-center'>
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
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

         <section className='part5'>
          <div className='text5'>
            <h1>
              Frequently Ask <br />
               <span>
                Question
               </span>
            </h1>
            <p>
              We got answers to the question that you might <br />
              want to ask about getlinked Hackathon 1.0
            </p>

          <div className='collapseitem'>
            {faqData.map((data, index) => {
                return <AccordionItem key={index} open={index === open}  question={data.question} answer={data.answer} toggle={()=>toggle(index)} />;
              })}
          </div>
            
          </div>

          <div className='thinkmanDiv'>
            <div className='thinkman'></div>
          </div>
         </section>
    </main>
  )
}
