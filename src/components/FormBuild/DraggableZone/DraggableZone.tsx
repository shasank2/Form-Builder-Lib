
import CustomizeZone from './Customize/CustomizeZone'
import DraggableItem from './DraggableItem'
import React from 'react'

type Props = {
  selectedItem: string | null
}

const builderComponentsList: any = [
  {
    "type": "text-field",
    "text": "Text Field"
  },
  {
    "type": "drop-down",
    "text": "Drop Down"
  },
  {
    "type": "check-box",
    "text": "Check Box"
  },
  {
    "type": "date-picker",
    "text": "Date-Picker"
  }
]

const DraggableZone = (props: Props) => {
  const { selectedItem } = props
  return (
    <>
      {
        !selectedItem ?

          <div className='draggablezone-container'>
            {
              builderComponentsList.map((elem: any, index: number) => {
                return (
                  <React.Fragment key={index} >
                    <DraggableItem componentType={elem.type} text={elem.text} />
                  </React.Fragment>
                )
              })
            }
          </div>

          :
          <CustomizeZone />
      }
    </>
  )
}

export default DraggableZone