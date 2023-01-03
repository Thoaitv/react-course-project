import React, { useState } from 'react';
import { useWatch } from 'react-hook-form';
import useClickOutSide from '../../hook/useClickOutSide';

const DropdownHook = ({ control, setValue, name, data, dropdownLabel }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  useWatch({
    control,
    name: 'job',
    defaultValue: '', // default value before the render
  });

  const dataDropdown = [
    { id: 1, value: 'SE', text: 'SoftWare' },
    { id: 2, value: 'JS', text: 'Japan' },
    { id: 3, value: 'HS', text: 'Bussiness' },
  ];
  const handleClickDropdown = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState(dropdownLabel);

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
        {/* <div className="p-5 cursor-pointer hover:bg-gray-100">
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
        </div> */}
        {dataDropdown.map((item, index) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-200"
            onClick={handleClickDropdown}
            data-value={item.value}
            key={item.id}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownHook;
