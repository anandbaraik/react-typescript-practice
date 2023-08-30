import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Box = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <h2 style={{
        backgroundColor: theme.primary.main,
        color: theme.primary.text
      }}>
          Theme Box
      </h2>
    </div>
  )
}

export default Box