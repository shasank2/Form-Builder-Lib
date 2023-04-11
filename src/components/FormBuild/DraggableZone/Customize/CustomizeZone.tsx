import { Button, Form } from 'react-bootstrap'
import './customizezone.css'

type Props = {}

const CustomizeZone = (props: Props) => {


  return (
    <Form className='customize-container'>
      <div>
        <h4>Basics</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Label</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </div>

      <div>
        <h4>Validations</h4>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Is Required"
          className="mb-3"
        />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Validation Message</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </div>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default CustomizeZone