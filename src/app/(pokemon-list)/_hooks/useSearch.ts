'use client'

import { useSearchParams } from "next/navigation";

export default function useSearch (){

  const keyword = useSearchParams().get('search');

  return{
    keyword,
  }
}