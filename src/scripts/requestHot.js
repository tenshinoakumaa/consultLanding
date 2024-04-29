import API from '../API'


export default function requestHot(name, email, phone_number, landing_type) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": name,
        "email": email,
        "phone_number": phone_number,
        "landing_type": landing_type
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch(`${API}/api/request_hot`, requestOptions)
        .then((response) => response)
        .then((result) => {
            return result.status;
        })
        .catch((error) => console.error(error));
}
