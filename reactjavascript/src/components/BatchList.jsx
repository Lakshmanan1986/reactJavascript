import { useEffect, useState } from "react";
import { getBatches } from "../services/batchService";

export default function BatchList() {

    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const loadBatches = async () => {
            try {
                const response = await getBatches();

                console.log("Batch API Response:", response.data);

                setBatches(response.data);
            }
            catch (err) {
                console.error("Batch API Error:", err);

                setError("Unable to load batches.");
            }
            finally {
                setLoading(false);
            }
        };

        loadBatches();

    }, []);

    if (loading) {
        return <p>Loading batches...</p>;
    }

    if (error) {
        return <p className="text-danger">{error}</p>;
    }

    return (
        <div>
            {batches.length === 0 ? (
                <p>No batches found.</p>
            ) : (
                batches.map(batch => (
                    <div key={batch.batchId}>
                        {batch.batchName}
                    </div>
                ))
            )}
        </div>
    );
}