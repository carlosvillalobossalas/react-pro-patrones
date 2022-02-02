import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';


export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                    lastName: Yup.string().max(10, 'Debe de tener 10 caracteres o menos').required('Requerido'),
                    email: Yup.string().email('Direccion email invalida').required('Requerido'),
                    terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string().required('Requerido').notOneOf(['it-junior'], 'Esta opcion no es permitida')
                })}
            >

                {(formik) => (
                    <Form >
                        <MyTextInput
                            label="First Name"
                            name='firstName'
                            placeholder='Carlos'
                        />


                        <MyTextInput
                            label="Last Name"
                            name='lastName'
                            placeholder='Villalobos'
                        />

                        <MyTextInput
                            label="Email Address"
                            name='email'
                            type='email'
                        />

                        <MySelect label='jobType' name='jobType'>
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </MySelect>

                        <MyCheckbox label='Terms and conditions' name='terms' />

                        <button type='submit'>Submit</button>
                    </Form>
                )}

            </Formik>

        </div >
    )
}
