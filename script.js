const BACKEND_URL = "https://geoquest-backend-ux73.onrender.com";

async function checkMaintenance() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/config`);

        if (!response.ok) {
            throw new Error("Backend error");
        }

        const config = await response.json();

        alert("Maintenance: " + config.maintenance);

        if (config.maintenance === true) {
            window.location.href = "maintenance.html";
        } else {
            window.location.href = "home.html";
        }

    } catch (error) {
        console.error("Could not connect to GeoQuest Backend:", error);

        alert("خطا در اتصال به Backend");

        window.location.href = "maintenance.html";
    }
}

checkMaintenance();
