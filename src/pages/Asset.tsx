import axios from "axios"
import { useEffect, useState } from "react"

const Asset = () => {
    const [asset, assetData] = useState('')

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
            <h1>Assets</h1>
            {asset.length > 0 && (
                <ul>
                    {asset.map(ass => (
                        <li key={ass.id}>{ass.Name}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Asset