import ChooseSh from '@/images/choose-sh.png';
import ChooseImg from '@/images/choose-img.png';
import ChooseImg2 from '@/images/choose-img2.png';
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';

export default function ChooseSec() {
   return (
      <>
         {/* Choose Section Start */}
         <section className="choose-sec bg-shade sec-padding position-relative">
            <img src={ChooseSh} alt="shape" className="anim-img left-bottom moveY" />
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <FadeInAdvanced variant='slideInLeft' >
                        <div className="choose-media position-relative">
                           <img className="img-fluid" src={ChooseImg} alt="Oficina en China" />
                           <img className="abs-img img-fluid" src={ChooseImg2} alt="Equipo local en China" />
                        </div>
                     </FadeInAdvanced>
                  </div>
                  <div className="col-lg-6">
                     <div className="choose-content">
                        <FadeInAdvanced variant="fadeInUp">
                           <TextAnimation animationStyle="style1">
                              <span className="sub-title fadeInUp"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="18"
                                 fill="none" viewBox="0 0 30 18">
                                 <path fill="#fd5523"
                                    d="M8.125 15.429h-2.5a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h2.5c.166 0 .325.068.442.188a.65.65 0 0 1 0 .91.62.62 0 0 1-.442.188m20.313 0h-1.563a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h1.044l.842-4.618c-.011-2.364-1.973-4.382-4.386-4.382h-4.104l-1.989 9h3.593c.166 0 .325.068.442.188a.653.653 0 0 1 0 .91.62.62 0 0 1-.442.188H17.5a.61.61 0 0 1-.488-.242.65.65 0 0 1-.122-.543L19.162 4.36a.65.65 0 0 1 .22-.361.6.6 0 0 1 .39-.14h4.603C27.476 3.857 30 6.452 30 9.642l-.949 5.261a.65.65 0 0 1-.214.377.6.6 0 0 1-.4.148" />
                                 <path fill="#fd5523"
                                    d="M24.375 18c-1.722 0-3.125-1.441-3.125-3.214s1.403-3.215 3.125-3.215c1.723 0 3.125 1.442 3.125 3.215S26.098 18 24.375 18m0-5.143c-1.034 0-1.875.866-1.875 1.929s.841 1.928 1.875 1.928 1.875-.865 1.875-1.928-.841-1.929-1.875-1.929M10.625 18C8.903 18 7.5 16.559 7.5 14.786s1.403-3.215 3.125-3.215c1.723 0 3.125 1.442 3.125 3.215S12.348 18 10.625 18m0-5.143c-1.034 0-1.875.866-1.875 1.929s.841 1.928 1.875 1.928 1.875-.865 1.875-1.928c0-1.064-.841-1.929-1.875-1.929m-2.5-9h-5a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.91.62.62 0 0 1 .442-.188h5c.166 0 .325.068.442.189a.65.65 0 0 1 0 .909.62.62 0 0 1-.442.188m0 3.857h-6.25a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.91.62.62 0 0 1 .442-.187h6.25c.166 0 .325.067.442.188a.65.65 0 0 1 0 .909.62.62 0 0 1-.442.188m0 3.857h-7.5a.62.62 0 0 1-.442-.188.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188h7.5c.166 0 .325.067.442.188a.65.65 0 0 1 0 .91.62.62 0 0 1-.442.187" />
                                 <path fill="#fd5523"
                                    d="M17.5 15.429h-4.375a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909.62.62 0 0 1 .442-.188H17l2.84-12.857H5.625a.62.62 0 0 1-.442-.189.65.65 0 0 1 0-.909A.62.62 0 0 1 5.625 0h15a.61.61 0 0 1 .488.241.65.65 0 0 1 .122.543L18.11 14.927a.65.65 0 0 1-.22.36.6.6 0 0 1-.39.142" />
                              </svg>Oficina en China sobre el Terreno</span>
                           </TextAnimation>
                        </FadeInAdvanced>
                        <h2 className="sec-title">
                           <TextAnimation animationStyle="style1">
                              Tu Oficina en China sobre el Terreno
                           </TextAnimation>
                        </h2>
                        <p>
                           Somos tus ojos, tu voz y tu autoridad en China. Desde auditorías in situ hasta la
                           aplicación de contratos y supervisión logística, nuestra presencia garantiza que tus
                           operaciones sean seguras, conformes y estén totalmente bajo control, donde sea que estés
                           en el mundo.
                        </p>
                        <div className="mt-4">
                           <h3 className="h5">Los Negocios Reales Ocurren Cara a Cara</h3>
                           <p>
                              <strong>Guanxi (关系):</strong> Esto no es solo networking; es construir relaciones profundas
                              basadas en la confianza. Esto se cultiva mejor a través de comidas compartidas,
                              ceremonias de té, visitas a fábricas e innumerables interacciones en persona a lo largo
                              del tiempo.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Choose Section End */}
      </>

   );
}
