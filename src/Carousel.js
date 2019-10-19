import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Carousel1 = () => {
    return (
        <div>
            <h1>FOR SALE!! TOP & BOTTOM BOX w/ FULL of TOOLS with Jack and Jack Stand included..$2200 FIRM CASH ONLY</h1>
            <h2>Misc - Snap-on, Mac, CornWell and Craftmans.</h2> 
            <h2>Located in Succasunna NJ buyer must pick it up.</h2> 
            <hr />
            <h3>Theirs a lot of stuff included and its hard to write them all down. I think its best for you to come and see it instead.</h3>
            <h3>Note: I only have the key for the bottom box and not the top box.</h3>
            <h3>You can contact me at 919-646-4955. TEXT ONLY.</h3>
            <br />
            <Carousel showArrows={true} dynamicHeight={true} autoPlay>
                <div>
                <img src={require('./image/20191019_120221.jpg')} />
                <p className="legend">Mac Tech 1000 bottom box and Craftmans Upper box</p>
                </div>
                <div>
                <img src={require('./image/20191019_120247.jpg')} />
                <p className="legend">Craftmans Top Box</p>
                </div>
                <div>
                <img src={require('./image/20191019_120251.jpg')} />
                <p className="legend">Mac Tech 1000 bottom box</p>
                </div>
                <div>
                <img src={require('./image/20191019_120309.jpg')} />
                <p className="legend">Side View</p>
                </div>

                <div>
                <img src={require('./image/20191019_120316.jpg')} />
                <p className="legend">More Top Box</p>
                </div>
                <div>
                <img src={require('./image/20191019_120325.jpg')} />
                <p className="legend">MIX Snap on, Mac, CornWell and Craftsmans Rachet, Socket, extension and misc.</p>
                </div>
                <div>
                <img src={require('./image/20191019_120331.jpg')} />
                <p className="legend">Side View</p>
                </div>
                <div>
                <img src={require('./image/20191019_120339.jpg')} />
                <p className="legend">Mac Pliers and Misc</p>
                </div>
                <div>
                <img src={require('./image/20191019_120347.jpg')} />
                <p className="legend">More Pliers</p>
                </div>
                <div>
                <img src={require('./image/20191019_120352.jpg')} />
                <p className="legend">Mix gear wrencha, few snap on and misc wrenches</p>
                </div>
                <div>
                <img src={require('./image/20191019_120358.jpg')} />
                <p className="legend">Digital caliper, tester, wiring and more stuff</p>
                </div>
                <div>
                <img src={require('./image/20191019_120402.jpg')} />
                <p className="legend">Long screws drivers lots of stuff</p>
                </div>


                <div>
                <img src={require('./image/20191019_120408.jpg')} />
                <p className="legend">Lots of torx, allen drive socket, re-threading, multi-car oil socket</p>
                </div>
                <div>
                <img src={require('./image/20191019_120413.jpg')} />
                <p className="legend">Misc item for diagnostic</p>
                </div>
                <div>
                <img src={require('./image/20191019_120455.jpg')} />
                <p className="legend">Air tool, rachet, impact, drill and paint</p>
                </div>
                <div>
                <img src={require('./image/20191019_120505.jpg')} />
                <p className="legend">Snap-in pliers some case and radiator funnel for air bleeding</p>
                </div>
                <div>
                <img src={require('./image/20191019_120513.jpg')} />
                <p className="legend">Lots, Lots case fuel line, oil cap, re-threading to many to list.</p>
                </div>
                <div>
                <img src={require('./image/20191019_120520.jpg')} />
                <p className="legend">Just the logo</p>
                </div>
                <div>
                <img src={require('./image/20191019_120526.jpg')} />
                <p className="legend">Eye protection lots of stuff</p>
                </div>
                <div>
                <img src={require('./image/20191019_120531.jpg')} />
                <p className="legend">Drill bits and grinder tools</p>
                </div>
                <div>
                <img src={require('./image/20191019_120612.jpg')} />
                <p className="legend">Brakes tool kit</p>
                </div>
                <div>
                <img src={require('./image/20191019_120617.jpg')} />
                <p className="legend">File and picks</p>
                </div>
                <div>
                <img src={require('./image/20191019_120621.jpg')} />
                <p className="legend">Screw driver, Snap-on, bluepoint, hooks</p>
                </div>
                <div>
                <img src={require('./image/20191019_120627.jpg')} />
                <p className="legend">Lights</p>
                </div>
                <div>
                <img src={require('./image/20191019_120631.jpg')} />
                <p className="legend">Extra</p>
                </div>
                <div>
                <img src={require('./image/20191019_120635.jpg')} />
                <p className="legend">Pipe wrench, flaring tool and torch</p>
                </div>
                <div>
                <img src={require('./image/20191019_120643.jpg')} />
                <p className="legend">2 Jack stand and 3 tons Jack INCLUDED!!</p>
                </div>
                <div>
                <img src={require('./image/20191019_122650.jpg')} />
                <p className="legend"> 3 tons Jack INCLUDED!!</p>
                </div>
                <div>
                <img src={require('./image/20191019_122652.jpg')} />
                <p className="legend">2 Jack stand</p>
                </div>

            </Carousel>
        </div>
    )
}

export default Carousel1;