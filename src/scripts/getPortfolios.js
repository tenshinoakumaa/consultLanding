import API from '../API'


export default function getPortfolios() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    console.log("HEHE")
    fetch(`${API}/api/portfolios`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            const modifiedResult = result.map(item => ({
                ...item,
                image: `${API}/api/images/${item.image}`
            }));
            console.log(modifiedResult)
            return modifiedResult;
        }
        )
        .catch((error) => console.error(error));
}