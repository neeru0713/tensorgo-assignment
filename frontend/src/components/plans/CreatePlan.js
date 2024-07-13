import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPlan } from "../../redux/actions/planActions.js";
import TextField from "../form/TextField.js";
import Button from "../form/Button.js";
import { showNotification } from "../../redux/actions/notificationActions.js";
export const CreatePlan = () => {
  
  const [formData, setFormData] = useState({
    planName: "",
    description: "",
    price: "",
    userLimit: "",
  });

  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.planName) newErrors.planName = "Plan Name is required";

    if (!formData.price) newErrors.price = "Price is required";

    if (!formData.userLimit) newErrors.userLimit = "User Limit is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      dispatch(createPlan(formData));
      dispatch(showNotification())
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="create-plan-page-wrapper h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-start create-plan-page">
        <h1 className="text-3xl font-bold text-gray-600 mb-10">
          Create new plan
        </h1>
        <div className="create-plan-form border p-10 rounded-md flex flex-col gap-3 items-center shadow shadow-lg bg-white mb-20">
          <TextField
            type="text"
            name="planName"
            value={formData.planName}
            onChange={handleChange}
            label="Plan Name"
            width="400"
            error={errors.planName}
            required={true}
          />
          <TextField
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            label="Description for the plan"
            width="400"
            error={errors.description}
          />
          <TextField
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            label="Price for the plan"
            width="400"
            error={errors.price}
            required={true}
          />
          <TextField
            type="text"
            name="userLimit"
            value={formData.userLimit}
            onChange={handleChange}
            label="Users Limit"
            width="400"
            error={errors.userLimit}
            required={true}
          />
          <div className="form-btn mt-5">
            <Button
              width="400"
              name="Create Plan"
              type="primary"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
