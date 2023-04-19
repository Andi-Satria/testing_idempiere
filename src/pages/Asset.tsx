import axios from "axios"
import { useEffect, useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface AssetItem {
    id: string;
    Name: string;
    Value: string;
    LifeUseUnits: number;
    UseUnits: number;
    InventoryNo: string;
    A_AssetType: string;
}

const Asset = () => {
    const [asset, assetData] = useState<AssetItem[]>([])

    useEffect(() => {
        getAllAsset()
    }, [])

    const getAllAsset = async () => {
        await axios.get(`api/v1/models/a_asset`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },      
        })
        .then((res) => {
            const allAsset = res.data.records
            assetData(allAsset)
            console.log(asset)
        })
        .catch(error => console.error(`Error: ${error}`))
    }

    return (
        <>
            <h1 className="text-center">Assets</h1>
            {/* {asset.length > 0 && (
                <ul>
                    {asset.map(ass => (
                        <li key={ass.id}>{ass.Name}</li>
                    ))}
                </ul>
            )} */}
            <DataTable value={asset} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Code"></Column>
                <Column field="Name" header="Name"></Column>
                <Column field="Value" header="Value"></Column>
                <Column field="LifeUseUnits" header="LifeUseUnits"></Column>
                <Column field="UseUnits" header="UseUnits"></Column>
                <Column field="InventoryNo" header="InventoryNo"></Column>
                <Column field="A_AssetType" header="A_AssetType"></Column>
            </DataTable>
        </>
    )
}

export default Asset