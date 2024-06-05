"use client"

import { Typography } from "@/components/typography/Typography";
import { useDeviceSizes } from "@/hooks/useDeviceSize";
import { debounce } from "@/utils/debounce";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from './PokeListHeader.module.css';

export const PokeListHeader = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>('');
  const {isSmall} = useDeviceSizes()

  const handleChangeKeyword = debounce((e: any) => {
    router.push(`?keyword=${e.target.value}`)
  }, 500)

  return (
    <div className={styles.pokelistHeaderContainer}>
      <Typography className={styles.pokeListHeaderTitle} fontSize="24px" fontWeight={700}>
        Pokedex
      </Typography>
      <div
        style={{
          display: 'flex',
          width: '100%',
          padding: '4px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <input
          style={{
            height: '30px',
            width: '300px',
            borderRadius: '20px',
            padding: '4px 16px',
            border: '1px solid #000',
            fontSize: '16px',
          }}
          value={keyword}
          placeholder="search..."
          onChange={(e) => {
            setKeyword(e.target.value)
            handleChangeKeyword(e)
          }}
        />
      </div>
    </div>
  )
}