import { useRouter } from "next/router";
import { GlobalOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Dropdown, Button, Form, Input } from "antd";
const languagesValues = [
   ["es", "Español"],
   ["en", "Ingles"],
];

export default function LanguageSelector() {
   const [showLanguage, setShowLanguage] = useState(false);
   const router = useRouter();

   const changeLang = (e) => {
      console.log(e);
      router.push(router.pathname, router.pathname, {
         locale: e.target.value,
      });
   };

   const changeLangClick = (e) => {
      router.push(router.pathname, router.pathname, {
         locale: e,
      });
      setShowLanguage(false);
   };

   const openLanguage = () => {
      setShowLanguage(!showLanguage);
   };

   return (
      <div className="language">
         <Dropdown
            overlay={
               <div className="language__lang">
                  <ul>
                     {languagesValues.map((lang) => {
                        if (lang[0] === router.locale) {
                           return;
                        } else {
                           return (
                              <li
                                 value={lang[0]}
                                 key={lang[0]}
                                 className="languege-li"
                                 onClick={() => changeLangClick(lang[0])}
                              >
                                 <img
                                    src={`img/flag/${lang[0]}.png`}
                                    alt={`Bandera de ${lang[1]}`}
                                    className="language__img"
                                 />{" "}
                                 {lang[1]}
                              </li>
                           );
                        }
                     })}
                  </ul>
               </div>
            }
            placement="bottomLeft"
         >
            <GlobalOutlined />
         </Dropdown>
      </div>
   );
}
