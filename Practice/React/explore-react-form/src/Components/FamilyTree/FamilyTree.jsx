import React, {createContext} from 'react';
import "./FamilyTree.css"
import Grandpa from './Grandpa';

export const AssetContext = createContext("");

const FamilyTree = () => {
    const asset = "Diamond";
    const newAsset = "Gold";

    return (
        <div className='family-tree'>
            <h3>Family Tree</h3>
            <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset} />
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;