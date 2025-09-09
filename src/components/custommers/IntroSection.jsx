import React from 'react'
import icon from '../../assets/icon.svg'

export const IntroSection = () => {
  return (
    <div className=''> {/* Eliminamos mb-8 */}
      
      <h1 className="text-xl/tight sm:text-2xl/tight md:text-4xl/tight font-semibold tracking-tight">
        Our customers rely on us to find the best candidate-to-position fit, faster and easier.
      </h1>
      <br />
      <p className='text-xl/tight sm:text-1xl/tight md:text-2xl/tight tracking-tight'>
        Discover how HR Professionals and Hiring Managers are using Talent Scout and leveraging AI to screen and evaluate candidates based on key skills, requirements and psychographic assessments.
      </p>
    </div>
  )
}