
// ========================================
// MEDSYNAPSE FINAL SCRIPT.JS
// ========================================

// ================================
// LOGIN FUNCTIONALITY
// ================================



// ================================
// OPEN FEATURE DASHBOARD
// ================================

function openPage(pageId) {

    // Hide all pages

    const allPages =
        document.querySelectorAll(".page");

    allPages.forEach(page => {

        page.classList.remove("active-page");

    });

    // Show selected page

    document
        .getElementById(pageId)
        .classList.add("active-page");

}

// ================================
// BACK TO MAIN DASHBOARD
// ================================

function backDashboard() {

    const allPages =
        document.querySelectorAll(".page");

    allPages.forEach(page => {

        page.classList.remove("active-page");

    });

    document
        .getElementById("dashboardPage")
        .classList.add("active-page");

}

// ================================
// LOGOUT FUNCTION
// ================================

function logout() {

    const allPages =
        document.querySelectorAll(".page");

    allPages.forEach(page => {

        page.classList.remove("active-page");

    });

    document
        .getElementById("loginPage")
        .classList.add("active-page");

}

// ================================
// SEARCH BAR FILTER
// ================================

const searchInput =
    document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value =
            this.value.toLowerCase();

        const featureCards =
            document.querySelectorAll(".feature-card");

        featureCards.forEach(card => {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

}

// ================================
// EMERGENCY SOS BUTTON
// ================================

const sosButton =
    document.querySelector(".sos-btn");

if (sosButton) {

    sosButton.addEventListener("click", function () {

        sosButton.innerHTML =
            "SOS ALERT SENT";

        sosButton.style.background =
            "#8b0000";

        alert(
            "Emergency Alert Sent Successfully!"
        );

    });

}

// ================================
// BOOK APPOINTMENT BUTTONS
// ================================

const doctorButtons =
    document.querySelectorAll(".doctor-card button");

doctorButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert(
            "Doctor Appointment Booked Successfully!"
        );

    });

});

// ================================
// FEATURE CARD HOVER EFFECT
// ================================

const cards =
    document.querySelectorAll(".feature-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

        card.style.transition =
            "0.3s";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "translateY(0px) scale(1)";

    });

});

// ================================
// LIVE COUNTER ANIMATION
// ================================

const counters =
    document.querySelectorAll(".stat-card h1");

counters.forEach(counter => {

    const target =
        parseInt(counter.innerText);

    let count = 0;

    const speed = 25;

    function updateCounter() {

        if (count < target) {

            count++;

            counter.innerText = count;

            setTimeout(updateCounter, speed);

        }

        else {

            counter.innerText = target;

        }

    }

    updateCounter();

});

// ================================
// BLOOD BANK ANIMATION
// ================================

const bloodCards =
    document.querySelectorAll(".blood-card");

bloodCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.background =
            "#8b0000";

        card.style.color =
            "white";

        card.style.transition =
            "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "white";

        card.style.color =
            "#8b0000";

    });

});

// ================================
// AMBULANCE STATUS FLASH EFFECT
// ================================

const ambulanceCards =
    document.querySelectorAll(".ambulance-card");

ambulanceCards.forEach(card => {

    let toggle = false;

    setInterval(() => {

        if (toggle) {

            card.style.borderLeft =
                "8px solid red";

        }

        else {

            card.style.borderLeft =
                "8px solid darkred";

        }

        toggle = !toggle;

    }, 1000);

});

// ================================
// ANALYTICS CARD ANIMATION
// ================================

const analyticsCards =
    document.querySelectorAll(".analytics-card");

analyticsCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "scale(1.05)";

        card.style.transition =
            "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "scale(1)";

    });

});

// ================================
// MEDICINE STOCK ALERTS
// ================================

const medicineCards =
    document.querySelectorAll(".medicine-card");

medicineCards.forEach(card => {

    if (
        card.innerText
            .toLowerCase()
            .includes("low stock")
    ) {

        card.style.borderLeft =
            "8px solid red";

    }

    else {

        card.style.borderLeft =
            "8px solid green";

    }

});

// ================================
// SIDEBAR BUTTON ACTIVE EFFECT
// ================================

const sidebarButtons =
    document.querySelectorAll(".menu button");

sidebarButtons.forEach(button => {

    button.addEventListener("click", function () {

        sidebarButtons.forEach(btn => {

            btn.style.background =
                "#fff0f0";

            btn.style.color =
                "#8b0000";

        });

        this.style.background =
            "#8b0000";

        this.style.color =
            "white";

    });

});

// ================================
// PAGE LOADER EFFECT
// ================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "1s";

        document.body.style.opacity = "1";

    }, 200);

});

// ================================
// REAL TIME CLOCK
// ================================

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString();

    const topbar =
        document.querySelector(".topbar h1");

    if (topbar) {

        topbar.innerHTML =
            "Healthcare Dashboard <br><span style='font-size:18px;color:gray;'>"
            + time +
            "</span>";

    }

}

setInterval(updateClock, 1000);

// ================================
// KEYBOARD SHORTCUTS
// ================================

document.addEventListener("keydown", function (e) {

    // Press ESC to go dashboard

    if (e.key === "Escape") {

        backDashboard();

    }

});

// ========================================
// END OF SCRIPT
// ========================================
const hospitalData = {};
function showHospital(name, totalBeds) {

    const container = document.getElementById("hospitalView");

    // generate ONLY ONCE
    if (!hospitalData[name]) {
        hospitalData[name] = createBeds(totalBeds);
    }

    const data = hospitalData[name];

    const icuCount = Math.floor(totalBeds * 0.3);
    const wardCount = Math.floor(totalBeds * 0.7);

    container.innerHTML = `
        <div class="hospital-bed-card">
            <div class="hospital-top">
                <h2>${name.toUpperCase()} Hospital</h2>
                <p>Total Beds: ${totalBeds}</p>
            </div>

            <h3>ICU Beds</h3>
            <div class="bed-grid" id="icu-${name}"></div>

            <h3>Ward Beds</h3>
            <div class="bed-grid" id="ward-${name}"></div>
        </div>
    `;

    renderBeds(`icu-${name}`, data.slice(0, icuCount));
    renderBeds(`ward-${name}`, data.slice(icuCount));
}
function createBeds(count) {

    const beds = [];

    for (let i = 1; i <= count; i++) {

        const r = Math.random();

        let status = "available";

        if (r < 0.5) status = "occupied";
        else if (r < 0.7) status = "critical";

        beds.push({
            id: i,
            status: status
        });
    }

    return beds;
}
function renderBeds(id, beds) {

    const grid = document.getElementById(id);

    grid.innerHTML = "";

    beds.forEach(bed => {

        const div = document.createElement("div");

        div.classList.add("bed");
        div.classList.add(bed.status);

        div.innerText = bed.id;

        grid.appendChild(div);
    });
}
const bloodData = {
    apollo: {
        "A+": 32, "A-": 12,
        "B+": 20, "B-": 8,
        "O+": 44, "O-": 18,
        "AB+": 12, "AB-": 5
    },
    fortis: {
        "A+": 28, "A-": 10,
        "B+": 18, "B-": 6,
        "O+": 35, "O-": 15,
        "AB+": 10, "AB-": 4
    },
    cloud: {
        "A+": 30, "A-": 14,
        "B+": 22, "B-": 9,
        "O+": 38, "O-": 16,
        "AB+": 11, "AB-": 6
    }
};

function showBlood(hospital) {

    const data = bloodData[hospital];

    const container = document.getElementById("bloodView");

    container.innerHTML = `
        <div class="hospital-bed-card">
            <h2>${hospital.toUpperCase()} BLOOD STOCK</h2>

            <div class="blood-grid">
                ${Object.entries(data).map(([type, units]) => `
                    <div class="blood-card">${type} : ${units} Units</div>
                `).join("")}
            </div>
        </div>
    `;
}
let selectedDoctor = "";

function openBooking(doctor) {

    selectedDoctor = doctor;

    document.getElementById("doctorName").innerText =
        "Book with " + doctor;

    document.getElementById("bookingModal").style.display = "flex";
}

function closeBooking() {
    document.getElementById("bookingModal").style.display = "none";
}

function bookAppointment() {

    const name = document.getElementById("patientName").value;
    const age = document.getElementById("patientAge").value;
    const dob = document.getElementById("patientDOB").value;

    const symptoms = [];

    document.querySelectorAll(".symptoms input:checked")
        .forEach(cb => symptoms.push(cb.value));

    if (!name || !age || !dob || symptoms.length === 0) {
        alert("Please fill all details");
        return;
    }

    alert(
        `Appointment Confirmed!\n\nDoctor: ${selectedDoctor}\nName: ${name}\nAge: ${age}\nSymptoms: ${symptoms.join(", ")}`
    );

    closeBooking();
}
const ambulanceData = {
    apollo: [
        {
            id: "A1",
            status: "Available",
            location: "Apollo Main Gate",
            phone: "9876543210"
        },
        {
            id: "A2",
            status: "On Duty",
            location: "City Center",
            phone: "9876543211"
        }
    ],

    fortis: [
        {
            id: "F1",
            status: "Available",
            location: "Fortis ICU Exit",
            phone: "9876543212"
        },
        {
            id: "F2",
            status: "En Route",
            location: "Highway Zone",
            phone: "9876543213"
        }
    ],

    cloud: [
        {
            id: "C1",
            status: "Available",
            location: "Cloud 9 Parking",
            phone: "9876543214"
        }
    ]
};

function showAmbulances(hospital) {

    const data = ambulanceData[hospital];

    const container = document.getElementById("ambulanceView");

    container.innerHTML = `
        <div class="hospital-bed-card">
            <h2>${hospital.toUpperCase()} HOSPITAL AMBULANCES</h2>

            <div class="ambulance-grid">
                ${data.map(a => `
                    <div class="ambulance-card">
                        <h3>🚑 Ambulance ${a.id}</h3>
                        <p>Status: ${a.status}</p>
                        <p>Location: ${a.location}</p>

                        <a href="tel:${a.phone}">
                            <button class="call-btn">
                                Call Ambulance
                            </button>
                        </a>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}
const medicineData = {
    apollo: [
        { name: "Paracetamol", stock: "Available" },
        { name: "Insulin", stock: "Low Stock" },
        { name: "Dolo 650", stock: "Available" }
    ],
    fortis: [
        { name: "Paracetamol", stock: "Available" },
        { name: "Insulin", stock: "Available" },
        { name: "Aspirin", stock: "Low Stock" }
    ],
    cloud: [
        { name: "Paracetamol", stock: "Low Stock" },
        { name: "Insulin", stock: "Available" },
        { name: "Crocin", stock: "Available" }
    ]
};

let cart = [];

function showMedicines(hospital) {

    const data = medicineData[hospital];

    const container = document.getElementById("medicineView");

    container.innerHTML = `
        <div class="hospital-bed-card">

            <h2>${hospital.toUpperCase()} MEDICINES</h2>

            <div class="medicine-list">

                ${data.map(m => `
                    <div class="medicine-card">
                        <p>${m.name} - ${m.stock}</p>

                        <button onclick="addToCart('${m.name}')">
                            Add to Cart
                        </button>
                    </div>
                `).join("")}

            </div>

        </div>
    `;
}
function addToCart(item) {

    cart.push(item);

    updateCartCount();

    alert(item + " added to cart");
}

function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.length;
}

function openCart() {

    document.getElementById("cartModal").style.display = "flex";

    renderCart();
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function renderCart() {

    const container = document.getElementById("cartItems");

    if (cart.length === 0) {
        container.innerHTML = "<p>Cart is empty</p>";
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            ${item}
            <button onclick="removeItem(${index})">Remove</button>
        </div>
    `).join("");
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}
function checkout() {

    const name = document.getElementById("userName").value;
    const phone = document.getElementById("userPhone").value;
    const address = document.getElementById("userAddress").value;
    const payment = document.getElementById("paymentMethod").value;

    if (!name || !phone || !address) {
        alert("Please fill all details");
        return;
    }

    alert(
        `Order Placed!\n\nName: ${name}\nItems: ${cart.join(", ")}\nPayment: ${payment}`
    );

    cart = [];
    updateCartCount();
    closeCart();
}
let chart;

function analyzePatient() {

    const bp = parseInt(document.getElementById("bpInput").value);
    const sugar = parseInt(document.getElementById("sugarInput").value);
    const oxygen = parseInt(document.getElementById("oxygenInput").value);
    const heart = parseInt(document.getElementById("heartInput").value);

    if (isNaN(bp) || isNaN(sugar) || isNaN(oxygen) || isNaN(heart)) {
        alert("Please enter all patient details");
        return;
    }

    // STATUS CHECKS
    setStatus("bpStatus", bp > 140);
    setStatus("sugarStatus", sugar > 140);
    setStatus("oxygenStatus", oxygen < 92);
    setStatus("heartStatus", heart > 100);

    renderChart(bp, sugar, oxygen, heart);
}

function setStatus(id, isRisk) {

    const el = document.getElementById(id);

    if (isRisk) {
        el.innerText = "RISKY ⚠";
        el.style.color = "red";
    } else {
        el.innerText = "NORMAL ✔";
        el.style.color = "green";
    }
}

function renderChart(bp, sugar, oxygen, heart) {

    const ctx = document.getElementById("healthChart").getContext("2d");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["BP", "Sugar", "Oxygen", "Heart Rate"],
            datasets: [{
                label: "Patient Health Report",
                data: [bp, sugar, oxygen, heart],
                backgroundColor: [
                    "#8b0000",
                    "#ff9800",
                    "#2196f3",
                    "#f44336"
                ]
            }]
        },
        options: {
            responsive: true
        }
    });

    document.getElementById("graphTitle").innerText =
        "Live Patient Health Analysis";
}// ===============================
// GLOBAL VARIABLES
// ===============================

let mainChart;
let miniChart;

let patientData = {
    bp: 0,
    sugar: 0,
    oxygen: 0,
    heart: 0
};

// ===============================
// STATUS FUNCTION
// ===============================

function setStatus(id, isRisk) {

    const el = document.getElementById(id);
    if (!el) return;

    if (isRisk) {
        el.innerText = "RISKY ⚠";
        el.style.color = "red";
    } else {
        el.innerText = "NORMAL ✔";
        el.style.color = "green";
    }
}

// ===============================
// ANALYZE PATIENT INPUT
// ===============================

function analyzePatient() {

    const bp = Number(document.getElementById("bpInput").value);
    const sugar = Number(document.getElementById("sugarInput").value);
    const oxygen = Number(document.getElementById("oxygenInput").value);
    const heart = Number(document.getElementById("heartInput").value);

    if ([bp, sugar, oxygen, heart].some(v => isNaN(v) || v === 0)) {
        alert("Please enter all patient details correctly");
        return;
    }

    patientData = { bp, sugar, oxygen, heart };

    // Risk logic
    setStatus("bpStatus", bp > 140);
    setStatus("sugarStatus", sugar > 140);
    setStatus("oxygenStatus", oxygen < 92);
    setStatus("heartStatus", heart > 100);

    renderMainChart(bp, sugar, oxygen, heart);
}

// ===============================
// MAIN GRAPH (SUMMARY)
// ===============================

function renderMainChart(bp, sugar, oxygen, heart) {

    const canvas = document.getElementById("healthChart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (mainChart) mainChart.destroy();

    mainChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["BP", "Sugar", "Oxygen", "Heart Rate"],
            datasets: [{
                label: "Patient Health Report",
                data: [bp, sugar, oxygen, heart],
                backgroundColor: [
                    "#8b0000",
                    "#ff9800",
                    "#2196f3",
                    "#f44336"
                ]
            }]
        },
        options: {
            responsive: true
        }
    });

    document.getElementById("graphTitle").innerText =
        "Click tiles for detailed mini graphs";
}

// ===============================
// MINI GRAPH (CLICK TILE)
// ===============================

function openMini(type) {

    const canvas = document.getElementById("miniChart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let label = "";
    let data = [];
    let value = patientData[type] || 0;

    if (type === "bp") {
        label = "Blood Pressure";
        data = [120, 130, 140, 135, value];
    }

    if (type === "sugar") {
        label = "Sugar Level";
        data = [90, 110, 130, 150, value];
    }

    if (type === "oxygen") {
        label = "Oxygen Level";
        data = [98, 97, 95, 93, value];
    }

    if (type === "heart") {
        label = "Heart Rate";
        data = [70, 80, 90, 100, value];
    }

    document.getElementById("miniTitle").innerText = label;
    document.getElementById("miniGraphModal").style.display = "flex";

    if (miniChart) miniChart.destroy();

    miniChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["T1", "T2", "T3", "T4", "Now"],
            datasets: [{
                label: label,
                data: data,
                borderColor: "#8b0000",
                fill: false,
                tension: 0.3
            }]
        },
        options: {
            responsive: true
        }
    });
}

// ===============================
// CLOSE MINI GRAPH
// ===============================

function closeMiniGraph() {
    document.getElementById("miniGraphModal").style.display = "none";
}

// ===============================
// OPTIONAL: ESC KEY CLOSE MODAL
// ===============================

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeMiniGraph();
    }
});
function savePatient() {

    const patient = {

        name: "Rahul",
        age: 22,
        bp: 120,
        sugar: 90,
        oxygen: 98,
        heart: 75

    };

    fetch("http://127.0.0.1:5000/add_patient", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(patient)

    })

    .then(res => res.json())

    .then(data => {

        alert(data.message);

        console.log(data);

    });

}
function loginUser() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    console.log(email);
    console.log(password);

    fetch("http://127.0.0.1:5000/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            email: email,
            password: password

        })

    })

    .then(response => response.json())

    .then(data => {

        console.log(data);

        if (data.success) {

            alert("Login Successful");

            document
                .getElementById("loginPage")
                .classList.remove("active-page");

            document
                .getElementById("dashboardPage")
                .classList.add("active-page");

        }

    })

    .catch(error => {

        console.log(error);

        alert("Backend connection failed");

    });

}
// ======================================
// LOGIN TYPES
// ======================================

const roleSelect =
    document.getElementById("loginRole");

if (roleSelect) {

    roleSelect.addEventListener("change", function () {

        const password =
            document.getElementById("password");

        if (this.value === "guest") {

            password.style.display = "none";

        }

        else {

            password.style.display = "block";

        }

    });

}

// ======================================
// THEMES
// ======================================

function setTheme(theme) {

    const body = document.body;

    if (theme === "light") {

        body.style.background = "#f5f7fb";

        document.documentElement.style.setProperty(
            "--main-color",
            "#8b0000"
        );

    }

    if (theme === "dark") {

        body.style.background = "#0f172a";

        document.documentElement.style.setProperty(
            "--main-color",
            "#2563eb"
        );

    }

    if (theme === "natural") {

        body.style.background = "#edf7ed";

        document.documentElement.style.setProperty(
            "--main-color",
            "#2e7d32"
        );

    }

}

// ======================================
// CREATE ACCOUNT
// ======================================

function createAccount() {

    const name =
        document.getElementById("createName").value;

    const email =
        document.getElementById("createEmail").value;

    const password =
        document.getElementById("createPassword").value;

    const role =
        document.getElementById("createRole").value;

    alert(
        "Account Created Successfully for "
        + role
    );

}
// =========================
// SETTINGS MENU
// =========================

function toggleSettingsMenu() {

    const menu =
        document.getElementById("settingsDropdown");

    if (menu.style.display === "block") {

        menu.style.display = "none";

    }

    else {

        menu.style.display = "block";

    }

}

// =========================
// POPUPS
// =========================

function toggleCreateAccount() {

    document.getElementById(
        "createAccountPopup"
    ).style.display = "flex";

}

function toggleThemeOptions() {

    document.getElementById(
        "themePopup"
    ).style.display = "flex";

}

function toggleNotifications() {

    document.getElementById(
        "notificationPopup"
    ).style.display = "flex";

}

// =========================
// CLOSE POPUP ON OUTSIDE CLICK
// =========================

window.onclick = function(e) {

    const popups =
        document.querySelectorAll(".popup-box");

    popups.forEach(popup => {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

}

// =========================
// CREATE ACCOUNT
// =========================

function createAccount() {

    alert("Account Created Successfully");

    document.getElementById(
        "createAccountPopup"
    ).style.display = "none";

}

// =========================
// THEMES
// =========================

function setTheme(theme) {

    document.body.classList.remove(
        "dark-theme",
        "natural-theme"
    );

    if (theme === "dark") {

        document.body.classList.add(
            "dark-theme"
        );

    }

    else if (theme === "natural") {

        document.body.classList.add(
            "natural-theme"
        );

    }

    document.getElementById(
        "themePopup"
    ).style.display = "none";

}