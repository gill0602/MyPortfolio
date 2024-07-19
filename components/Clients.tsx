import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading py-20'>
            Kind words from {' '}
            <span className='text-yellow-300'>Fellow </span>
            <span className='text-purple'>Collaborators</span>

        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>
            
            
            <InfiniteMovingCards 
                items={testimonials}
                direction='right'
                speed='slow'
            />
        <div>
            
        </div>
    </div>
    </div>
  )
}

export default Clients