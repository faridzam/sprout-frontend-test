import { IContainerProps } from "@/types/ContainerType";

export const RowContainer = (params: IContainerProps) => {

  const {
    container = false,
    direction = 'row',
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
        width: container ? '100%' : undefined,
        display: 'flex',
        flexWrap: 'wrap',
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