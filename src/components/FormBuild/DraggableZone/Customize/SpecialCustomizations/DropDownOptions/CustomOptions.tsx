import { useContext } from 'react'
import { useEffect } from 'react'
import { Button, CloseButton, Form } from 'react-bootstrap'
import { GlobalContext } from '../../../../../../context/GlobalContext'

type Props = {
  individualItemState: any
  setIndividualItemState: any
  selectedItem: any
}

const CustomOptions = (props: Props) => {
  const { individualItemState, setIndividualItemState, selectedItem } = props
  const { formState } = useContext(GlobalContext)

  useEffect(() => {
    let foundSelectedObject: any = formState.find((elem: any) => elem.id === selectedItem)
    if (foundSelectedObject.dropdown && foundSelectedObject.dropdown.customOptions?.length !== 0) {
      setIndividualItemState((prev: any) => ({
        ...prev,
        ...foundSelectedObject,
        dropdown: {
          ...foundSelectedObject.dropdown,
          source: "custom",
          customOptions: [...foundSelectedObject.dropdown?.customOptions]
        }
      }))
    } else {
      setIndividualItemState((prev: any) => ({ ...prev, dropdown: { ...prev.dropdown, customOptions: [] } }))
    }

  }, [selectedItem])

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

  const handleChange = (target: any, index: number) => {
    let newOptionList = individualItemState.dropdown?.customOptions
    newOptionList[index][target.name] = target.value
    setIndividualItemState((prev: any) => ({
      ...prev, dropdown: {
        ...prev.dropdown,
        customOptions: newOptionList
      }
    }))
  }

  const handleRemoveOption = (index: number) => {
    let newOptionList = individualItemState.dropdown?.customOptions
    newOptionList.splice(index, 1)

    setIndividualItemState((prev: any) => ({
      ...prev, dropdown: {
        ...prev.dropdown,
        customOptions: newOptionList
      }
    }))
  }

  return (
    <div className='custom-option-container'>
      {
        individualItemState.dropdown?.customOptions?.map((elem: any, index: number) => {
          return (
            <div className='option-card' key={index}>
              <div className='d-flex justify-content-between' >
                <h6>#{index + 1}</h6>
                {
                  index + 1 === 1 ?
                    null : <CloseButton onClick={() => handleRemoveOption(index)} />
                }
              </div>
              <Form.Group className='mb-2'>
                <Form.Label column="sm" >Label</Form.Label>
                <Form.Control type="text" autoComplete="new-password" name='label'
                  onChange={(e: any) => handleChange(e.target, index)}
                  value={individualItemState.dropdown?.customOptions[index].label}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label column="sm" >Value</Form.Label>
                <Form.Control type="text" autoComplete="new-password" name='value'
                  onChange={(e: any) => handleChange(e.target, index)}
                  value={individualItemState.dropdown?.customOptions[index].value}
                />
              </Form.Group>
            </div>
          )
        })
      }

      <Button className='mt-3' style={{ width: "100%" }} variant='light' type="button" onClick={() => handleAddOption()}  >+ Add More Option</Button>
    </div>
  )
}

export default CustomOptions