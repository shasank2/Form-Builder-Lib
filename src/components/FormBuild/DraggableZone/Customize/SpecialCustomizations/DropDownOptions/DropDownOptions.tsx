import { Form } from 'react-bootstrap'
import CustomOptions from './CustomOptions'
import "./dropdownoptions.css"
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../../../../context/GlobalContext'

type Props = {
  individualItemState: any
  setIndividualItemState: any
  selectedItem: any
}

const DropDownOptions = (props: Props) => {
  const { individualItemState, setIndividualItemState, selectedItem } = props
  const { formState } = useContext(GlobalContext);

  const [dropDownSource, setDropDownSource] = useState("options")

  useEffect(() => {
    let foundSelectedObject: any = formState.find((elem: any) => elem.id === selectedItem)
    setDropDownSource(foundSelectedObject.source)
  }, [selectedItem])
  

  return (
    <>
      <Form.Check
        type="switch"
        label="Set Through API"
        onChange={(e: any) => {
          setDropDownSource(e.target.checked ? "url" : "options"),
            setIndividualItemState((prev: any) => ({ ...prev, source: e.target.checked ? "url" : "options" }))
        }}
        checked={dropDownSource === "url" ? true : false}
      />
      {
        dropDownSource === "url" ?
          <div>
            <Form.Group className="mb-3">
              <Form.Label>API URL</Form.Label>
              <Form.Control type="text" autoComplete="new-password"
                onChange={(e: any) => setIndividualItemState((prev: any) => ({ ...prev, apiUrl: e.target.value }))}
                value={individualItemState.apiUrl}
              />
            </Form.Group>
          </div>
          :
          <CustomOptions
            individualItemState={individualItemState}
            setIndividualItemState={setIndividualItemState}
            selectedItem={selectedItem}
          />
      }
    </>
  )
}

export default DropDownOptions