import React from 'react';
import Button, { ButtonProps } from 'react-bootstrap/Button';
import * as Icons from 'react-bootstrap-icons';
import { CoreButtontype } from './types';
import './buttons.scss';
import Loader from "@/components/loader";

interface CoreButtonProps extends Omit<ButtonProps, 'size'> {
  text: string,
  textAlign?: 'center' | 'start' | 'end',
  variant: CoreButtontype,
  size?: 'sm'|'lg'|'normal',
  icon: boolean,
  iconPre?: boolean;
  iconPost?: boolean;
  iconType?: keyof typeof Icons;
  disabled?: boolean;
  buttonType?: 'a' | 'button'; 
  href?: string;
  target?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  type?: 'button' | 'submit';
  onClick?: (...args: any[]) => any;
  loader?: boolean;
}

export const CoreButton = ({
    text,
    textAlign = "center",
    variant,
    size,
    icon,
    iconPre,
    iconPost,
    iconType = 'Search',
    disabled,
    buttonType = 'button',
    href,
    target,
    ariaControls,
    ariaExpanded,
    onClick,
    type = 'button',
    loader
}: CoreButtonProps) => {
    const IconComponent = Icons[iconType];
    const buttonClassName = `d-flex align-items-center justify-content-${textAlign} ${icon ? "with-icon" : ""} ${text ? "" : "icon-only"}`;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        if (onClick) {
            event.preventDefault();
            onClick(event);
        }
    };

  return (
    buttonType === 'a' && href ? (
      <a href={href} className={`btn btn-${variant} ${size ? `btn-${size}` : ''} ${buttonClassName}`} role="button" target={target ? target : '_self'} >
        {icon && iconPre && <IconComponent className={text ? "me-2" : "" } />}
        {text}
        {icon && iconPost && <IconComponent className={text ? "ms-2" : "" } />}
      </a>
    ) : (
      <Button type={type} variant={variant} size={size as any} className={buttonClassName} disabled={disabled} aria-controls={ariaControls} aria-expanded={ariaExpanded} >
        {icon && iconPre && <IconComponent className={text ? "me-2" : "" } />}
        {text}
        {icon && iconPost && <IconComponent className={text ? "ms-2" : "" } />}
        {type === "submit" && loader && <Loader className={`light spinner-border-sm ms-2`} />}
      </Button>
    )
  );
};
