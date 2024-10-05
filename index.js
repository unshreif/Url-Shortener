document.getElementById('submit').addEventListener('click', fetchData);

async function fetchData() {
    let input = document.getElementById('input').value;
    try {
        const response = await fetch('https://shrtlnk.dev/api/v2/link', {
            method: 'POST',
            headers: {
                "api-key": "9lx2NCbBnLpp1aSU8bd5hWxt12y5pZSE0rWOATqSEUVeU",
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "url": input
            })
        });

        const data = await response.json();
        console.log(data);

        // Check if the response contains the expected 'shrtlnk' property
        if (!data || !data.shrtlnk) {
            document.getElementById('input').value = "enter a valid url";
        } else {
            document.getElementById('input').value = data.shrtlnk;
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
