import API from '../API'


export default function requestCold(name, phone_number) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": name,
        "phone_number": phone_number
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(`${API}/api/request_cold`, requestOptions)
        .then((response) => response.text())
        .then((result) => result)
        .catch((error) => alert(error));
}