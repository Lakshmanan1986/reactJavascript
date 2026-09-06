import axios from "axios";

const API_URL = "https://localhost:7104/api/batches";

// Get all batches
export const getBatches = () => {
    return axios.get(API_URL);
};

// Get parts for a specific batch
export const getParts = (batchId) => {
    return axios.get(`${API_URL}/${batchId}/parts`);
};