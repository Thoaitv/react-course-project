import React from 'react';
import { useForm } from 'react-hook-form';
import CheckboxHook from './CheckboxHook';
import DropdownHook from './DropdownHook';
import InputHook from './InputHook';
import RadioHook from './RadioHook';

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm();

  const onSubmitHandler = (values) => {
    console.log('onSubmitHandler ~ values', values);
  };
  return (
    <form
      className="max-w-[300px] mx-auto my-10"
      onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          name="username"
          id="username"
          placeholder="Enter your username"
          control={control}
          type="text"
        />
        <p className="text-sm text-red-500">loi</p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          email
        </label>
        <InputHook
          name="email"
          id="email"
          placeholder="Enter your email"
          control={control}
          type="email"
        />
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          password
        </label>
        <InputHook
          name="password"
          id="password"
          placeholder="Enter your password"
          control={control}
          type="password"
        />
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male" />
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="female" />
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <DropdownHook control={control} setValue={setValue} name="job" />
      </div>
      <div className="flex flex-col gap-3">
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
          name="term"></CheckboxHook>
      </div>

      <button className="w-full p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
