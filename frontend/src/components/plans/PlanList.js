import React, { useEffect } from 'react'
import { PlanCard } from './PlanCard'
import { useSelector } from 'react-redux'

export const PlanList = () => {
  const plans = useSelector((state) => state.plan.plans);

  return (
    <div className='plan-list grid grid-cols-4 gap-5'>
       {plans?.map((plan, index) => (
            <PlanCard plan={plan}/>
       ))}
    </div>
  )
}
