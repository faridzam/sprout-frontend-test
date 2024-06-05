import { IContainerProps } from "@/types/ContainerType";

export const ColumnContainer = (params: IContainerProps) => {

  const {
    container = true,
    direction = 'column',
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    gap = '2px',
    children,
    ...props
  } = params;

  return (
    <div
      {...props}
      style={{
        display: 'flex',
        flexDirection: direction,
        alignItems: alignItems,
        justifyContent: justifyContent,
        gap: gap,
      }}
    >
      {children}
    </div>
  )
}