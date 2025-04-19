import React, { useContext } from 'react';
import Special from './Special';
import { AssetContext } from './FamilyTree';

const Cousin = ({name, asset}) => {
    const newAsset = useContext(AssetContext);

    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Rahim" && <Special asset={asset} />
            }
            {
                name === "Jamal" && (
                    <p>New Asset: {newAsset}</p>
                )
            }
        </div>
    );
};

export default Cousin;