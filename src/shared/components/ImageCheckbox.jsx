import React from 'react';
import CheckboxIcon from '../../assets/images/Checkbox [1.0].svg';
import CheckboxActiveIcon from '../../assets/images/Checkbox-active [1.0].svg';

const ImageCheckbox = ({ checked, onChange }) => {
  return (
    <button
      type="button"
      onClick={onChange}
      style={{
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px', // Standard size for a checkbox
        height: '24px', // Standard size for a checkbox
        flexShrink: 0,
      }}
    >
      <img
        src={checked ? CheckboxActiveIcon : CheckboxIcon}
        alt={checked ? 'Selected' : 'Select'}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </button>
  );
};

export default ImageCheckbox;
