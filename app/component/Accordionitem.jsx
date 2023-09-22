import React from 'react'
import {Collapse} from 'react-collapse'
import {AiOutlineMinus , AiOutlinePlus} from 'react-icons/ai'


const AccordionItem = ({open , toggle, question , answer}) => {
  return (
    <div className=' lg:w-[35vw] w-full border-b '>
        <div className=' pt-4 flex justify-between items-center cursor-pointer ' onClick={toggle}>
            <p className='text-[12px] '>{question}</p>
            <div className='text-[15px]'>
              {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
        </div>
        <Collapse isOpened={open}>
            <div className=' pb-[10px] '>
                  {answer}
            </div>
        </Collapse>
    </div>
  )
}

export default AccordionItem
