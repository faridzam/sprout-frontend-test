'use client'

import Image from 'next/image';
import styles from './Arrow.module.css';

export const Arrow = (params: any) => {
  const ratationDegree = () => {
    switch (params.direction) {
      case 'left':
        return 270
        break;
      case 'up':
        return 0
        break;
      case 'right':
        return 90
        break;
      case 'down':
        return 180
        break;
    
      default:
        return 0
        break;
    }
  }
  return (
    <div
      className={styles.arrow}
      style={{
        width: '20px',
        height: '20px',
        transform: `rotate(${ratationDegree()}deg)`
      }}
      onClick={() => params.onClick()}
    >
      <Image
        src="/images/triangle.svg"
        alt="triangle-icon"
        width={20}
        height={20}
        loading="lazy"
      />
    </div>
  )
}