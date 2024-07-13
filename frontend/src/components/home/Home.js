import React, { useEffect } from "react";
import { PlanList } from "../plans/PlanList";
import { useDispatch } from "react-redux";
import { getPlans } from "../../redux/actions/planActions";
export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlans());
  }, []);

  return (
    <div className="home p-10 h-screen overflow-scroll">
      <section className="plans flex flex-col gap-10">
        <h1 className="font-bold text-3xl text-gray-600">Browse Plans</h1>
        <PlanList />
      </section>
    </div>
  );
};
