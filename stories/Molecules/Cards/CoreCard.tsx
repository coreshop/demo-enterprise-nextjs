'use client';

import React from 'react';
import Card from 'react-bootstrap/Card';
import { CoreButton } from '../../Atoms/Button/CoreButton';
import { CoreButtontype } from '../../Atoms/Button/types';
import "./cards.scss";
import {PriceTag} from "../../Atoms/PriceTag/PriceTag";
import Link from "next/link";
import {CoreCardProps} from "@/stories/Molecules/Cards/types";




export const CoreCard = ({
    imageSrc,
    imageSrc2,
    title,
    subtitle,
    description,
    layout = "layout1",
    link,
    btnBottom,
    priceTag
}:CoreCardProps) => {
  return (
    layout === "layout1" ? (
      <Card className={layout}>
          {imageSrc && (
            <div className='position-relative'>
                {link ? (
                    <Link href={link}>
                        <Card.Img variant="top" src={imageSrc} />
                    </Link>
                ) : (
                    <Card.Img variant="top" src={imageSrc} />
                )}
              <div className="position-absolute top-0 start-0 p-3">
                <CoreButton 
                    text="" 
                    variant={CoreButtontype.Primary} 
                    icon={true}
                    iconPre={true}
                    iconType="Search"
                    size="sm"
                    buttonType="a"
                    href="/"
                  />
              </div>
              <div className="position-absolute top-0 end-0 p-3">
                <CoreButton 
                    text="" 
                    variant={CoreButtontype.Link} 
                    icon={true}
                    iconPre={true}
                    iconType="Heart"
                    buttonType="a"
                    href="/"
                  />
              </div>
            </div>
          )}
          <Card.Body className="d-flex flex-column">
              { title && <Card.Title>{ title }</Card.Title> }
              { subtitle && <Card.Subtitle className="my-2 gray-600">{ subtitle }</Card.Subtitle> }
              { description &&
                <Card.Text>
                  { description }
                </Card.Text>
              }
              <div className="mt-auto">
                  <div className="mb-3">
                      { priceTag && priceTag }
                  </div>
                  {btnBottom && btnBottom}
              </div>
          </Card.Body>
      </Card>
          ): (layout === "layout2" ? 
      <Card className={`flex-sm-row p-2 ${layout}`}>
        <div>
          {imageSrc2 && <Card.Img variant="middle" className="img-fluid" src={imageSrc2} />}
        </div>
        <Card.Body className="p-0">
          <div className="ps-2">
            { title && <Card.Title as="h6" className="mb-1">{ title }</Card.Title> }
            <div className="text-14 mb-1">Attribute: Value Attribute:Value</div>
            <div className="pt-1 mb-1"><PriceTag size="small" offerPrice="" price="125.50" vat={false} /></div>
          </div>
          <CoreButton 
            text="Add to cart" 
            size="sm"
            variant={CoreButtontype.Link} 
            icon={true}
            iconPost={true}
            iconType="CartPlus" 
            buttonType="a"
            href="/"
            textAlign="start"
          />
        </Card.Body>
      </Card>  : (
        <Card className= {`flex-sm-row ${layout}`} border="0">
        <div>
          {imageSrc2 && <Card.Img variant="middle" className="img-fluid" src={imageSrc2} />}
        </div>
        <Card.Body className="p-0">
          <div className="ps-sm-2">
            { title && <Card.Title as="h6" className="mb-1">{ title }</Card.Title> }
            <div className="text-14 mb-1">Attribute: Value Attribute:Value3</div>
          </div>
        </Card.Body>
      </Card>  
      )
    )
  );
};
