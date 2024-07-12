import React from 'react'
import { PlanList } from '../plans/PlanList'

export const Home = () => {
    const plans = [
        {
            name: "Plan 1",
            desc: "Plan 1 desc",
            price: "1999",
            usersLimit: "5"
        },
        {
            name: "Plan 2",
            desc: "Plan 2 desc",
            price: "3999",
            usersLimit: "10"
        }
    ]
  return (
    <div className='home'>
        <section className='plans'>
    <h1 className='font-bold text-3xl text-gray-600'>Browse Plans</h1>
    <PlanList plans={plans}/>
        </section>
    </div>
  )
}
