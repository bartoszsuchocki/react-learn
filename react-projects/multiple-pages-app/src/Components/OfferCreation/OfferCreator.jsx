import React from 'react';
import { withRouter } from 'react-router-dom';
import './OfferCreator.scss'
import { ImagePlaceholderIcon, iconLabels } from '../Icon/Icon';
import FormSection from '../Common/FormSection';
import {Form, Col} from 'react-bootstrap'
import _ from 'lodash';
import labels from '../../utils/labels';

const OfferCreation = (props) => {

    const { history } = props;

    const showImageCropper = () => {
        history.push('/crop');
    }

    return (
        <div className="creation-block">
            <div className="creation-block__logo-section">
                <div 
                    className="creation-block__logo-section--image-placeholder"
                    onClick={showImageCropper}
                >
                    <ImagePlaceholderIcon/>
                </div>
            </div>
            <div className="creation-block__info-section">
                
                <FormSection 
                    className="creation-block__info-section--row"
                    titleIcon={iconLabels.INFO}
                    title={labels.OFFER_BASIC_INFO}
                >
                    <Form.Group controlId="someId">
                        <Form.Label>{labels.OFFER_ADVERTISEMENT_TITLE}</Form.Label>
                        <Form.Control placeholder={labels.TITLE} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{labels.OFFER_ORGANIZATION_NAME}</Form.Label>
                        <Form.Control placeholder={labels.NAME} type="text" />
                    </Form.Group>

                </FormSection>

                <FormSection
                    className="creation-block__info-section--row"
                    titleIcon={iconLabels.TASK_LIST}
                    title={labels.OFFER_VOLUNTARY_DESCRIPTION}
                >
                    <Form.Group controlId="someId">
                        <Form.Label>{labels.OFFER_DESCRIPTION_OF_DUTIES}</Form.Label>
                        <Form.Control placeholder={labels.OFFER_SHORT_DESCRIPTION} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{labels.OFFER_FULL_DESCRIPTION}</Form.Label>
                        <Form.Control 
                            placeholder={labels.DESCRIPTION} 
                            rows="6"
                            as="textarea" 
                        />
                    </Form.Group>

                </FormSection>

                <FormSection
                    className="creation-block__info-section--row"
                    titleIcon={iconLabels.CLOCK}
                    title={labels.OFFER_VOLOUNTEER_TIME_ENGAGEMENT}
                >
                    <Form.Row>
                        <Form.Group as={Col} xs="6">
                            <Form.Label>{labels.FROM}</Form.Label>
                            <Form.Control as="select">
                                {_.range(100).map((hour) => (
                                    <option key={hour}>{hour}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        
                        <Form.Group as={Col} xs="6">
                            <Form.Label>{labels.TO}</Form.Label>
                            <Form.Control as="select">
                                {_.range(100).map((hour) => (
                                    <option key={hour}>{hour}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                </FormSection>

                <FormSection
                    className="creation-block__info-section--row"
                    titleIcon={iconLabels.AGE}
                    title={labels.OFFER_VOLOUNTEER_AGE}
                >
                    <Form.Row>
                        <Form.Group as={Col} xs="6">
                            <Form.Label>{labels.FROM}</Form.Label>
                            <Form.Control as="select">
                                {_.range(100).map((age) => (
                                    <option key={age}>{age}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        
                        <Form.Group as={Col} xs="6">
                            <Form.Label>{labels.TO}</Form.Label>
                            <Form.Control as="select">
                                {_.range(100).map((age) => (
                                    <option key={age}>{age}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                </FormSection>

                <FormSection
                    className="creation-block__info-section--row"
                    titleIcon={iconLabels.REQUIREMENTS}
                    title={labels.REQUIREMENTS}
                >
                    <Form.Group>
                        <Form.Label>{labels.OFFER_REQUIREMENTS_FIELD_LABEL}</Form.Label>
                        <Form.Control 
                            placeholder={labels.REQUIREMENTS}
                            rows="6"
                            as="textarea" 
                        />
                    </Form.Group>

                </FormSection>

                <FormSection 
                    className="creation-block__info-section--row"
                    titleIcon={iconLabels.CONTACT}
                    title={labels.CONTACT}
                >
                    <Form.Group controlId="someId">
                        <Form.Label>{labels.EMAIL_ADDRESS}</Form.Label>
                        <Form.Control placeholder={labels.MAIL} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{labels.PHONE_NUMBER}</Form.Label>
                        <Form.Control placeholder={labels.PHONE} type="text" />
                    </Form.Group>

                </FormSection>
                
                <FormSection 
                    className="creation-block__info-section--row"
                    titleIcon={iconLabels.CATEGORY}
                    title={labels.CATEGORY}
                >
                    <Form.Group controlId="someId">
                        <Form.Label>{labels.CATEGORY}</Form.Label>
                        <Form.Control as="select">
                            <option>Tu beda kategorie</option>
                        </Form.Control>
                    </Form.Group>

                </FormSection>

                <FormSection 
                    className="creation-block__info-section--row"
                    titleIcon={iconLabels.CALENDAR}
                    title={labels.OFFER_ADVERTISEMENT_EXPIRY}
                >
                    <Form.Group controlId="someId">
                        <Form.Label>{labels.OFFER_EXPIRY_TO}</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>

                </FormSection>

                <FormSection
                    className="creation-block__info-section--row"
                    titleIcon={iconLabels.INFO}
                    title={labels.ADDITIONAL_INFO}
                >
                    <Form.Group>
                        <Form.Label>{labels.OTHER_INFO}</Form.Label>
                        <Form.Control 
                            placeholder={labels.OTHER} 
                            rows="6"
                            as="textarea" 
                        />
                    </Form.Group>

                </FormSection>
                
            </div>
        </div> 
    );

}

export default withRouter(OfferCreation);