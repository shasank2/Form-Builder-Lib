import { Container } from 'react-bootstrap'
import DraggableZone from './DraggableZone/DraggableZone'
import DroppableZone from './DroppableZone/DroppableZone'
import "./formbuild.css"
import { useState } from 'react'
import PreviewZone from './PreviewZone/PreviewZone'

type Props = {}

const FormBuild = (props: Props) => {

  const [selectedItem, setSelectedItem] = useState<string|null>(null)

  return (
    <>
      <Container fluid>
        <div className='container-grid'>
          <DraggableZone selectedItem={selectedItem} />
          <DroppableZone setSelectedItem={setSelectedItem} />
          <PreviewZone />
        </div>
      </Container>
    </>
  )
}

export default FormBuild