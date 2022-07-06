import React from 'react'

const Card = ({src, price, name, address, desc}) => {
  return (
    <div className="card">
        <div className="image">
            <img src={src} alt="" />
        </div>
        <div className="price">
            <div className="price-view">
                <p>${price}<span 
                style={{fontSize: "1rem", 
                fontWeight: 400, 
                color: "#8c8c8c",
                }}
                >/month</span></p>
            </div>
            <div className="wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#7064f2" stroke="none">
<path fill="#7064f2" d="M245 631 c-92 -24 -173 -90 -215 -176 -19 -41 -24 -66 -24 -135 -1 -78 2 -90 33 -148 38 -70 70 -100 145 -140 43 -22 64 -26 136 -26 72 0 93 4 136 26 75 40 107 70 145 140 31 58 34 70 33 148 0 72 -4 93 -26 136 -39 75 -70 107 -137 143 -65 34 -164 49 -226 32z m165 -37 c41 -12 67 -29 111 -73 44 -44 61 -70 73 -111 34 -115 12 -206 -73 -291 -85 -85 -176 -107 -291 -73 -75 22 -162 109 -184 184 -34 116 -12 206 73 291 85 84 176 107 291 73z"/>
<path fill="#7064f2" d="M192 455 c-46 -20 -68 -75 -52 -129 13 -43 96 -133 148 -160 30 -15 34 -15 64 0 52 27 135 117 148 160 17 57 -6 109 -56 130 -34 14 -41 14 -81 -1 -40 -16 -47 -16 -84 -1 -47 19 -45 19 -87 1z m99 -41 c19 -17 45 -18 54 -3 4 5 19 15 33 20 36 14 77 -5 93 -44 12 -27 10 -35 -12 -75 -14 -25 -51 -66 -82 -90 l-57 -45 -57 45 c-31 24 -68 65 -82 90 -22 40 -24 48 -12 75 21 50 80 63 122 27z"/>
</g>
</svg>
            </div>
        </div>
        <div className="name">
            <h1>{name}</h1>
        </div>
        <div className="address">
            <p>{address}</p>
        </div>
        <hr />
        <div className="desc">
            <div className="beds">
                <p><svg width="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#7064f2" d="M176 288C220.1 288 256 252.1 256 208S220.1 128 176 128S96 163.9 96 208S131.9 288 176 288zM544 128H304C295.2 128 288 135.2 288 144V320H64V48C64 39.16 56.84 32 48 32h-32C7.163 32 0 39.16 0 48v416C0 472.8 7.163 480 16 480h32C56.84 480 64 472.8 64 464V416h512v48c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V224C640 170.1 597 128 544 128z"/></svg>
                &nbsp; {desc.beds} beds</p>
            </div>
            <div className="bathrooms">
                <p><svg width="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#7064f2" d="M432 48C440.8 48 448 40.75 448 32V16C448 7.25 440.8 0 432 0h-416C7.25 0 0 7.25 0 16V32c0 8.75 7.25 16 16 16H32v158.7C11.82 221.2 0 237.1 0 256c0 60.98 33.28 115.2 84.1 150.4l-19.59 64.36C59.16 491.3 74.53 512 96.03 512h255.9c21.5 0 36.88-20.75 30.62-41.25L363 406.4C414.7 371.2 448 316.1 448 256c0-18.04-11.82-34.85-32-49.26V48H432zM96 72C96 67.63 99.63 64 104 64h48C156.4 64 160 67.63 160 72v16C160 92.38 156.4 96 152 96h-48C99.63 96 96 92.38 96 88V72zM224 288C135.6 288 64 273.7 64 256c0-17.67 71.63-32 160-32s160 14.33 160 32C384 273.7 312.4 288 224 288z"/></svg>
                &nbsp;{desc.bathrooms} bathrooms</p>
            </div>
            <div className="space">
                <p><svg width="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#7064f2" d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z"/></svg>
                &nbsp; {desc.space} m<sup>2</sup></p>
            </div>
        </div>
    </div>
  )
}

export default Card