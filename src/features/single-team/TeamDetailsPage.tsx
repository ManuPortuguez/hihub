import { Link } from 'react-router-dom';
import SingleTeam from '@/images/single-team.jpg';
import Swal from "sweetalert2";
import Progresbar from '@/components/elements/Progressbar';

export default function TeamDetailsPage() {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Extract form values
      const name = formData.get("name") as string;
      const phone = formData.get("phone") as string;
      const email = formData.get("email") as string;
      const subject = formData.get("subject") as string;
      const message = formData.get("message") as string;

      // Validate all fields are filled
      if (name && phone && email && subject && message) {
         Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message sent successfully!",
            showConfirmButton: false,
            timer: 1500
         });
         form.reset();
      }
   };
   return (
      <>
         {/* Team Section Start */}
         <section className="team-details-page main sec-padding">
            <div className="container">
               <div className="row gx-lg-5">
                  <div className="col-lg-4 mb-5 mb-md-0">
                     <aside className="team-sidebar round overflow-hidden">
                        <div className="team-media">
                           <img src={SingleTeam} className="img-fluid" alt="Team" />
                        </div>

                        <div className="team-info-wrap">
                           <div className="team-head border-bottom">
                              <span>Technical Lead</span>
                              <h3 className="display-4 mb-0">Brooklyn Simmons</h3>
                           </div>
                           <div className="team-info">
                              <div className="ts-single">
                                 <h4 className="display-5">Phone Number</h4>
                                 <span><a href="tel:+12318005678990">+ (123) 1800-567-8990</a></span>
                              </div>
                              <div className="ts-single">
                                 <h4 className="display-5">Email Address</h4>
                                 <span><a href="mailto:no-reply@transhub.com">no-reply@transhub.com</a></span>
                              </div>
                              <div className="ts-single">
                                 <h4 className="display-5">Experience</h4>
                                 <span>12 Years</span>
                              </div>
                           </div>
                           <div className="ts-share">
                              <h6>Social Media:</h6>
                              <div className="social-share mt-3">
                                 <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                 <Link to="#"><i className="fa-brands fa-x-twitter"></i></Link>
                                 <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                 <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                              </div>
                           </div>
                        </div>
                     </aside>
                  </div>
                  <div className="col-lg-8">
                     <div className="team-p-details">
                        <h3 className="display-3">Personal Information</h3>
                        <p>Logistics team member supports the supply chain process by coordinating deliveries, managing
                           Logistic shipping documentation, ensuringtimely deliveries. They may also perform other tasks such
                           as Logistics professionals typically work in warehouse, but they may as



                        </p>
                        <p>Many companies rely on the transport of goods for the day-to-day operation of their business.
                           Logistic should integrate a the supply chainfunctions, and bridge the gap businesses within the
                           logistics arena need to hire employees as with the right skill sets Here a the key skillsin highest
                           demand right now. between locations which will then be a catalyst job creation. Globally, the
                           industry has seen immense growth in recent times, but to ensure these growth areas remain
                           efficient, logistics professionals need to be well trained and experienced.</p>


                        <h3 className="display-3">Professional skills</h3>
                        <p>Bring to the table win-win at survival strategies win to ensure with proactiv other domination
                           going with forward, a new normal that has evolved from generation X is on the runway heading.</p>
                        <div className="skill">
                           {/* progress start */}
                           <Progresbar title='Quality Control
                                 System' value={95} />
                           {/* progress end */}

                           {/* progress start */}
                           <Progresbar title='Professional Staff' value={75} />
                           {/* progress end */}

                           {/* progress start */}
                           <Progresbar title='Efficiency
                                 delivery' value={98} />
                           {/* progress end */}
                        </div>
                        {/*Skill End*/}
                        <h3 className="display-3">Markable points of our work</h3>
                        <p>Your warehouse management team is expected to be proficient in utilising the various layout options
                           to optimise workflows, enabling the development of warehouse processes and standard operating </p>
                        <ul className="ct-list">
                           <li>Performance based logistics Defense acquisition strategy for cost-effective weapon system
                              support</li>
                           <li>Legal demand by a shipper or consignee against a carrier in respect of damage or loss to a
                              shipment</li>
                           <li>Function of understanding stock mix of a company and the different demands on that stock</li>
                        </ul>
                        <div className="contact-form round mt-5">
                           <h3 className="display-3">Contact Us</h3>
                           <form onSubmit={handleSubmit}>
                              <div className="d-sm-flex gap-4 justify-content-between">
                                 <div className="form-group half-group">
                                    <input type="text" name="name" placeholder="Your Name" />
                                 </div>
                                 <div className="form-group half-group">
                                    <input type="text" name="phone" placeholder="Your Phone" />
                                 </div>
                              </div>
                              <div className="form-group">
                                 <input type="email" name="email" placeholder="Your Email" />
                              </div>
                              <div className="form-group">
                                 <input type="text" name="subject" placeholder="Your Subject" />
                              </div>
                              <div className="form-group">
                                 <textarea rows={5} name="message" id="message"
                                    placeholder="How can we help you? feel free to get in touch!*"></textarea>
                              </div>
                              <button className="btn btn-primary">Send a message <i className="fa fa-arrow-right"></i>
                                 <span></span></button>
                           </form>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Team Section End */}
      </>

   );
}
