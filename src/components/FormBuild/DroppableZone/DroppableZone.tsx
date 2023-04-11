import { useContext, useState } from "react"
import "./droppablezone.css"
import { useDrop } from "react-dnd"
import { GlobalContext } from "../../../context/GlobalContext"
import { v4 } from 'uuid';

type Props = {
  setSelectedItem: any
}

const DroppableZone = (props: Props) => {

  const { setSelectedItem } = props

  const { formState, setformState } = useContext(GlobalContext);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "builderComponent",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (elem: any) => {
      handleStateWhenDrop(elem)
    }
  }))

  const handleStateWhenDrop = (elem: any) => {
    let newElem = {
      ...elem,
      id: v4(),
      name: "",
      label: ""
    }
    setformState((prev: any) => ([...prev, newElem]))
  }

  return (
    <div ref={drop} className='droppable-zone'>
      {formState.map((elem: any, index: number) => {
        return (
          <div key={index} className="droppable-items" onClick={() => setSelectedItem()}>
            {elem.text}
          </div>
        )
      })}

    </div>
  )
}

export default DroppableZone