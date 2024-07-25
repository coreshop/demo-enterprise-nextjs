import React from 'react';
import Image from 'react-bootstrap/Image';
import './slide.scss';

interface SlideProps {
    dark: boolean,
    imageSrc?: string | null,
    headline?: string,
    lead?: string,
    height?: string,
    displayBtn?: boolean
}

export const Slide = ({
    dark,
    imageSrc,
    headline,
    lead,
    height,
    displayBtn
}: SlideProps) => {
    return (
        <div className={`${dark ? 'text-white ' : ''} height-${height} slide w-100 bg-light d-flex align-items-end position-relative overflow-hidden`}>
            <div className="hero--image position-absolute top-0 end-0 bottom-0 start-0 w-100">
                { imageSrc &&
                    <Image src={imageSrc} alt="Hero Image" className="w-100" fluid/>
                }
            </div>
            { headline || lead || displayBtn &&
                <div className="container px-4 py-3 my-5 text-center z-1">
                    { headline && <h2 className="">{headline}</h2> }
                    { lead && <p className="lead">{lead}</p> }
                    { displayBtn && <button className="btn btn-primary">Call to Action</button> }
                </div>
            }
        </div>
    )
}