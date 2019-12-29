import React from 'react';
import './OfferCard.scss';
import { iconLabels, MainBgIcon } from '../Icon/Icon';
import labels from '../../utils/labels';

const LOGO_ALT_TEXT = 'Logo';

const OfferCard = ({expiryDate, hoursPerWeek=0, logoPath, taskDescription='', title=''}) => {
    return (
        <div className="offer-card-container">
            <div className="offer-card">
                <div className="offer-card__logo-section">
                    <div className="offer-card__logo-section--title">
                        {title.toUpperCase()}
                    </div>

                    <div className="offer-card__logo-placeholder-container">
                        <div className="offer-card__logo-placeholder">
                            <div className="offer-card__logo-container">
                                <img src={logoPath} alt={LOGO_ALT_TEXT}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="offer-card__description-section">
                    <div className="offer-card__description-line">
                        <MainBgIcon icon={iconLabels.TASK_LIST} />
                        <div className="offer-card__description-line--description">
                            {taskDescription}
                        </div>
                    </div>
                    <div className="offer-card__description-line">
                        <MainBgIcon icon={iconLabels.CLOCK} />
                        <div className="offer-card__description-line--description">
                            {hoursPerWeek + labels.H_PER_WEEK_SHORTCUT}.
                        </div>
                    </div>
                    <div className="offer-card__description-line">
                        <MainBgIcon icon={iconLabels.CALENDAR} />
                        <div className="offer-card__description-line--description">
                            {labels.OFFER_EXPIRY_PREFIX + ' ' + expiryDate}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}
export default OfferCard;