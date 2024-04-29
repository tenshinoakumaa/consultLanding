import API from '../API'


export default function getReviews() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch(`${API}/api/reviews`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            return result;
        })
        .catch((error) => console.error(error));
}