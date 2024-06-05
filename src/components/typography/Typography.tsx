import { ReactNode } from "react";

interface ITypographyProps {
  fontSize?: string,
  fontWeight?: number,
  color?: string,
  children: ReactNode,
  [key: string]: any
}

export const Typography = (params: ITypographyProps) => {
  const {
    fontSize = '14px',
    fontWeight = 500,
    color = '#000',
    children,
    ...props
  } = params;
  return (
    <p
      {...props}
      style={{
        margin: 0,
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight
      }}
    >
      {children}
    </p>
  )
}