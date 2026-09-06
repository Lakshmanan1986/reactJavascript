import React from "react";

const PartsTable = ({ parts }) => {

    return (
        <div>

            <h2>Parts Details</h2>

            <table>
                <thead>
                    <tr>
                        <th>Part ID</th>
                        <th>Part Number</th>
                        <th>Part Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>

                    {parts.length === 0 ? (

                        <tr>
                            <td colSpan="4">
                                Select a Batch to view Parts
                            </td>
                        </tr>

                    ) : (

                        parts.map(part => (

                            <tr key={part.partId}>

                                <td>{part.partId}</td>
                                <td>{part.partNumber}</td>
                                <td>{part.partName}</td>
                                <td>{part.quantity}</td>

                            </tr>

                        ))

                    )}

                </tbody>
            </table>

        </div>
    );
};

export default PartsTable;