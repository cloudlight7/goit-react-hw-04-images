
import { Formik, Form} from 'formik'
import { Container,Input, Button, Error } from './SearchStyle.module';

function validateText(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/i.test(value)) {
     error = 'Invalid word';
  
   }
   return error;
 }
const Searchbar = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = (values, actions) => {
   //console.log(values);
   onSubmit(values);
   actions.resetForm();
  }

 
  return (
    
    <Formik initialValues={{ values: '' }} onSubmit={handleSubmit}>
				 {({ errors, touched }) => (
					<Form >
						<Container >
            <Input name='values' type='text' validate={validateText} />
            {errors.values && touched.values ? (
             <Error>{errors.values}</Error> 
           ) : null}
						<Button type='submit' disabled={isSubmitting}>
							Search
						</Button>
              </Container>
					</Form>
				
			)}
		</Formik>
	)
}

export default Searchbar
