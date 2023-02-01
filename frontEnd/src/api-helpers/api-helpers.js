import axios from "axios";

export const getAllMovies = async () => {
    const res = await axios.get("http://localhost:5000/get-order")
        .catch((err) => console.log(err))
    if (res.status !== 200) {
        return console.log("No data");
    }
    const data = await res.data;
    return data;
}