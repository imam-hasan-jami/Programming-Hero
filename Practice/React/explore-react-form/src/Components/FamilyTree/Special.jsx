import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({asset}) => {
    const newAsset = useContext(AssetContext);

    return (
        <div>
            <h3>Special</h3>
            <p>Asset: {asset}</p>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Special;