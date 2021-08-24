import React from 'react';
import useScrollPosition from '../hooks/useScrollPosition';
import useWindowSize from '../hooks/useWindowSize';

const Top: React.FC = () => {
  const scrollPosition = useScrollPosition()
  const {width, height, size} = useWindowSize()
  return (
    <div className='top'>
      <span>Width: {width} px</span>
      <span>Height: {height} px</span>
      <span>Size: {size}</span>
      <span>Scroll: {scrollPosition} px</span>
    </div>
  )
}

export {Top}
