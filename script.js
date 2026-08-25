const BACKEND_URL = "https://geoquest-backend-ux73.onrender.com";

async function checkMaintenance() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/config`);

        if (!response.ok) {
            throw new Error("Backend error");
        }

        const config = await response.json();

        if (config.maintenance === true) {
            window.location.href = "maintenance.html";
        } else {
            window.location.href = "home.html";
        }

    } catch (error) {
        console.error("Could not connect to GeoQuest Backend:", error);

        // اگر Backend در دسترس نبود، فعلاً Maintenance نمایش بده
        window.location.href = "maintenance.html";
    }
}

checkMaintenance();
