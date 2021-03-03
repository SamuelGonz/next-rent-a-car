import {
   QuestionCircleOutlined,
   BookOutlined,
   FileProtectOutlined,
   FacebookOutlined,
   InstagramOutlined,
   YoutubeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
export default function Footer() {
   return (
      <footer className="footer">
         <div className="container">
            <div className="row border">
               <div className="col-md-6 col-lg-4">
                  <p>
                     <QuestionCircleOutlined />{" "}
                     <Link href="/faq">
                        <a>Faq</a>
                     </Link>
                  </p>
                  <p>
                     <BookOutlined />{" "}
                     <Link href="/terms">
                        <a>Términos y condiciones de reserva</a>
                     </Link>
                  </p>
                  <p>
                     <FileProtectOutlined /> Política de privacidad
                  </p>
               </div>
               <div className="col-md-6 col-lg-4">
                  <p>
                     <Link href="/contacto">
                        <a>Contacto</a>
                     </Link>
                  </p>
               </div>
               <div className="col-lg-4 footer__social-media">
                  <span className="footer__social-media-item">
                     <FacebookOutlined />
                  </span>
                  <span className="footer__social-media-item">
                     <InstagramOutlined />
                  </span>
                  <span className="footer__social-media-item">
                     <YoutubeOutlined />
                  </span>
               </div>
            </div>
            <div className="row">
               <div className="col-12 col-md-6">
                  <p>
                     © Copyright 2021 <span>RentEasy</span>{" "}
                  </p>
               </div>
            </div>
            <p></p>
         </div>
      </footer>
   );
}
