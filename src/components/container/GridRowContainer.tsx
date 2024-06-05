import { IGridContainerProps } from "@/types/ContainerType";

export const GridRowContainer = (params: IGridContainerProps) => {

  const {
    gap = '8px',
    columns = 12,
    children,
    ...props
  } = params;

  return (
    <div
      {...props}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        // gridAutoRows: 'minmax(100px, auto)',
        gap: gap
      }}
    >
      {children}
    </div>
  )
}