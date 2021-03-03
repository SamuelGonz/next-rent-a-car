import Header from "../../layout/Header";
import { Collapse } from "antd";
import { useEffect, useState } from "react";
import { getFagsApi } from "../../api/faqs";
import { map } from "lodash";

const { Panel } = Collapse;
export default function faq() {
   const [faqs, setFaqs] = useState([]);
   useEffect(() => {
      getFagsApi().then((res) => setFaqs(res));
   }, []);
   return (
      <>
         <Header />
         <div className="container">
            <div className="faq">
               <Collapse>
                  {map(faqs, (faq) => (
                     <Panel header={faq.titulo} key={faq.id}>
                        <p>{faq.descripcion}</p>
                     </Panel>
                  ))}
               </Collapse>
            </div>
         </div>
      </>
   );
}
