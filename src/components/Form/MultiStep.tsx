/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { object, string } from "yup";

// const schema = object().shape({
//   firstName: string().required("First name is required"),
//   lastName: string().required("Last name is required"),
//   email: string().required("Email is required").email("Invalid email"),
// });

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// const MultiStepForm: React.FC = () => {
//   const [step, setStep] = useState(1);
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<FormData>({
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     validationSchema: schema,
//   });

//   const onSubmit = (data: FormData) => {
//     console.log(data); // You can submit the form data to your backend here
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <>
//             <div>
//               <label>First Name</label>
//               <Controller
//                 name="firstName"
//                 control={control}
//                 render={({ field }) => <input {...field} />}
//               />
//               {errors.firstName && <p>{errors.firstName.message}</p>}
//             </div>
//             <div>
//               <label>Last Name</label>
//               <Controller
//                 name="lastName"
//                 control={control}
//                 render={({ field }) => <input {...field} />}
//               />
//               {errors.lastName && <p>{errors.lastName.message}</p>}
//             </div>
//             <button onClick={() => setStep(2)}>Next</button>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <div>
//               <label>Email</label>
//               <Controller
//                 name="email"
//                 control={control}
//                 render={({ field }) => <input {...field} />}
//               />
//               {errors.email && <p>{errors.email.message}</p>}
//             </div>
//             <button onClick={() => setStep(1)}>Previous</button>
//             <button onClick={handleSubmit(onSubmit)}>Submit</button>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h1>Multi-Step Form</h1>
//       {renderStep()}
//     </div>
//   );
// };

// export default MultiStepForm;
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../Form Logic/Schema";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {/* <p>{errors.firstName?.message}</p> */}
      </div>
      <div>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {/* <p>{errors.lastName?.message}</p> */}
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} />
        {/* <p>{errors.email?.message}</p> */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
