import { LoginOutlined } from "@ant-design/icons";
import LanguageSelector from "../../components/LanguageSelector";
import UseLink from "../../hooks/useLink";
import DropDownReserva from "../../components/DropDownReserva";

export default function Header() {
   return (
      <header className="header">
         <div className="container">
            <div className="row">
               <div className="col-md-5 header__logo">
                  <UseLink href="/">
                     <img
                        src="img/logo2.png"
                        alt="Logotipo empresa"
                        width="150"
                     />
                  </UseLink>
               </div>
               <div className="col-md-7 header__menu">
                  <div>
                     <LanguageSelector />
                  </div>
                  <div>
                     {/* <LoginOutlined /> */}
                     <DropDownReserva />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}
