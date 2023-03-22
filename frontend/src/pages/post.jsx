import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Label from 'react-bootstrap/FormLabel';
import Input from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


export default function Post(){
    return(
        <>
    
    <Form className="form container col-md-4"  name="post-form" action="#" method="POST">
      <FormGroup>
        <Label>Title</Label>
        <Input as="textarea" name="title" placeholder="Enter Title" />
        <br></br><br></br>
        <Label>Subtitle</Label>
        <Input as="textarea" name="sub-title" placeholder="Enter Subtitle" />
      </FormGroup>
      <br></br><br></br>

      <FormGroup>
        <Label>Content</Label>
        <Input as="textarea" name="content" rows="5" placeholder="Enter content" />
      </FormGroup>
        <br></br><br></br>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>

        </>
    )
}