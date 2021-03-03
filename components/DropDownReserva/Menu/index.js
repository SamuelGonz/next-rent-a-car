import { Button, Form, Input } from "antd";
import { useState } from "react";

import { useRouter } from "next/router";

export default function Menu({ setVisibleDropDown }) {
   const router = useRouter();

   const [formValues, setFormValues] = useState({
      email: "",
      referencia: "",
   });

   const handleSubmit = () => {
      if (
         formValues.referencia.trim() === "" ||
         formValues.referencia.length < 4
      ) {
         return;
      }

      if (formValues.email.trim() === "" || formValues.email.length < 4) {
         return;
      }
      setVisibleDropDown(false);

      router.push({
         pathname: "/my-reserva",
         query: {
            email: formValues.email,
            referencia: formValues.referencia,
         },
      });
   };

   return (
      <div className="drop-down-reserva">
         <Form onFinish={handleSubmit}>
            <Input
               placeholder="Email"
               value={formValues.email}
               onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
               }
               name="email"
            />
            <Input
               placeholder="Referencia"
               value={formValues.referencia}
               onChange={(e) =>
                  setFormValues({ ...formValues, referencia: e.target.value })
               }
               name="referencia"
            />

            <Button htmlType="submit" className="my-reserva__btn">
               Ir a la reserva
            </Button>
         </Form>
      </div>
   );
}
