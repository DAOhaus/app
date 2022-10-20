import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import prompt from '../static/prompt';
import * as Yup from 'yup';
// import { Formik, Field, Form, ErrorMessage, useField, useFormikContext } from 'formik';
// import styled from 'styled-components'
// const  = styled.div

// const Wizard = ({ children, initialValues, onSubmit }) => {
//   const [stepNumber, setStepNumber] = useState(0);
//   const steps = React.Children.toArray(children);
//   const [snapshot, setSnapshot] = useState(initialValues);

//   const step = steps[stepNumber];
//   const totalSteps = steps.length;
//   const isLastStep = stepNumber === totalSteps - 1;

//   const next = values => {
//     setSnapshot(values);
//     setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
//   };

//   const previous = values => {
//     setSnapshot(values);
//     setStepNumber(Math.max(stepNumber - 1, 0));
//   };

//   const handleSubmit = async (values, bag) => {
//     if (step.props.onSubmit) {
//       await step.props.onSubmit(values, bag);
//     }
//     if (isLastStep) {
//       return onSubmit(values, bag);
//     } else {
//       bag.setTouched({});
//       next(values);
//     }
//   };

//   return (
//     <Formik
//       initialValues={snapshot}
//       onSubmit={handleSubmit}
//       validationSchema={step.props.validationSchema}
//     >
//       {formik => (
//         <Form>
//           hi
//           {/* <p>
//             Step {stepNumber + 1} of {totalSteps}
//           </p>
//           {step}
//           <div style={{ display: 'flex' }}>
//             {stepNumber > 0 && (
//               <button onClick={() => previous(formik.values)} type="button">
//                 Back
//               </button>
//             )}
//             <div>
//               <button disabled={formik.isSubmitting} type="submit">
//                 {isLastStep ? 'Submit' : 'Next'}
//               </button>
//             </div>
//           </div> */}
//         </Form>
//       )}
//     </Formik>
//   );
// };

// const WizardStep = ({ children }) => children;

export default props => {
  const [url, setUrl] = useState();
  const handleClick = () => {
    window.alert(`web3 tx here with ${url}`);
  };
  return (
    <div className="flex justify-content-center mauto w300 mt20">
      <div className=" flex column">
        {/* <Wizard
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
          }}
          onSubmit={async values =>
            sleep(300).then(() => console.log('Wizard submit', values))
          }
        >
          <WizardStep
            onSubmit={() => console.log('Step1 onSubmit')}
            validationSchema={Yup.object({
              firstName: Yup.string().required('required'),
              lastName: Yup.string().required('required'),
            })}
          >
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field
                autoComplete="given-name"
                component="input"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                type="text"
              />
              <ErrorMessage className="error" component="div" name="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field
                autoComplete="family-name"
                component="input"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                type="text"
              />
              <ErrorMessage className="error" component="div" name="lastName" />
            </div>
          </WizardStep>
          <WizardStep
            onSubmit={() => console.log('Step2 onSubmit')}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email address')
                .required('required'),
            })}
          >
            <div>
              <label htmlFor="email">Email</label>
              <Field
                autoComplete="email"
                component="input"
                id="email"
                name="email"
                placeholder="Email"
                type="text"
              />
              <ErrorMessage className="error" component="div" name="email" />
            </div>
          </WizardStep>
          <WizardStep>
            <Input className="mb10" onChange={e => setUrl(e.target.value)} placeholder="NFT URL" value={url} />
            <Button primary onClick={handleClick}>
              Deploy
            </Button>
          </WizardStep>
        </Wizard> */}
      </div>
    </div>
  );
};
