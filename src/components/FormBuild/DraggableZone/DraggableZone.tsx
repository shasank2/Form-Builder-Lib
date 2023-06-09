
import { Button } from 'react-bootstrap'
import CustomizeZone from './Customize/CustomizeZone'
import DraggableItem from './DraggableItem'
import React from 'react'

type Props = {
  selectedItem: string | null
  setSelectedItem: any
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
  const { selectedItem, setSelectedItem } = props
  return (
    <>
      <div className='draggablezone-container'>
        <div className='draggablezone-header'>
          <Button variant="light" size="sm" onClick={() => setSelectedItem(null)} >Back</Button>
        </div>
        {
          !selectedItem ?
            <div className='draggablezone-grid'>
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
            <CustomizeZone selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        }
      </div>
    </>
  )
}

export default DraggableZone