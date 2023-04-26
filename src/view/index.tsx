import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const View = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button variant="contained">{count}</Button>
    </div>
  )
};

export default View;
