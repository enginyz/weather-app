import { fetchWeather } from "./apiService.js";
import { updateUI, showError } from "./domHandler.js";

document.getElementById("searchButton").addEventListener("click",async () => {
    const city = document.getElementById("cityInput").value.trim();

    if(!city){
        showError("Lütfen bir şehir girin.");
        return;
    }

    try {
        const data = await fetchWeather(city);
        updateUI(data);
    } catch (error) {
        showError(error.message)
    }
});

document.getElementById("cityInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("searchButton").click();
    }
});
