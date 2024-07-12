import React from 'react'

export const PlanCard = ({plan}) => {
  return (
    <div className='plan-card-wrapper'>
        <div className='plan-card border rounded-md flex gap-5 p-10'>
            <div>{plan.name}</div> 
            <div>{plan.desc}</div>
            <div>{plan.price}</div>
            <div>{plan.userLimit}</div>

        </div>

    </div>
  )
}
