import { Link } from 'react-router-dom';
import img404 from '@/images/404.svg';

export default function ErrorSec() {
   return (
      <>
         {/* Promo Section End */}
         <section className="error-sec sec-padding">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="error-wrap text-center mx-auto">
                        <img className="img-fluid" src={img404} alt="404" />
                        <div className="errot-txt">
                           <h2 className="display-3">Opp’s that page can’t be found</h2>
                           <p>It looks like nothing was found at this location. Maybe try one of
                              the links below or a search?</p>
                           <Link to="/" className="btn btn-dark"><i className="fa-solid fa-house"></i> back to home</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Footer Start */}
      </>

   );
}
