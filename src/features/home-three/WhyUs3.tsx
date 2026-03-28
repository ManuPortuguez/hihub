import { useState } from "react";
import CustomSelect, { type OptionType, type SimpleChangeHandler } from "@/components/elements/CustomSelect";
import TextAnimation from '@/components/elements/TextAnimation';
import SlideAnim from '@/images/slide-anim.png';
import WhuUsBg from '@/images/whu-us-bg.jpg';
import Swal from "sweetalert2";
import Progresbar from "@/components/elements/Progressbar";

const cityOptions = [
   { value: '1', label: 'Denvar' },
   { value: '2', label: 'Sydney' },
   { value: '3', label: 'London' },
   { value: '4', label: 'Korachi' },
   { value: '5', label: 'Chittagong' },
   { value: '6', label: 'Denvar' }
];

const freightOptions = [
   { value: '1', label: 'Air Freight' },
   { value: '2', label: 'General Cargo' },
   { value: '3', label: 'Bulk Cargo' },
   { value: '4', label: 'Oversized Cargo' }
];

export default function WhyUs3() {
   const [selectedCity, setSelectedCity] = useState<OptionType | null>(null);
   const [selectedFreight, setSelectedFreight] = useState<OptionType | null>(null);

   const handleCityChange: SimpleChangeHandler = (newValue) => {
      setSelectedCity(newValue as OptionType | null);
   };

   const handleFreightChange: SimpleChangeHandler = (newValue) => {
      setSelectedFreight(newValue as OptionType | null);
   };

   const handleSubmitChat = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Extract form values
      const Name = formData.get("name") as string;
      const Email = formData.get("email") as string;
      const Phone = formData.get("phone") as string;

      // Validate all fields are filled
      if (Name && Email && Phone) {
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
         {/* About Section Start */}
         <section className="why-us3 sec-padding jarallax" data-jarallax data-speed=".4">
            <img src={WhuUsBg} className="jarallax-img" />
            <img src={SlideAnim} className="abs-img  bottom-0" />
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="why-txt">
                        <div className="sec-intro">
                           <span className="sub-title fadeInUp">
                              <TextAnimation animationStyle='style1'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="18" fill="none" viewBox="0 0 30 18">
                                    <path fill="#fd5523"
                                       d="M8.125 15.429h-2.5a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h2.5c.166 0 .325.068.442.188a.65.65 0 0 1 0 .91.62.62 0 0 1-.442.188m20.313 0h-1.563a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h1.044l.842-4.618c-.011-2.364-1.973-4.382-4.386-4.382h-4.104l-1.989 9h3.593c.166 0 .325.068.442.188a.653.653 0 0 1 0 .91.62.62 0 0 1-.442.188H17.5a.61.61 0 0 1-.488-.242.65.65 0 0 1-.122-.543L19.162 4.36a.65.65 0 0 1 .22-.361.6.6 0 0 1 .39-.14h4.603C27.476 3.857 30 6.452 30 9.642l-.949 5.261a.65.65 0 0 1-.214.377.6.6 0 0 1-.4.148" />
                                    <path fill="#fd5523"
                                       d="M24.375 18c-1.722 0-3.125-1.441-3.125-3.214s1.403-3.215 3.125-3.215c1.723 0 3.125 1.442 3.125 3.215S26.098 18 24.375 18m0-5.143c-1.034 0-1.875.866-1.875 1.929s.841 1.928 1.875 1.928 1.875-.865 1.875-1.928-.841-1.929-1.875-1.929M10.625 18C8.903 18 7.5 16.559 7.5 14.786s1.403-3.215 3.125-3.215c1.723 0 3.125 1.442 3.125 3.215S12.348 18 10.625 18m0-5.143c-1.034 0-1.875.866-1.875 1.929s.841 1.928 1.875 1.928 1.875-.865 1.875-1.928c0-1.064-.841-1.929-1.875-1.929m-2.5-9h-5a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.91.62.62 0 0 1 .442-.188h5c.166 0 .325.068.442.189a.65.65 0 0 1 0 .909.62.62 0 0 1-.442.188m0 3.857h-6.25a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.91.62.62 0 0 1 .442-.187h6.25c.166 0 .325.067.442.188a.65.65 0 0 1 0 .909.62.62 0 0 1-.442.188m0 3.857h-7.5a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h7.5c.166 0 .325.067.442.188a.65.65 0 0 1 0 .91.62.62 0 0 1-.442.187" />
                                    <path fill="#fd5523"
                                       d="M17.5 15.429h-4.375a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188H17l2.84-12.857H5.625a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909A.62.62 0 0 1 5.625 0h15a.61.61 0 0 1 .488.241.65.65 0 0 1 .122.543L18.11 14.927a.65.65 0 0 1-.22.36.6.6 0 0 1-.39.142" />
                                 </svg>
                                 Why We Special</TextAnimation></span>
                           <h2 className="sec-title text-white">
                              <TextAnimation animationStyle='style1'>
                                 We Want to Make a<br /> Good Impact on Your<br /> Business
                              </TextAnimation>
                           </h2>
                           <p>At Transhub, we are committed to revolutionizing the transportation industry through innovative
                              solutions and unparalleled service.</p>
                        </div>
                        <div className="success-stat">
                           <Progresbar title="Shipping" value={90} />
                           <Progresbar title="Successful Delivery" value={95} />
                           <Progresbar title="Managment" value={91} />
                        </div>
                        <div className="quick-call d-flex align-items-center">
                           <span className="bg-info icon-lg rounded-circle text-primary"><i
                              className="fa-solid fa-phone-volume"></i></span>
                           <div className="conn-txt ms-3">
                              <p className="m-0">Call Us Any Time:</p>
                              <a className="h6 text-info" href="tel:148359505285">+148 359 505 285</a>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="quote-form rounded-4 fadeInUp">
                        <h3>Request Quote Form</h3>
                        <form onSubmit={handleSubmitChat}>
                           <div className="row">
                              <div className="col-lg-6 form-group">
                                 <label htmlFor="name">Full Name</label>
                                 <input id="name" name='name' type="text" placeholder="Full Name" />
                              </div>
                              <div className="col-lg-6 form-group">
                                 <label htmlFor="email">Email Address</label>
                                 <input id="email" name='email' type="email" placeholder="Email" />
                              </div>
                              <div className="col-lg-6 form-group">
                                 <label htmlFor="phone">Phone</label>
                                 <input id="phone" name='phone' type="text" placeholder="+554 6487 244" />
                              </div>
                              <div className="col-lg-6 form-group">
                                 <label htmlFor="city">Delivery City</label>
                                 <CustomSelect
                                    id="city"
                                    name="City"
                                    options={cityOptions}
                                    value={selectedCity}
                                    onChange={handleCityChange}
                                    customColors={{ background: '#181C2B', tertiary: '#ffffff' }}
                                    placeholder="Select City"
                                 />
                              </div>
                              <div className="col-lg-6 form-group">
                                 <label htmlFor="ftype">Freight</label>
                                 <CustomSelect
                                    id="ftype"
                                    name="ftype"
                                    options={freightOptions}
                                    value={selectedFreight}
                                    customColors={{ background: '#181C2B', tertiary: '#ffffff' }}
                                    onChange={handleFreightChange}
                                    placeholder="Select Freight"
                                 />
                              </div>
                              <div className="col-lg-6 form-group">
                                 <label htmlFor="wight">Weight</label>
                                 <input type="text" id="wight" placeholder="Weight" />
                              </div>
                              <div className="col-12">
                                 <button className="btn btn-primary">Submit Request <i className="fa fa-arrow-right"></i>
                                    <span></span></button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* About Section End */}
      </>

   );
}
