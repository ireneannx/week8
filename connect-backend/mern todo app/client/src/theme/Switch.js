import React from 'react';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import { ThemeConsumer } from './theme'

export default function Switch() {

  return (
    <ThemeConsumer>
      {({ changeTheme }) => {
        return (<button className='Switch' onClick={changeTheme}>
          <Sun className='icon' />
          <Moon className='icon' />
        </button>)
      }}

    </ThemeConsumer>
  );
}