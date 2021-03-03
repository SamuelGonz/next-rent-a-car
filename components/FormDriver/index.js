import { Form, Input, Checkbox, Button } from "antd";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { setDriverData } from "../../stateManagemet/actions/driverActions";

export default function FormDriver() {
   const dispatch = useDispatch();
   const router = useRouter();
   const formik = useFormik({
      initialValues: {
         name: "",
         lastname: "",
         email: "",
         phone: "",
         terminos: false,
      },
      validationSchema: Yup.object().shape({
         name: Yup.string()
            .required("Debe colocar un nombre")
            .min(3, "Min 3 letras"),
         email: Yup.string()
            .email("Debe colocar un correo")
            .required("Debe colocar un mail"),
         lastname: Yup.string(),
         phone: Yup.number().required("Teléfono es obligatorio"),
         terminos: Yup.bool().oneOf(
            [true],
            "Debe aceptar los terminos y condiciones"
         ),
      }),
      validateOnChange: false,
      validateOnBlur: false,

      onSubmit: () => {
         console.log("Reservando");
         dispatch(setDriverData(formik.values));
         router.push("/pay");
      },
   });

   return (
      <div>
         <Form onFinish={formik.handleSubmit}>
            <Form.Item
               label="Nombre"
               name="name"
               validateStatus={formik.errors.name && "error"}
               help={formik.errors.name}
            >
               <Input
                  onChange={formik.handleChange}
                  value={formik.values.name}
               />
            </Form.Item>

            <Form.Item
               label="Apellidos"
               name="lastname"
               validateStatus={formik.errors.lastname && "error"}
               help={formik.errors.lastname}
            >
               <Input
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
               />
            </Form.Item>

            <Form.Item
               label="Email"
               name="email"
               validateStatus={formik.errors.email && "error"}
               help={formik.errors.email}
            >
               <Input
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
               />
            </Form.Item>

            <Form.Item
               label="Teléfono"
               name="phone"
               validateStatus={formik.errors.phone && "error"}
               help={formik.errors.phone}
            >
               <Input
                  type="tel"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
               />
            </Form.Item>

            <Form.Item
               name="terminos"
               valuePropName="checked"
               validateStatus={formik.errors.terminos && "error"}
               help={formik.errors.terminos}
            >
               <Checkbox onChange={formik.handleChange}>
                  Acepto terminos y condiciones
               </Checkbox>
            </Form.Item>

            <Form.Item className="container-button">
               <Button htmlType="submit" className="btn-form-driver">
                  Continuar
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
}
