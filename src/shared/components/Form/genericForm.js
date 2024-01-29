import React from "react";
import { Formik,Form} from 'formik';
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import FormikInput from "../FormikElements/FormikInput/FormikInput";
import FormikFlagSelect from "../FormikElements/FormikFlagSelect/FormikFlagSelect";


function GenericForm({data}) {

    /* Primary Button Handling */
   const handlePrimaryButton=(button)=>{
       switch(button.type){
           case 'submit':return<PrimaryButton
           type={button.type}
           size={button.size}
           text={button.text}
           rounded={button.rounded}
           outlined={button.outlined}
           btnBG={button.btnBG}
           spacingClasses={button.spacingClasses}
           additionalClass={button.additionalClass}
           hasIcon={button.hasIcon}
           reverse={button.reverse}
           icon={button.icon}
           />
           case'cancel':return<PrimaryButton
           type={button.type}
           size={button.size}
           text={button.text}
           rounded={button.rounded}
           outlined={button.outlined}
           btnBG={button.btnBG}
           spacingClasses={button.spacingClasses}
           additionalClass={button.additionalClass}
           hasIcon={button.hasIcon}
           reverse={button.reverse}
           icon={button.icon}
           togalModal={button.togalModal}
           />
           default:<h1>Buttons</h1>
       }
   }
   /* Fields Handling */
    const handleField = (field) => {
        switch(field.tag){
            case 'input':return<FormikInput 
            name={field.name} type={field.type}
             placeholder={field.placeholder}
             label={field.label} controlId={field.controlId}/>
            case'selectFlag':return <FormikFlagSelect
            name={field.name} type={field.type} placeholder={field.placeholder}
            selected={field.selected} onSelect={field.onSelect} searchable
            />
            default:return <h1>Hello World</h1>
        }
    }
    /*DOM CREATION */
    let dom = data.inputFields.map(field => {
        return handleField(field)
    })
    let buttonDom=data.PrimaryButtonList.map(button=>{
        return handlePrimaryButton(button)
    })
    return (
        <Formik
        initialValues={
            data.initialValues
        }
        validationSchema={
            data.validationSchema
        }
        onSubmit={data.onSubmit}
        >
          
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
            <Form className={data.styleClasses.formClass.className} onSubmit={(e) => data.submitForm(handleSubmit, e)} >
                <div className="row">
                {dom}
                </div>
                <div className={data.styleClasses.buttonDivClass.className}>
                    {buttonDom}

                </div>
            </Form> 

            )}
   </Formik>
        
    )
}

export default GenericForm

