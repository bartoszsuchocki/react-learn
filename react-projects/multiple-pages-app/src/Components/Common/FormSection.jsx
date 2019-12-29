import React from 'react';
import { MainBgIcon } from '../Icon/Icon';
import './FormSection.scss'

const FormSection = ({children, className='', titleIcon, title}) => {

    return (
        <div className={"form-section " + className}>
            <div className="form-section__title-block">
                <MainBgIcon icon={titleIcon}/>
                <div className="form-section__title-block--title">
                    {title}
                </div>
            </div>
            <div className="form-section__content-block">
                {children}
            </div>
        </div>
    )

}

export default FormSection;