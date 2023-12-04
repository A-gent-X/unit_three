import { Formik } from 'formik';

const Form = () => {

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
  {formikParams => {
    const { values, handleChange, handleSubmit } = formikParams
  }}
  return(
    <form></form>
  )
</Formik>

  )

}


