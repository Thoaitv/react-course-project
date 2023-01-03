import React, { useState } from 'react';
import { useWatch } from 'react-hook-form';
import useClickOutSide from '../../hook/useClickOutSide';

const DropdownHook = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = 'Select your job',
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: 'job',
    defaultValue: '', // default value before the render
  });

  const handleClickDropdown = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState('set');

  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="flex items-center justify-between p-5 bg-white border rounded-lg cursor-pointer border-gray100"
        onClick={() => setShow(!show)}>
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? '' : 'opacity-0 invisible'
        }`}>
        <div className="p-5 cursor-pointer hover:bg-gray-100">
          <div
            className="p-5 cursor-pointer hover:bg-gray-200"
            onClick={handleClickDropdown}
            data-value="thoai">
            thoai
          </div>
          <div
            className="p-5 cursor-pointer hover:bg-gray-200"
            onClick={handleClickDropdown}
            data-value="thoai1">
            thoai1
          </div>
          <div
            className="p-5 cursor-pointer hover:bg-gray-200"
            onClick={handleClickDropdown}
            data-value="thoai2">
            thoai2
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownHook;
