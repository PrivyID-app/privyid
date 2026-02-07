import React from 'react';
import CheckboxIcon from '../../assets/images/Checkbox [1.0].svg';
import CheckboxActiveIcon from '../../assets/images/Checkbox-active [1.0].svg';

const ImageCheckbox = ({ checked, onChange }) => {
  return (
    <img
      src={checked ? CheckboxActiveIcon : CheckboxIcon}
      alt={checked ? 'Selected' : 'Select'}
      onClick={onChange}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ImageCheckbox;
