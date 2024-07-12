import React from 'react'
import { PlanCard } from './PlanCard'

export const PlanList = ({plans}) => {
  return (
    <div className='plan-list flex flex-col gap-10'>
       {plans.map((plan, index) => (
            <PlanCard plan={plan}/>
       ))}
    </div>
  )
}
