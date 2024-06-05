import colors from "@/constants/colors";
import { ReactNode } from "react";

interface IChipProps {
  color: string,
  chilren?: ReactNode,
  [key: string]: any
}

export const Chip = (params: IChipProps) => {

  const {
    color,
    children,
    ...props
  } = params;

  return (
    <div
      {...props}
      style={{
        padding: '4px 8px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '999px',
        minWidth: '30px',
        backgroundColor: colors[color]['darkest'],
      }}
    >
      {children}
    </div>
  );
}