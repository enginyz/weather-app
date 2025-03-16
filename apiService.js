const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=tr&q=";

export async function fetchWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (!response.ok) {
        throw new Error("Şehir bulunamadı! Lütfen doğru bir şehir adı girin.");
    }

    return await response.json();
}
