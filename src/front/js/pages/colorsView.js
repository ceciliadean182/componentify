import React from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';



export const ColorsView = () => {
    return (
        <div className="container">
            <div className="row">
                <SideBar />
                <div className="col-10">
                    <div className="container">
                        <div className="row">
                            <h1 className="mt-3"><strong>Colors</strong></h1>
                            <p className="fs-5 mt-2 mb-3">Express significance using <span className="text-componentify">color</span> through a selection of color utility classes.</p>
                           
                         <div className="c-alert c-alert-lavender mt-2 mb-3" role="alert">
                                <p><strong>Remember this accessibility tip:  </strong> Using color to convey meaning only communicates visually, and it won't be understood by users who rely on assistive technologies like screen readers. Make sure the meaning is clear through the content itself, like having visible text with ample color contrast, or include it through alternative methods, such as hidden text using the .visually-hidden class.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <p className="text-risk"> .text-risk </p>
                                    <p className="text-caution"> .text-caution </p>
                                    <p className="text-silver"> .text-silver </p>
                                    <p className="text-gold"> .text-gold </p>
                                    <p className="text-lime"> .text-lime </p>
                                    <p className="text-azure"> .text-azure </p>
                                    <p className="text-mocca"> .text-mocca </p>
                                    <p className="text-aqua"> .text-aqua  </p>
                                    <p className="text-slate"> .text-slate  </p>
                                    <p className="text-componentify"> .text-componentify  </p>
                                    <p className="text-lollypop"> .text-lollypop  </p>
                                    <p className="text-mint"> .text-mint </p>
                                    <p className="text-gloomy"> .text-gloomy </p>
                                    <p className="text-fog"> .text-fog </p>
                                    <p className="text-dark"> .text-dark </p>
                                    <p className="text-win"> .text-win </p>
                                    <p className="text-lavender"> .text-lavender </p>
                                    <p className="text-purple"> .text-purple  </p>
                            </div>

                         


                            <div className="col-lg-9 col-md-9 col-sm-9 col-12" style={{ width: '70%' }}>
                                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                                    {                                  
`<p class="text-risk"> .text-risk </p>
<p class="text-caution"> .text-caution </p>
<p class="text-silver"> .text-silver </p>
<p class="text-gold"> .text-gold </p>
<p class="text-lime"> .text-lime </p>
<p class="text-azure"> .text-azure </p>
<p class="text-mocca"> .text-mocca </p>
<p class="text-aqua"> .text-aqua  </p>
<p class="text-slate"> .text-slate  </p>
<p class="text-componentify"> .text-componentify  </p>
<p class="text-lollypop"> .text-lollypop  </p>
<p class="text-mint"> .text-mint </p>
<p class="text-gloomy"> .text-gloomy </p>
<p class="text-fog"> .text-fog </p>
<p class="text-dark"> .text-dark </p>
<p class="text-win"> .text-win </p>
<p class="text-lavender"> .text-lavender </p>
<p class="text-purple"> .text-purple  </p>`}
                                </SyntaxHighlighter>
                            </div>


<hr className="mb-5 mt-5"></hr>










                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorsView;