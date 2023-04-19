import axios from "axios"
import { useEffect, useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';

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
    const [loading, setLoading ] = useState(false);

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
            setLoading(true)
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
            {
                !loading ? 
                <span className="position-center">
                    <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" /> 
                </span> :
                <DataTable value={asset} showGridlines tableStyle={{ minWidth: '50rem' }}>
                    <Column field="id" header="Code"></Column>
                    <Column field="Name" sortable header="Name"></Column>
                    <Column field="Value" sortable header="Value"></Column>
                    <Column field="LifeUseUnits" header="LifeUseUnits"></Column>
                    <Column field="UseUnits" header="UseUnits"></Column>
                    <Column field="InventoryNo" header="InventoryNo"></Column>
                    <Column field="A_AssetType" header="A_AssetType"></Column>
                </DataTable>
            }
            
        </>
    )
}

export default Asset