import React from 'react';

import './styles.scss';

function FormWrapper({ headline, children }) {
  return (
    <div className='formWrapper'>
      <div className='wrap'>
        {headline && <h2>{headline}</h2>}
        <div className='children'>{children && children}</div>
      </div>
    </div>
  );
}

export default FormWrapper;
