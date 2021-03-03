import Header from "../layout/Header";
import FormSearchPrices from "../components/FormSearchPrices";
import Footer from "../layout/Footer";
import Carousel from "../components/Carousel";

export default function Home({ home }) {
   return (
      <>
         <Header />

         <div className="hero">
            <div className="container index__container">
               <div className="row index__row">
                  <div className="col-12 offset-lg-2 col-lg-8 mt-2 index__form">
                     <FormSearchPrices />
                  </div>

                  <div className="col-12 index__title">
                     <h1>{home.title}</h1>
                  </div>
               </div>
            </div>
         </div>

         <Carousel />

         <Footer />
      </>
   );
}

export async function getStaticProps({ locale }) {
   const response = await import(`../lang/${locale}.json`);

   return { props: { home: response.default.home } };
}
