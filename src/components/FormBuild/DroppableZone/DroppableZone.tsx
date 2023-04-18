import { useContext } from "react"
import "./droppablezone.css"
import { useDrop } from "react-dnd"
import { GlobalContext } from "../../../context/GlobalContext"
import { v4 } from 'uuid';

type Props = {
  setSelectedItem: any
  selectedItem: string | null
}

const DroppableZone = (props: Props) => {

  const { setSelectedItem, selectedItem } = props

  const { formState, setformState, setSpecialCustomizationStep } = useContext(GlobalContext);

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
    // create new object and push to list
    let newElem = {
      ...elem,
      id: v4(),
      name: "",
      label: "",
      isRequried: false,
      validationMessage: "",
    }
    setformState((prev: any) => ([...prev, newElem]))
    // once dropped it is selected too
    setSelectedItem(newElem.id)

    setSpecialCustomizationStep(null)
  }

  const handleSelectItem = (elemId: string) => {
    setSpecialCustomizationStep(null)
    setSelectedItem(elemId)
  }

  return (
    <div ref={drop} className='droppable-zone'>
      {formState.map((elem: any, index: number) => {
        return (
          <div key={index}
            className={`${selectedItem === elem.id ? "droppable-items-selected" : "droppable-items"}`}
            onClick={() => handleSelectItem(elem.id)}>
            {elem.text}
          </div>
        )
      })}

    </div>
  )
}

export default DroppableZone