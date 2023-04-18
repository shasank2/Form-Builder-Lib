import { useEffect } from 'react'
import { Button, CloseButton, Form } from 'react-bootstrap'

type Props = {
  individualItemState: any
  setIndividualItemState: any
}

const CustomOptions = (props: Props) => {
  const { individualItemState, setIndividualItemState } = props

  useEffect(() => {
    if (individualItemState.dropdown?.source === "custom") {
      setIndividualItemState((prev: any) => ({ ...prev, dropdown: { ...prev.dropdown, customOptions: [] } }))
    }
  }, [individualItemState.dropdown?.source])


  const handleAddOption = () => {
    setIndividualItemState((prev: any) => ({
      ...prev, dropdown: {
        ...prev.dropdown,
        customOptions: [
          ...prev.dropdown.customOptions,
          { label: "", value: "" }
        ]
      }
    }))
  }

  return (
    <div className='custom-option-container'>
      {
        individualItemState.dropdown?.customOptions?.map((elem: any, index: number) => {
          return (
            <div className='option-card'>
              <div className='d-flex justify-content-between' >
                <h6>#{index + 1}</h6>
                {
                  index + 1 === 1 ?
                    null : <CloseButton />
                }
              </div>
              <Form.Group className='mb-2'>
                <Form.Label column="sm" >Label</Form.Label>
                <Form.Control type="text" autoComplete="new-password"

                />
              </Form.Group>
              <Form.Group>
                <Form.Label column="sm" >Value</Form.Label>
                <Form.Control type="text" autoComplete="new-password"

                />
              </Form.Group>
            </div>
          )
        })
      }

      <Button className='mt-3' style={{ width: "100%" }} variant='light' type="button" onClick={()=>handleAddOption()}  >+ Add More Option</Button>
    </div>
  )
}

export default CustomOptions