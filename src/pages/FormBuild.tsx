import FormBuildComponent from "../components/FormBuild/FormBuild"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

type Props = {}

const FormBuild = (props: Props) => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <FormBuildComponent />
      </DndProvider>
    </>
  )
}

export default FormBuild