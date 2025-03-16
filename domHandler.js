export function updateUI(data){
    const resultDiv = document.getElementById("weatherResult");
    resultDiv.innerHTML = `
        <h2 class="text-2xl font-bold">${data.name}, ${data.sys.country}</h2>
        <p class="text-xl font-bold">🌡️ Sıcaklık: ${data.main.temp}°C</p>
        <p class="text-gray-700">🌤️ Hava: ${data.weather[0].description}</p>
    `;
}

export function showError(message) {
    const resultDiv = document.getElementById("weatherResult");
    resultDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}