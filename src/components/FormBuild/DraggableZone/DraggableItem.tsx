import React from 'react'
import { useDrag } from 'react-dnd'

type Props = {
  componentType: string,
  text: string
}

const DraggableItem = (props: Props) => {

  let { componentType, text } = props

  const [, dragRef] = useDrag(() => ({
    type: 'builderComponent',
    item: { type: componentType, text: text },
  }))

  return (
    <>
      <span ref={dragRef} className='items'>
        {text}
      </span>
    </>
  )
}

export default DraggableItem