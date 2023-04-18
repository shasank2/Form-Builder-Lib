import { Form } from 'react-bootstrap'
import CustomOptions from './CustomOptions'
import "./dropdownoptions.css"

type Props = {
  individualItemState: any
  setIndividualItemState: any
}

const DropDownOptions = (props: Props) => {
  const { individualItemState, setIndividualItemState } = props
  return (
    <>
      <Form.Check
        type="switch"
        label="Set Through API"
        onChange={(e) => { setIndividualItemState((prev: any) => ({ ...prev, dropdown: { ...prev.dropdown, source: e.target.checked ? "url" : "custom" } })) }}
        checked={individualItemState.dropdown?.source === "url" ? true : false}
      />
      {
        individualItemState.dropdown?.source === "url" ?
          <div>
            <Form.Group className="mb-3">
              <Form.Label>API URL</Form.Label>
              <Form.Control type="text" autoComplete="new-password"
                onChange={(e: any) => setIndividualItemState((prev: any) => ({ ...prev, dropdown: { ...prev.dropdown, apiUrl: e.target.value } }))}
                value={individualItemState.dropdown?.apiUrl}
              />
            </Form.Group>
          </div>
          :
          <CustomOptions
            individualItemState={individualItemState}
            setIndividualItemState={setIndividualItemState}
          />
      }
    </>
  )
}

export default DropDownOptions