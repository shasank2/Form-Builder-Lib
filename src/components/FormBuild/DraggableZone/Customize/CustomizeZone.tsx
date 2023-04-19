import { Button, Form } from 'react-bootstrap'
import './customizezone.css'
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../../context/GlobalContext';
import DropDownOptions from './SpecialCustomizations/DropDownOptions/DropDownOptions';

type Props = {
  selectedItem: string | null
  setSelectedItem: any
}

const CustomizeZone = (props: Props) => {

  const { selectedItem, setSelectedItem } = props
  const { formState, setformState, specialCustomizationStep, setSpecialCustomizationStep } = useContext(GlobalContext);

  const [individualItemState, setIndividualItemState] = useState({
    type: "",
    text: "",
    id: "",
    name: "",
    label: "",
    isRequried: false,
    validationMessage: "",
    dropdown: null,
  })

  useEffect(() => {
    let foundSelectedObject: any = formState.find((elem: any) => elem.id === selectedItem)
    setIndividualItemState((prev) => ({
      ...prev,
      ...foundSelectedObject
    }))

  }, [selectedItem])

  const handleSubmit = () => {
    let updatedArray = formState.map((obj: any) => {
      if (obj.id === individualItemState.id) {
        return individualItemState
      }
      return obj
    })
    setformState(updatedArray)
  }


  return (
    <Form className='customize-container'>

      {
        specialCustomizationStep === null ?
          <>
            <div>
              <h5>Basics</h5>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Label</Form.Label>
                <Form.Control type="text" autoComplete="new-password"
                  onChange={(e: any) => setIndividualItemState((prev: any) => ({ ...prev, label: e.target.value }))}
                  value={individualItemState.label}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" autoComplete="new-password"
                  onChange={(e: any) => setIndividualItemState((prev: any) => ({
                    ...prev,
                    name: e.target.value.toLowerCase()
                      .replace(/ /g, '-')
                      .replace(/[^\w-]+/g, '')
                  }))}
                  value={individualItemState.name}
                />
              </Form.Group>

              {
                individualItemState.type === "drop-down" ?
                  <Button variant="primary" type="button" style={{ width: "100%" }} onClick={() => setSpecialCustomizationStep("drop-down-step")} >
                    Edit Options
                  </Button>
                  : null
              }
            </div>

            <div>
              <h5>Validations</h5>
              <Form.Check
                type="switch"
                label="Is Required"
                className="mb-3"
                onChange={(e) => { setIndividualItemState((prev: any) => ({ ...prev, isRequried: e.target.checked })) }}
                checked={individualItemState.isRequried}
              />

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Validation Message</Form.Label>
                <Form.Control type="text"
                  disabled={!individualItemState.isRequried}
                  autoComplete="new-password"
                  onChange={(e: any) => setIndividualItemState((prev: any) => ({ ...prev, validationMessage: e.target.value }))}
                  value={individualItemState.validationMessage}
                />
              </Form.Group>
            </div>
          </>
          :
          specialCustomizationStep === "drop-down-step" ?
            <DropDownOptions
              individualItemState={individualItemState}
              setIndividualItemState={setIndividualItemState}
              selectedItem={selectedItem}
            /> : null

      }
      <Button variant="primary" type="button" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
  )
}

export default CustomizeZone