function projects() {
        return( 
            <>
                <section id="my-work" className="p-[1em] text-[#25343F] bg-[#BFC9D1] overflow-hidden ">
                    <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl">My projects</h2>
                    <div className="text-center p-[1em] ">
                        <a className="slider active:top-[1px] focus:bg-[#FF9B51]" href="#slide-1">1</a>
                        <a className="slider active:top-[1px] focus:bg-[#FF9B51]" href="#slide-2">2</a>
                        <a className="slider active:top-[1px] focus:bg-[#FF9B51]" href="#slide-3">3</a>
                        <a className="slider active:top-[1px] focus:bg-[#FF9B51]" href="#slide-4">4</a>
                        <a className="slider active:top-[1px] focus:bg-[#FF9B51]" href="#slide-4">5</a>
                    </div>

                    <div className="flex overflow-x-auto snap-x scroll-smooth [-webkit-overflow-scrolling:touch] slides-custom">
                        <div id="slide-1" className="flex flex-col slide">
                        <a href="https://leapforce-cta-section-two-blocks.vercel.app/" className="relative block group overflow-hidden max-w-72">

                        <img
                          className="transition-transform duration-300 group-hover:scale-110"
                          src="./images/LeapForce.png"
                          alt="Leapforce"
                        />

                          <div className="absolute inset-0 bg-black/60 opacity-0 
                                          group-hover:opacity-100 transition 
                                          flex items-center justify-center text-white text-lg font-semibold">
                            View Project
                          </div>

                        </a>
                        <p>LeapForce</p>
                        </div>

                      <div id="slide-2" className="flex flex-col slide">
                      <a href="https://pleasurable-ui.onrender.com/" className="relative block group overflow-hidden max-w-72">
                        
                      <img
                        className="max-w-72 max-h-100 transition-transform duration-300 group-hover:scale-110"
                        src="./images/Funda.png"
                        alt="Funda project"
                      />

                      <div className="absolute inset-0 bg-black/60 opacity-0 
                                        group-hover:opacity-100 transition 
                                        flex items-center justify-center text-white text-lg font-semibold">
                        View Project
                      </div>

                      </a>
                      <p>Funda</p>
                      </div>

                      <div id="slide-3" className="flex flex-col slide">
                        <a href="https://mediahuis.agency.fdnd.nl/" className="relative block group overflow-hidden max-w-72">
                          
                          <img
                            className="max-w-72 max-h-100 transition-transform duration-300 group-hover:scale-110"
                            src="./images/Mediahuis.png"
                            alt="Mediahuis project"
                          />

                          <div className="absolute inset-0 bg-black/60 opacity-0 
                                          group-hover:opacity-100 transition 
                                          flex items-center justify-center text-white text-lg font-semibold">
                            View Project
                          </div>
                          </a>
                          <p>Mediahuis</p>
                          </div>

                          <div id="slide-4" className="flex flex-col slide">
                            <a href="https://proof-of-concept-kaoe.onrender.com/" className="relative block group overflow-hidden max-w-72">
                              
                              <img
                                className="max-w-72 max-h-100 transition-transform duration-300 group-hover:scale-110"
                                src="./images/DeloitteHeadstart.png"
                                alt="Deloitte Headstart project"
                              />

                              <div className="absolute inset-0 bg-black/60 opacity-0 
                                              group-hover:opacity-100 transition 
                                              flex items-center justify-center text-white text-lg font-semibold">
                                View Project
                              </div>

                            </a>
                            <p>Deloitte Headstart</p>
                          </div>

                          <div id="slide-4" className="flex flex-col slide">
                            <a href="https://oncollaboration.agency.fdnd.nl/" className="relative block group overflow-hidden max-w-72">
                              
                              <img
                                className="max-w-72 max-h-100 transition-transform duration-300 group-hover:scale-110"
                                src="./images/Oncollaboration.png"
                                alt="Deloitte Headstart project"
                              />

                              <div className="absolute inset-0 bg-black/60 opacity-0 
                                              group-hover:opacity-100 transition 
                                              flex items-center justify-center text-white text-lg font-semibold">
                                View Project
                              </div>

                            </a>
                            <p>Oncollaboration</p>
                          </div>
                    </div>
                    </div>      
                </section>
            </>
        )  
}

export default projects

