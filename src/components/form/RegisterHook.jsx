import React from 'react';
import { useForm } from 'react-hook-form';
import CheckboxHook from './CheckboxHook';
import DropdownHook from './DropdownHook';
import InputHook from './InputHook';
import RadioHook from './RadioHook';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema = yup
  .object({
    // username: yup.string().required('Please enter your username'),
    // email: yup.string().required('Please enter your email address'),
    // password: yup
    //   .string()
    //   .min(4, 'Your password must be at least 8 characters or greater')
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
    //     {
    //       message:
    //         'Your password must have at least 1 uppercase, 1 lowercase, 1 special character',
    //     }
    //   )
    //   .required('Please enter your password'),
    // gender: yup
    //   .string()
    //   .required('Please select your gender')
    //   .oneOf(['male', 'female'], 'You can only select male or female'),
    // job: yup.string().required('Please select your job'),
    // term: yup.boolean().required('Please accept the terms and conditions'),
  })
  .required();
const dropdownData = [
  {
    id: 1,
    value: 'SE',
    text: 'Software',
  },
  {
    id: 2,
    value: 'HE',
    text: 'Bussiness',
  },
  {
    id: 3,
    value: 'JS',
    text: 'Japan',
  },
];

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    control,
    setValue,
    getValues,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      gender: 'male',
    },
  });

  // console.log("RegisterHook ~ isSubmitting", isSubmitting);
  // console.log("RegisterHook ~ errors", errors);
  const onSubmitHandler = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log('values', values);
        reset({
          username: '',
          email: '',
          password: '',
          gender: 'male',
          job: '',
          term: false,
        });
      }, 2000);
    });
  };
  const watchGender = watch('gender');
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
      autoComplete="off">
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          name="username"
          placeholder="Enter your username"
          id="username"
          control={control}
          type="text"></InputHook>
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
          type="text"></InputHook>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="Enter your password"
          id="password"
          control={control}
          type="password"></InputHook>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="male"
              checked={watchGender === 'male'}></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
              checked={watchGender === 'female'}></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name="job"
          data={dropdownData}
          dropdownLabel={
            isSubmitSuccessful ? 'Select your job2' : 'Select your job'
          }></DropdownHook>
        {errors.job && (
          <p className="text-sm text-red-500">{errors.job.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
          name="term"></CheckboxHook>
        {errors.term && (
          <p className="text-sm text-red-500">{errors.term.message}</p>
        )}
      </div>
      <button
        className={`w-full p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg ${
          isSubmitting ? 'opacity-50' : ''
        }`}
        disabled={isSubmitting}>
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
        ) : (
          'Submit'
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
