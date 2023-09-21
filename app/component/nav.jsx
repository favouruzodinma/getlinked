import React from 'react'
import Link from 'next/link'
import Button from './button'
export default function nav() {
  return (
    <header className='header'>
        <h2>
            get<span>linked</span>
        </h2>
        <nav>
            <ul>
                <li><Link href='/'></Link></li>
                <li><Link href='/timeline'>Timeline</Link></li>
                <li><Link href='/overview'>Overview</Link></li>
                <li><Link href='/faqs'>FAQS</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
                <Button name='register'/>

            </ul>
        </nav>
    </header>
  )
}
