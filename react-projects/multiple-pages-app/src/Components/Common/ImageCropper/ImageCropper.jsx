import React, {useState} from 'react';
import Cropper from 'react-easy-crop'


const ImageCropper = ({image, initialAspect, initialCrop, initialZoom}) => {

    const [aspect, setAspect] = useState(initialAspect);
    const [crop, setCrop] = useState(initialCrop);
    const [zoom, setZoom] = useState(initialZoom);

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels);
    }

    return (
        <Cropper
            image={image}
            crop={crop}
            cropSize={{width: 100, height: 100}}
            zoom={zoom}
            aspect={aspect}
            onCropChange={newCrop => setCrop(newCrop)}
            onCropComplete={onCropComplete}
            onZoomChange={newZoom => setZoom(newZoom)}
            style={{cropAreaStyle: {borderRadius: "2px"}}}
        />
    )


}
export default ImageCropper;