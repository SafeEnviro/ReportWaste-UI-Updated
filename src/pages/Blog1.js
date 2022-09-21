import React from "react";
import '../App.css';
import { Row,Col } from "react-bootstrap";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";

function Blog1() {
  return (
    <>
    <div className="container">
        <Col className="content">
            <NewNav activepath="/blog1" />
            <Row style={{justifyContent:'center'}}>
              {/* Content */}
              <div className="container">
                  {/* <div className="row">
                      <div className="position-relative">
                          <img src="{{asset('site/img/Group 4859.png')}}" alt="" className="img-fluid" />
                          <h3 className="position-absolute image-centered-text">Our Blog</h3>
                      </div>
                  </div> */}
                  <section className="bg-light p-4 mb-5 mt-4">
                      <div className="row mt-3">
                          <div className="row ">
                              <div className="col-md-12">
                                  <h3>Our Blogs</h3>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                  </p>
                              </div>
                          </div>
                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>1.Significance of the Waste Management Sector</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      An advanced efficient waste management sector is profoundly important to the resolution of many environment, 
                                      climate, resource and healthcare-related challenges and has positive financial and social impacts:
                                  </p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>Environment and Climate</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      In countries, regions and cities around the world, waste is considered as a nuisance as its simply thrown away – 
                                      in places in need of adequate collection systems and disposal facilities. Unattractive surroundings: 
                                      Litter in streets and roads, sullied countryside, and rivers and seas heavily polluted with plastic are obvious 
                                      signs of the disposable mindset. The invisible effects are even greater: Filtering causes diligent defilement of soils, 
                                      surface waters and groundwater, biodegradation discharges methane and carbon dioxide that drive climate change, 
                                      whereas open burning transmits poisonous gasses that contaminate the climate and cause major harm to human wellbeing.
                                      Advanced & waste management essentially cuts such emissions and other environmental and climate impacts. 
                                      There is extra scope for reducing greenhouse gas emissions for countries that are at their early stages 
                                      of adopting systematic waste management. Methane from landfills and dark carbon (sediment) from deficient combustion 
                                      are short-lived climate toxins that contribute significantly to climate change. According to studies by the German 
                                      Federal Environment Agency, by adopting a modern approach to waste management developing countries can cut their total 
                                      greenhouse gas emissions by up to 20 percent.
                                  </p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>Resource Conservation</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      Valuable resources and sources of energy are lost forever by landfilling and open burning.
                                      Resources extracted from the environment for a high cost and going through a chain of industrial
                                        processes to create products are considered as waste when they could be used as secondary resources
                                        to create more wealth and prosperity. In a circular economy, a huge part of municipal, industrial, 
                                        construction and commercial waste can be reused.
                                  </p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>Health </h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      Handling of sometimes hazardous waste carelessly poses tremendous harm for the health of humans and the environment. Waste electrical and electronic 
                                      equipment being burnt to extract metals, for example, produces dioxins; landfill leachate contaminates drinking water; and dangerous substances from 
                                      waste make their way into foodstuffs directly or indirectly. Environment-friendly waste management therefore plays an important part in promoting 
                                      healthcare around many countries. Leftover of foods are a source of sustenance for rats, vermin, flies, mosquitos and other disease vectors. Waste 
                                      that is not methodically collected blocks rainwater and wastewater runoff, leading to flooding and pooled water that serves as a breeding ground 
                                      for disease vectors in the housing environment.</p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>2.How Can You Enhance Your Food Waste Management? </h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      Generally, food waste is recycled using one of two methods, composting and anaerobic digestion. 
                                      The familiar method of food waste management is composting, as many of us use compost products 
                                      in our gardens as soil conditioners. Whilst most of us are familiar with the end product of 
                                      composting, the actual compost itself, some are unaware of how the product is created through 
                                      food recycling. Items of mixed food and garden waste are shredded and placed into a closed system 
                                      where temperatures are increased to 70 degrees centigrade in this method of food waste disposal. 
                                      Then the mixture is left for around 2-4 weeks which ensures that any harmful microbes are killed. 
                                      After this, the mixture is left outside to mature for a time period ranging from a month to three months. 

                                      The other method specified for disposal of food waste is anaerobic digestion, in which food is recycled 
                                      using microorganisms to break down the food waste. While breaking down food waste, other items of waste 
                                      including animal manure, slurries, and energy crops also can be broken down. The anaerobic digestion disposal 
                                      solution takes place inside an enclosed system without oxygen (hence the name anaerobic). In this enclosed system, 
                                      the methane that’s released from the waste is collected and converted into biogas. This methane can be utilized to 
                                      generate electricity or make fuel. Anyways, this is not the only product created through the anaerobic digestion 
                                      process; a nutrient-rich digestate, which can be used as a fertiliser for agriculture and land regeneration projects is also made.
                                  </p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>The Importance of food waste recycling?</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                  When you think about dangers to the climate and contributors to global warming, it’s simple to disregard items of waste such as food waste. 
                                  After all, most of us are attentive on the contaminating effects of cars, fossil fuels, and the plastics that are present in the ocean. However, 
                                  did you know that food waste is a significant contributor to global warming? This is because of the gasses released whilst food waste rots.
                                  When kept in an enclosed environment (such as anaerobic digestion), the methane gas released by rotting food waste, this gas can be collected 
                                  and converted into biogas. However, when food waste spoils in landfill, this gas goes into the atmosphere and contributes to global warming.
                        
                                  In spite of the fact that methane pollution makes up only 20% of all greenhouse gas emissions thankfully, this is not a negligible sum. After all, 
                                  the majority of greenhouse gas emissions is made up of carbon dioxide, methane gas is actually 84 times more potent than carbon dioxide as a heat 
                                  trapping gas. When considering your environmental friendliness in both your personal and professional life can be improved, it’s vital to not just 
                                  examine your carbon footprint, but also your impact to the environment via other greenhouse emissions, such as your methane footprint.
                                    </p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>The Impacts Of Climate Change</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                  Arguably the most serious challenge currently affected by humans as a species is climate change. After all we have to 
                                  keep in mind two of the well-known speeches regarding climate change from last year, when US Congresswoman Alexandria 
                                  Ocasio-Cortez said “the world will end in 12 years if we don't address climate change, and later in the year when Greta 
                                  Thunberg spoke at the United Nations, "The eyes of all future generations are upon you. And if you choose to fail us, 
                                  I say - we will never forgive you."

                                  Not only polar ice caps that’s located thousands of miles away are affected by climate change, we also find issues right 
                                  here at home in the United Kingdom. Climate change is causing the sum of serious weather incidents to increase, furthermore 
                                  within the UK global warming and climate change presents the very serious warning of a rise in flooding in both in land 
                                  and coastal areas. With the recent destruction caused by Storm Ciara which ruined over the countries including a fatality, 
                                  the dangers of flooding are fresh in mind. Anyways, flooding doesn’t need to be important to cause serious issues; it only
                                  takes 6 inches of moving water to knock an adult off their feet.
                                
                                  </p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>3.How to Make Your Rubbish Removal Cheaper </h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      Many people are searching for cheap rubbish removal as they are pressurized financially on households and businesses. 
                                      There’s continuously a trade-off between available time and available money to resolve issues. Clearing out your 
                                      rubbish is no exemption. A little time spent planning for the arrival of your garbage removalist can achieve cheap 
                                      junk evacuation saving you lots of money. This article outlines some ways that rubbish can be removed easily.</p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>•	Make Your Rubbish Easily Accessible </h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      Many people are searching for cheap rubbish removal as they are pressurized financially on households and businesses. 
                                      There’s continuously a trade-off between available time and available money to resolve issues. Clearing out your 
                                      rubbish is no exemption. A little time spent planning for the arrival of your garbage removalist can achieve cheap 
                                      junk evacuation saving you lots of money. This article outlines some ways that rubbish can be removed easily.
                                  </p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>•	Make sure all your Rubbish is in One Location </h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      “Where is your rubbish located on your property?” is a common question that has been always asked by
                                      a rubbish removalist when you contact them for a quote. The difficulty of accessing the rubbish that 
                                      needs to be removed depends on the answer they get. More time is taken to get to, transport and load, 
                                      if it is in the back yard or on a second floor. However, you can get a lower quote if you put the rubbish
                                       on the front lawn, on the nature strip or in your driveway.                    
                                       </p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>•	Separate Similar Rubbish into Piles </h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      Putting all kinds of rubbish into a huge mass needs sorting before being loaded. Those that can be recycled are 
                                      usually separated and loaded in a way that it can be effortlessly processed, however heavy or large materials 
                                      have to be loaded first. Money can be spared if similar rubbish items are placed together in preparation for loading.            
                                      </p>     
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>•	Make Your Rubbish as Flat as Possible </h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      The important thing considered when you ask for a quote is the volume that is measured in cubic metres. You can get a significantly lower quote if you can compress your rubbish down and make it flatter. Dismantling furniture waste or breaking them down into flat boards wherever possible consume less space than if it is left in its original form.   </p>         </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>•   Contain Loose Rubbish & Small Pieces for Easy Collection </h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      Loading process can be much quicker and easier if small pieces or loose rubbish are placed into bags or containers. As it would be more time consuming collecting them if loose rubbish is left around as it can easily get scattered, blown around by wind or get wet from rain.</p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>•	Ask Your Rubbish Removalist </h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      If you are still on the lookout for news ways to get a better deal, It would be ideal if you can ask your rubbish removalist for ideas on ways you can make it easier for them to get the job done in a cheaper manner. Given that, you should get quoted a lower amount, if you have prepared the rubbish to be disposed before as suggested before the quote.   </p>              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>•	Why Recycle?</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>Though the advanced world has made our presence as a human very comfortable and longer living, we create more waste than the past era. The pressure on demand for the extraction and processing of resources from nature can be reduced by increasing our recycled waste percentage. Finding numerous ways to reduce the negative impacts of human activity is a great thing to do in our lives while the population grows.</p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>•	Recyclable Materials</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                    The daily items that can be recycled vary and it is vital to keep in mind that councils differ on what recycling 
                                    services are available. Make sure you check with your local council to find out exactly what can and can’t be recycled 
                                    according to your area. More of our waste can be saved from landfills as new waste management technologies and initiatives 
                                    come along.</p>

                                    <h5>The following materials are currently able to be recycled, depending on your council area.</h5>
                                    <p className="text-dark" style={{fontSize: '13px'}}>
                                    Paper & Cardboard<br />
                                    With recycling centres operating across the country paper and cardboard is well supported for recycling.<br />
                                    Paper: office paper, magazines, newspapers, envelopes and junk mail<br />
                                    Cardboard: moving boxes, cartons, non-plastic packaging, toilet rolls<br />
                                    Glass: Glass can be easily melted down and reused for a multitude of purposes, making it perfect for recycling. <br />
                                    Bottles<br />
                                    Jars<br />
                                    Window panes, glass sheets<br />
                                    Scrap Metal<br />
                                    Steel: wire, food (tin) cans, cooking oil tins, cookware, security screens<br />
                                    Copper: hot water pipes, electrical wire<br />
                                    Lead: car batteries<br />
                                    Aluminium: food & drink cans, foil, aerosol cans<br />
                                    Iron: cookware<br />
                                    Hard Plastics<br />
                                    Milk & juice cartons<br />
                                    Biscuit & food trays<br />
                                    Cleaning product bottles<br />
                                    Plant pots<br />
                                    Outdoor furniture<br />
                                    Containers

                                    </p>
                              </div>
                          </div>
                      </div>

                      <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>What Can’t be Recycled?</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                    Not all materials can be recycled unfortunately. Soft plastic cannot be recycled. 
                                    Organic, biodegradable substances cannot go into your municipal recycling bin. 
                                    The biggest challenge to the recycling industry is Soft plastics, that lead to the 
                                    phasing out of light-weight plastic bags.<br />
                                    Plastic bags or recyclables inside plastic bags<br />
                                    Takeaway coffee cups<br />
                                    Plastic straws<br />
                                    Toothbrushes & tubes<br />
                                    Rope<br />
                                    Disposable nappies<br />
                                    Green waste<br />
                                    Polystyrene (foam)<br />
                                    Plastic bubble wrap<br />
                                    Syringes or medical waste<br />
                                    Food or Dead animals<br />
                                    Oils<br />
                                    Ceramics, ovenware or light bulb

                                    </p>
                                </div>
                            </div>

                        <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>Where Do Non-Recyclables Go?</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                  Non-recyclables end up in landfills after they are typically separated from recyclables. 
                                  It was reported that about two-thirds of the 12.8 million tonnes of waste generated was recycled in 2017, 
                                  while the remaining third ended up in landfills.</p>
                              </div>
                          </div>
                


                      <div className="mt-5"></div>
                  </section>
              </div>
            </Row>
        </Col>
    </div>
    <Footer />
    </>
  );
}

export default Blog1;
