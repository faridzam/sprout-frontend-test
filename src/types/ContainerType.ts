import { ReactNode } from "react";

export interface IContainerProps {
  direction?: 'row' | 'column',
  container?: boolean,
  alignItems?: string,
  justifyContent?: string,
  children: ReactNode,
  gap?: string,
  [props: string]: any,
}

export interface IGridContainerProps {
  children: ReactNode;
  columns?: number | unknown;
  gap?: string;
  [props: string]: any;
}