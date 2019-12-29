import React, {useState} from 'react';
import AvatarEditor from 'react-avatar-editor';
import './ImageCropper.scss'
import { Button } from 'react-bootstrap';
import labels from '../../../utils/labels';


const ImageCropper = ({image, initialAspect, initialCrop, initialZoom}) => {

    let cropEditor;

    const handleSave = () => {
        if(cropEditor){
            const canvasScaled = cropEditor.getImageScaledToCanvas();
            canvasScaled.toBlob((blob) => {
                const cropUrl = URL.createObjectURL(blob);
                console.log('new crop url: ' + cropUrl);
            });
        }
    }

    return (
        <div>
            <div className="cropper-container">
                <AvatarEditor
                    border={[82,10]}
                    borderRadius={10}
                    className="cropper"
                    image={image}
                    ref={editor => cropEditor = editor}
                    rotate={0}
                    scale={1}
                />
            </div>
            <div className="save-button-container">
                <Button 
                    className="button" 
                    size="lg" 
                    variant="primary"
                >
                    { labels.CANCEL }
                </Button>
                <Button 
                    className="button" 
                    onClick={handleSave}
                    size="lg" 
                    variant="success"
                >
                    { labels.SAVE }
                </Button>
            </div>
            
        </div>
    )
}
export default ImageCropper;