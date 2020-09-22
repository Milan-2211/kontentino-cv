import React from 'react';
import './css/TheNav.css';
import Icon from './../icons';
import { NavLink } from 'react-router-dom';

// Componnets 
import Burger from '../burgerMenu/BurgerMenu';

// Assets
import bbLogo from '../../assets/logo.svg';

import altIcon from '../../assets/alt-pict.svg';

class TheNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRollDown: false
        }
    }
    handleBurger = (data) => {
        this.setState({
            isRollDown: data
        })
        this.props.test(this.state.isRollDown);
    }
    render() {
        return(
            <div className="bs-padd t-n flex-row justify-between">
                <Burger onClickBurgerMenu={this.handleBurger} />
                <div className="t-n-ls flex-row align-center">
                    <div className="t-n-ls_logo-cont">
                       <img src={bbLogo} alt="BackBook logo" className="logo"/>
                   </div>
                    <div className="t-n-ls_srch-cont flex-row align-center">
                        <i>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511.999 511.999" className="ic-xsmall">
                                <g>
                                    <g>
                                        <path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
                                            S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
                                            c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
                                            c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"/>
                                    </g>
                                </g>
                            </svg>
                        </i>
                        <input type="text" className="srch-bar s20 bl-bc" placeholder="Don't search on Backbook"/>
                    </div>
               </div>
                <div className="t-n-cs">
                <NavLink exact to="/" className="t-n-cs_redirect b-hover-1 is-active">
                    <i className="ic-small">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                            <g>
                                <g>
                                    <path d="M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886
                                        c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721
                                        c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337
                                        c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697
                                        c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z"/>
                                </g>
                            </g>
                        </svg>
                    </i>
                </NavLink>
                <NavLink exact to="/" className="t-n-cs_redirect b-hover-1">
                <i className="ic-small">
                    <svg id="Capa_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <g><path d="m90 422h332v-210h-332zm121-165c0-5.537 3.047-10.62 7.925-13.228s10.781-2.329 15.396.747l90 60c4.175 2.783 6.68 7.471 6.68 12.48s-2.505 9.697-6.68 12.48l-90 60c-4.651 3.101-10.586 3.327-15.396.747-4.878-2.606-7.925-7.689-7.925-13.226z"/>
                            <path d="m241 285.022v63.956l47.959-31.978z"/>
                            <path d="m467 122h-422c-24.814 0-45 20.186-45 45v300c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45v-300c0-24.814-20.186-45-45-45zm-15 315c0 8.291-6.709 15-15 15h-362c-8.291 0-15-6.709-15-15v-240c0-8.291 6.709-15 15-15h362c8.291 0 15 6.709 15 15z"/>
                            <path d="m365.395 4.395-85.606 85.605h42.422l64.395-64.395c5.859-5.859 5.859-15.352 0-21.211s-15.352-5.859-21.211.001z"/>
                            <path d="m125.395 4.395c-5.859 5.859-5.859 15.352 0 21.211l64.394 64.394h42.422l-85.606-85.605c-5.859-5.86-15.351-5.86-21.21 0z"/>
                        </g>
                    </svg>
                    </i>
                </NavLink>
                <NavLink exact to="/" className="t-n-cs_redirect b-hover-1">
                    <i className="ic-small">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                        viewBox="0 0 511.999 511.999">
                            <g>
                                <g>
                                    <path d="M438.09,273.32h-39.596c4.036,11.05,6.241,22.975,6.241,35.404v149.65c0,5.182-0.902,10.156-2.543,14.782h65.461
                                        c24.453,0,44.346-19.894,44.346-44.346v-81.581C512,306.476,478.844,273.32,438.09,273.32z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M107.265,308.725c0-12.43,2.205-24.354,6.241-35.404H73.91c-40.754,0-73.91,33.156-73.91,73.91v81.581
                                        c0,24.452,19.893,44.346,44.346,44.346h65.462c-1.641-4.628-2.543-9.601-2.543-14.783V308.725z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M301.261,234.815h-90.522c-40.754,0-73.91,33.156-73.91,73.91v149.65c0,8.163,6.618,14.782,14.782,14.782h208.778
                                        c8.164,0,14.782-6.618,14.782-14.782v-149.65C375.171,267.971,342.015,234.815,301.261,234.815z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M256,38.84c-49.012,0-88.886,39.874-88.886,88.887c0,33.245,18.349,62.28,45.447,77.524
                                        c12.853,7.23,27.671,11.362,43.439,11.362c15.768,0,30.586-4.132,43.439-11.362c27.099-15.244,45.447-44.28,45.447-77.524
                                        C344.886,78.715,305.012,38.84,256,38.84z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M99.918,121.689c-36.655,0-66.475,29.82-66.475,66.475c0,36.655,29.82,66.475,66.475,66.475
                                        c9.298,0,18.152-1.926,26.195-5.388c13.906-5.987,25.372-16.585,32.467-29.86c4.98-9.317,7.813-19.946,7.813-31.227
                                        C166.393,151.51,136.573,121.689,99.918,121.689z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M412.082,121.689c-36.655,0-66.475,29.82-66.475,66.475c0,11.282,2.833,21.911,7.813,31.227
                                        c7.095,13.276,18.561,23.874,32.467,29.86c8.043,3.462,16.897,5.388,26.195,5.388c36.655,0,66.475-29.82,66.475-66.475
                                        C478.557,151.509,448.737,121.689,412.082,121.689z"/>
                                </g>
                            </g>
                        </svg>
                    </i>
                </NavLink>
                <NavLink exact to="/" className="t-n-cs_redirect b-hover-1">
                    <i className="ic-small">
                        <svg id="Capa_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="m392.724 195.271c-24.187 27.63-66.97 27.598-91.129 0-24.187 27.63-66.98 27.598-91.139 0-24.187 27.63-66.98 27.598-91.139 0-19.447 22.216-51.467 26.889-76.094 12.432v46.776h46.345c20.68 0 37.507 16.826 37.507 37.507v100.648c0 20.68-16.826 37.507-37.507 37.507h-46.346v74.383c0 4.124 3.353 7.477 7.477 7.477h118.776v-220.016c0-20.68 16.826-37.507 37.507-37.507h98.036c20.68 0 37.507 16.826 37.507 37.507v220.015h118.775c4.124 0 7.477-3.353 7.477-7.477v-74.383h-46.345c-20.68 0-37.507-16.826-37.507-37.507v-100.648c0-20.68 16.826-37.507 37.507-37.507h46.345v-46.746c-24.709 14.468-56.685 9.664-76.053-12.461z"/>
                                <path d="m504.523 69.228h-497.046c-4.124 0-7.477 3.353-7.477 7.477v23.062c0 4.124 3.353 7.477 7.477 7.477h497.045c4.124 0 7.477-3.353 7.477-7.477v-23.062c.001-4.124-3.352-7.477-7.476-7.477z"/>
                                <path d="m446.026 7.477c0-4.124-3.353-7.477-7.477-7.477h-365.097c-4.124 0-7.477 3.353-7.477 7.477v31.711h380.051z"/>
                                <path d="m95.343 176.993c10.835-10.815 8.959-21.699 8.959-39.739h-61.08v.01h-.02c0 20.09-.008 18.188.02 19.189.896 26.625 33.33 39.365 52.121 20.54z"/>
                                <path d="m195.441 155.402c0-2.221 0-15.925 0-18.148h-61.11v18.148c0 16.846 13.713 30.55 30.56 30.55 16.846 0 30.55-13.704 30.55-30.55z"/>
                                <path d="m286.58 155.402c0-2.595 0-15.511 0-18.148h-61.11v18.148c0 16.846 13.703 30.55 30.55 30.55s30.56-13.704 30.56-30.55z"/>
                                <path d="m377.709 155.402c0-2.595 0-15.511 0-18.148h-61.1v18.148c0 16.846 13.703 30.55 30.55 30.55s30.55-13.704 30.55-30.55z"/>
                                <path d="m468.778 137.254h-61.04v18.148c0 16.818 13.671 30.55 30.56 30.55 16.864 0 30.55-13.723 30.55-30.55 0-2.27 0-15.867 0-18.138h-.07z"/>
                                <path d="m305.018 284.508h-98.036c-4.124 0-7.477 3.353-7.477 7.477v220.015h112.99v-220.015c0-4.124-3.353-7.477-7.477-7.477z"/>
                                <path d="m97.045 392.633v-100.648c0-4.124-3.353-7.477-7.477-7.477h-46.346v115.603h46.345c4.125 0 7.478-3.354 7.478-7.478z"/>
                                <path d="m414.955 291.985v100.648c0 4.124 3.353 7.477 7.477 7.477h46.345v-115.602h-46.345c-4.123 0-7.477 3.353-7.477 7.477z"/>
                            </g>
                        </svg>
                    </i>
                </NavLink>
                <NavLink exact to="/" className="t-n-cs_redirect b-hover-1">
                    <i className="ic-small">
                        <svg id="Capa_1" enableBackground="new 0 0 510.513 510.513" viewBox="0 0 510.513 510.513" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="m508.934 374.044-21.002-114.24c-6.75-52.217-51.437-91.535-104.128-91.535h-257.1c-52.691 0-97.377 39.318-104.128 91.536l-21.002 114.239c-10.442 56.8 32.377 109.844 89.812 112.149 54.727 2.191 98.696-42.488 98.868-95.801.002-.19-6.175-.124 130.001-.124 0 53.13 43.973 98.129 98.868 95.925 57.175-2.295 100.305-55.077 89.811-112.149zm-325.68-71.775h-25v25c0 8.284-6.716 15-15 15s-15-6.716-15-15v-25h-25c-8.284 0-15-6.716-15-15s6.716-15 15-15h25v-25c0-8.284 6.716-15 15-15s15 6.716 15 15v25h25c8.284 0 15 6.716 15 15s-6.716 15-15 15zm159-14c0 8.284-6.716 15-15 15s-15-6.716-15-15v-1c0-8.284 6.716-15 15-15s15 6.716 15 15zm39.93 40.48c-.816 7.863-7.596 14.17-16.41 13.45-8.393-.876-14.286-8.343-13.45-16.4.895-8.633 8.834-14.936 17.86-13.24 7.967 1.656 12.74 8.911 12 16.19zm0-80.01c-.86 8.461-8.404 14.277-16.41 13.46-8.412-.878-14.269-8.35-13.45-16.41.917-8.667 8.867-14.92 17.86-13.23 7.988 1.66 12.75 8.952 12 16.18zm40.07 39.53c0 8.284-6.716 15-15 15s-15-6.716-15-15v-1c0-8.284 6.716-15 15-15s15 6.716 15 15z"/>
                                <path d="m216.363 104.378c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.857 21.213 0 9.77-9.77 25.584-9.772 35.355 0 5.858 5.858 15.355 5.858 21.213 0s5.858-15.355 0-21.213c-21.443-21.445-56.336-21.444-77.781 0z"/>
                                <path d="m192.321 80.336c34.781-34.781 91.08-34.787 125.865 0 5.857 5.858 15.355 5.858 21.213 0s5.858-15.355 0-21.213c-46.504-46.505-121.78-46.511-168.291 0-5.858 5.858-5.858 15.355 0 21.213s15.356 5.858 21.213 0z"/>
                            </g>
                        </svg>
                    </i>
                </NavLink>
                </div>
                <div className="t-n-rs align-center">
                    <Icon src={altIcon} size="ic-med" />
                    <Icon src={altIcon} size="ic-med" />
                    <Icon src={altIcon} size="ic-med" />
                    <Icon src={altIcon} size="ic-med" />
                    <Icon src={altIcon} size="ic-med" />
               </div>
            </div>
        )
    }
}

export default TheNav;