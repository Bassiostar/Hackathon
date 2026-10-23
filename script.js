// All 36 States of Nigeria + FCT with Coordinates for Weather API
const nigerianStates = {
    "Abia": { lat: 5.5320, lon: 7.4860 },
    "Adamawa": { lat: 9.2035, lon: 12.4954 },
    "Akwa Ibom": { lat: 5.0372, lon: 7.9129 },
    "Anambra": { lat: 6.2100, lon: 7.0700 },
    "Bauchi": { lat: 10.3103, lon: 9.8439 },
    "Bayelsa": { lat: 4.9247, lon: 6.2642 },
    "Benue": { lat: 7.7327, lon: 8.5214 },
    "Borno": { lat: 11.8333, lon: 13.1500 },
    "Cross River": { lat: 4.9517, lon: 8.3220 },
    "Delta": { lat: 6.2059, lon: 6.6959 },
    "Ebonyi": { lat: 6.3249, lon: 8.1137 },
    "Edo": { lat: 6.3350, lon: 5.6037 },
    "Ekiti": { lat: 7.6219, lon: 5.2203 },
    "Enugu": { lat: 6.4527, lon: 7.5104 },
    "FCT (Abuja)": { lat: 9.0765, lon: 7.3986 },
    "Gombe": { lat: 10.2897, lon: 11.1673 },
    "Imo": { lat: 5.4852, lon: 7.0351 },
    "Jigawa": { lat: 11.7594, lon: 9.7350 },
    "Kaduna": { lat: 10.5105, lon: 7.4165 },
    "Kano": { lat: 12.0022, lon: 8.5920 },
    "Katsina": { lat: 12.9852, lon: 7.6178 },
    "Kebbi": { lat: 12.4539, lon: 4.1975 },
    "Kogi": { lat: 7.8023, lon: 6.7433 },
    "Kwara": { lat: 8.4966, lon: 4.5421 },
    "Lagos": { lat: 6.5244, lon: 3.3792 },
    "Nasarawa": { lat: 8.4990, lon: 8.5156 },
    "Niger": { lat: 9.6139, lon: 6.5569 },
    "Ogun": { lat: 7.1557, lon: 3.3547 },
    "Ondo": { lat: 7.2571, lon: 5.1959 },
    "Osun": { lat: 7.7714, lon: 4.5559 },
    "Oyo": { lat: 7.3775, lon: 3.9470 },
    "Plateau": { lat: 9.8965, lon: 8.8583 },
    "Rivers": { lat: 4.8156, lon: 7.0498 },
    "Sokoto": { lat: 13.0059, lon: 5.2476 },
    "Taraba": { lat: 8.8937, lon: 11.3596 },
    "Yobe": { lat: 11.7470, lon: 11.9665 },
    "Zamfara": { lat: 12.1628, lon: 6.6614 }
};

// Market Prices Dictionary: Crops & Livestock
const marketPrices = {
    Crops: {
        "Tomatoes": { price: 1950, unit: "kg" },
        "Maize": { price: 420, unit: "kg" },
        "Beans (Cowpeas)": { price: 2250, unit: "kg" },
        "Garri (Cassava flakes)": { price: 850, unit: "kg" },
        "Yam": { price: 1600, unit: "kg" },
        "Rice (Local/Paddy)": { price: 1800, unit: "kg" },
        "Cassava Tuber": { price: 350, unit: "kg" },
        "Sorghum": { price: 400, unit: "kg" },
        "Millet": { price: 410, unit: "kg" },
        "Groundnuts": { price: 1500, unit: "kg" },
        "Soybeans": { price: 950, unit: "kg" },
        "Sweet Potato": { price: 500, unit: "kg" },
        "Palm Oil": { price: 1400, unit: "kg" },
        "Cocoa Beans": { price: 3500, unit: "kg" },
        "Plantain": { price: 900, unit: "kg" },
        "Pepper (Rodo/Bell)": { price: 2200, unit: "kg" }
    },
    Livestock: {
        "Cattle (Bull - Large)": { price: 650000, unit: "head" },
        "Cattle (Cow - Medium)": { price: 420000, unit: "head" },
        "Goat (Adult)": { price: 45000, unit: "head" },
        "Ram / Sheep (Large)": { price: 95000, unit: "head" },
        "Pig (Adult Market Size)": { price: 80000, unit: "head" },
        "Broiler Chicken (Live)": { price: 7500, unit: "head" },
        "Layer Chicken (Old Layer)": { price: 4800, unit: "head" },
        "Turkey (Adult Live)": { price: 35000, unit: "head" },
        "Catfish (Processed/Live)": { price: 2200, unit: "kg" },
        "Snails (Giant African - Point)": { price: 1200, unit: "piece" }
    }
};

// Expanded 18-Entry Veterinary & Pest Database
const advisoryDatabase = [
    {
        title: "Tomato Early & Late Blight",
        category: "Crop Disease",
        target: "Tomatoes / Peppers",
        symptoms: "Dark brown or black water-soaked spots on lower leaves with yellow halos; rotting fruit patches during humid rainy weather.",
        prevention: "Avoid overhead sprinklers, remove lower leaves touching damp soil, and practice strict crop rotation.",
        treatment: "Apply copper hydroxide or Mancozeb-based fungicides every 7–10 days during rainy spells."
    },
    {
        title: "Fall Armyworm Infestation",
        category: "Crop Pest",
        target: "Maize / Sorghum / Millet",
        symptoms: "Ragged, chewed leaf holes with prominent sawdust-like caterpillar droppings (frass) visible inside the plant whorl.",
        prevention: "Intercrop maize with cassava or legumes; plant early at the onset of rains to outgrow peak moth generations.",
        treatment: "Apply Emamectin Benzoate or Chlorantraniliprole directly into the plant whorls early morning or late evening."
    },
    {
        title: "Newcastle Disease (ND)",
        category: "Poultry Disease",
        target: "Broilers / Layers / Turkeys / Ducks",
        symptoms: "Gasping, coughing, greenish watery diarrhea, twisted necks (torticollis), rapid drop in egg production, high mortality.",
        prevention: "Strict biosecurity (disinfect footbaths, restrict farm visitors) and routine vaccination (NDV Lasota / HB1).",
        treatment: "Viral infection with no cure once contracted. Provide supportive multi-vitamins and antibiotics for secondary bacterial control."
    },
    {
        title: "Foot and Mouth Disease (FMD)",
        category: "Livestock Disease",
        target: "Cattle / Goats / Sheep / Pigs",
        symptoms: "High fever, excessive salivation and drooling, blister-like vesicles on gums, tongue, and hooves causing severe lameness.",
        prevention: "Quarantine all newly purchased animals for 21 days; administer biannual polyvalent FMD vaccines.",
        treatment: "Wash hoof lesions with mild potassium permanganate solution; administer systemic antibiotics and anti-inflammatories."
    },
    {
        title: "Cassava Mosaic Virus (CMD)",
        category: "Crop Disease",
        target: "Cassava",
        symptoms: "Yellowish-green mottling patterns on leaves, leaf distortion, stunted plant growth, and reduced tuber yields.",
        prevention: "Source certified virus-free stems (such as TME 419 or TMS 30572) from verified seed multiplication centers.",
        treatment: "No chemical cure. Immediately rogue (uproot and burn) infected plants to prevent whitefly vector transmission."
    },
    {
        title: "Tick Infestation & Babesiosis",
        category: "Livestock Disease",
        target: "Cattle / Goats / Sheep",
        symptoms: "Clusters of ticks on underbelly and ears; pale gums (anemia), high fever, dark red/brown urine, weight loss.",
        prevention: "Maintain rotational grazing practices and inspect herd weekly during humid months.",
        treatment: "Apply acaricides (synthetic pyrethroids dip or spray) and administer Diminazene Aceturate injections under veterinary guidance."
    },
    {
        title: "African Swine Fever (ASF)",
        category: "Livestock Disease",
        target: "Pigs",
        symptoms: "High fever, reddened skin on ears and belly, vomiting, bloody diarrhea, high mortality rate approaching 100%.",
        prevention: "Never feed untreated hotel swill or scraps; enforce perimeter fencing and strict vehicle disinfection at piggery gates.",
        treatment: "No vaccine or cure exists. Isolate farm, notify veterinary officials, and humanely depopulate affected pens."
    },
    {
        title: "Peste des Petits Ruminants (PPR)",
        category: "Livestock Disease",
        target: "Goats / Sheep",
        symptoms: "Sudden fever, discharge from eyes and nose, sores on lips/gums, foul-smelling diarrhea, rapid dehydration.",
        prevention: "Vaccinate all sheep and goats annually with the PPR homologous vaccine starting at 4 months of age.",
        treatment: "Administer broad-spectrum antibiotics to prevent secondary pneumonia; provide oral rehydration salts and soft feeds."
    },
    {
        title: "Avian Coccidiosis",
        category: "Poultry Disease",
        target: "Poultry / Broilers / Layers",
        symptoms: "Bloody or mucoid droppings, ruffled feathers, huddling under heat lamps, lethargy, poor feed conversion.",
        prevention: "Keep coop litter clean, bone-dry, and well-ventilated; prevent water spillage around drinkers.",
        treatment: "Administer Amprolium or Sulfaquinoxaline in drinking water for 3–5 consecutive days."
    },
    {
        title: "Bacterial Wilt (Ralstonia)",
        category: "Crop Disease",
        target: "Tomatoes / Potatoes / Bananas",
        symptoms: "Rapid wilting of green leaves without initial leaf yellowing; stems produce milky bacterial ooze when cut and suspended in water.",
        prevention: "Avoid planting nightshades in infected fields for 3 years; maintain clean farm equipment.",
        treatment: "Soil fumigation or solarization prior to planting; immediately destroy affected crop stands."
    },
    {
        title: "Maize Stem Borer",
        category: "Crop Pest",
        target: "Maize / Sorghum",
        symptoms: "Small pinholes in young leaves, dead heart foliage in young shoots, bored holes on stems filled with frass.",
        prevention: "Intercrop with cowpeas or Desmodium (Push-Pull technique); burn crop residue after harvest.",
        treatment: "Apply granular insecticides (e.g., Carbofuran or Cypermethrin dust) directly into the leaf whorls."
    },
    {
        title: "Cassava Mealybug",
        category: "Crop Pest",
        target: "Cassava",
        symptoms: "Severe curling and bunching of terminal shoot leaves ('bunchy top'), white cottony wax coating on stems.",
        prevention: "Dip cassava cuttings in insecticidal bath before planting; encourage natural ladybird beetle predators.",
        treatment: "Foliar spray with systemic insecticides like Imidacloprid or Neem seed oil emulsions."
    },
    {
        title: "Black Pod Disease",
        category: "Crop Disease",
        target: "Cocoa",
        symptoms: "Brown-to-black necrotic lesions spreading rapidly across cocoa pods, covered in white fungal spores during high humidity.",
        prevention: "Prune heavy shade trees to improve air ventilation; harvest mature pods promptly every 2 weeks.",
        treatment: "Spray copper-based fungicides (Metalaxyl + Copper Oxide) at 3-week intervals during rainy seasons."
    },
    {
        title: "Gumboro Disease (IBD)",
        category: "Poultry Disease",
        target: "Chicks / Broilers (3–6 weeks old)",
        symptoms: "Watery white diarrhea, soiled vent feathers, extreme depression, trembling, inflammation of the bursa fabricius.",
        prevention: "Vaccinate chicks with intermediate strain IBD vaccine at 10 and 18 days of age.",
        treatment: "Provide electrolytes, glucose water, and kidney flushes to reduce mortality during acute 3-day outbreaks."
    },
    {
        title: "Fowl Pox",
        category: "Poultry Disease",
        target: "Layers / Broilers / Turkeys",
        symptoms: "Wart-like nodules/scabs on unfeathered skin (comb, wattles, eyelids) or diptheritic yellow lesions inside the mouth/trachea.",
        prevention: "Vaccinate birds via wing-web puncture at 6–8 weeks; control mosquito populations around coops.",
        treatment: "Apply mild antiseptic iodine to external scabs; provide multi-vitamins to encourage feed intake."
    },
    {
        title: "Helminthiasis (Internal Worms)",
        category: "Livestock Disease",
        target: "Cattle / Goats / Sheep / Pigs",
        symptoms: "Bottle jaw (fluid swelling under lower jaw), pale mucous membranes, dull coat, chronic diarrhea, poor weight gain.",
        prevention: "Practice rotational grazing; avoid grazing animals early in the morning on wet dew-covered pastures.",
        treatment: "Administer broad-spectrum anthelmintics (Albendazole, Levamisole, or Ivermectin) every 3 to 4 months."
    },
    {
        title: "Trypanosomiasis (Nagana)",
        category: "Livestock Disease",
        target: "Cattle / Goats / Horses",
        symptoms: "Intermittent fever, progressive emaciation, enlarged lymph nodes, watery eye discharge, abortion in pregnant cows.",
        prevention: "Control tsetse fly vectors using insecticidal traps, target screens, and pour-on deltamethrin treatments.",
        treatment: "Administer Isometamidium Chloride or Diminazene Aceturate early in the course of infection."
    },
    {
        title: "Yam Anthracnose Disease",
        category: "Crop Disease",
        target: "Yam",
        symptoms: "Blackened leaves, dieback of vine tips, premature defoliation leading to small, stunted tuber formation.",
        prevention: "Plant resistant yam cultivars; treat seed tubers with fungicide dust before ridge planting.",
        treatment: "Foliar spray with Azoxystrobin or Mancozeb fungicides at the first sign of vine foliage spots."
    }
];

let harvestListings = [
    { name: "Green Valley Cooperative", item: "Tomatoes", qty: 900, unit: "kg", state: "Edo", date: "2026-11-05", sample: true },
    { name: "Sunrise Pastoral Farm", item: "Goat (Adult)", qty: 25, unit: "heads", state: "Kano", date: "2026-11-08", sample: true },
    { name: "Ogun Poultry Hub", item: "Broiler Chicken (Live)", qty: 500, unit: "heads", state: "Ogun", date: "2026-11-12", sample: true }
];

let buyerRequests = [
    { buyer: "City Fresh Foods Ltd", item: "Tomatoes", qty: 600, unit: "kg", state: "Edo", price: 1950, sample: true },
    { buyer: "Abuja Meat Processing Co.", item: "Cattle (Bull - Large)", qty: 10, unit: "heads", state: "FCT (Abuja)", price: 650000, sample: true },
    { buyer: "Lagos Poultry Buyers", item: "Broiler Chicken (Live)", qty: 200, unit: "heads", state: "Lagos", price: 7800, sample: true }
];

let farmTasks = [];
let activeDeals = [];

document.addEventListener("DOMContentLoaded", () => {
    populateStateDropdowns();
    initCategoryListeners();
    initTabs();
    initWeather();
    initTasks();
    renderListings();
    initForms();
    renderAdvisory(advisoryDatabase);
    initAdvisorySearchAndFilters();
});

function populateStateDropdowns() {
    const stateSelects = [
        document.getElementById("farmLocation"),
        document.getElementById("matchLocation"),
        document.getElementById("harvestState"),
        document.getElementById("buyerReqState")
    ];

    stateSelects.forEach(select => {
        if (!select) return;
        const currentVal = select.value;
        const hasAnyOption = select.querySelector('option[value="Any"]');
        
        select.innerHTML = "";
        if (hasAnyOption) {
            select.innerHTML = '<option value="Any">Any location (Nationwide)</option>';
        }

        Object.keys(nigerianStates).forEach(state => {
            const opt = document.createElement("option");
            opt.value = state;
            opt.textContent = `${state} State`;
            select.appendChild(opt);
        });
        if (currentVal) select.value = currentVal;
    });

    if(document.getElementById("farmLocation")) document.getElementById("farmLocation").value = "Lagos";
}

function populateItemDropdown(categorySelectId, itemSelectId) {
    const categoryEl = document.getElementById(categorySelectId);
    const itemEl = document.getElementById(itemSelectId);
    if (!categoryEl || !itemEl) return;

    const category = categoryEl.value;
    const items = marketPrices[category] || marketPrices["Crops"];

    itemEl.innerHTML = "";
    Object.keys(items).forEach(itemName => {
        const itemData = items[itemName];
        const opt = document.createElement("option");
        opt.value = itemName;
        opt.textContent = `${itemName} (₦${itemData.price.toLocaleString()}/${itemData.unit})`;
        itemEl.appendChild(opt);
    });
}

function initCategoryListeners() {
    const pairs = [
        { cat: "matchCategory", item: "matchItem" },
        { cat: "harvestCategory", item: "harvestItem" },
        { cat: "buyerCategory", item: "buyerReqItem" },
        { cat: "transCategory", item: "transProduce" }
    ];

    pairs.forEach(pair => {
        const catEl = document.getElementById(pair.cat);
        if (catEl) {
            populateItemDropdown(pair.cat, pair.item);
            catEl.addEventListener("change", () => populateItemDropdown(pair.cat, pair.item));
        }
    });
}

// Expanded Advisory Library Renderer & Filter Controls
function renderAdvisory(data) {
    const grid = document.getElementById("advisoryGrid");
    const countEl = document.getElementById("advisoryCount");
    if (!grid) return;

    grid.innerHTML = "";
    if (countEl) countEl.textContent = data.length;

    if (data.length === 0) {
        grid.innerHTML = `<p class="text-muted" style="grid-column: 1/-1; text-align:center; padding:3rem;">No matching guides found in the veterinary & pest library.</p>`;
        return;
    }

    data.forEach(adv => {
        let tagClass = "tag-crop-disease";
        if (adv.category === "Crop Pest") tagClass = "tag-crop-pest";
        if (adv.category === "Livestock Disease") tagClass = "tag-livestock-disease";
        if (adv.category === "Poultry Disease") tagClass = "tag-poultry-disease";

        const div = document.createElement("div");
        div.className = "advisory-card";
        div.innerHTML = `
            <div class="card-top-tags">
                <span class="advisory-category-tag ${tagClass}">${adv.category}</span>
                <span class="target-species">${adv.target}</span>
            </div>
            <h4>${adv.title}</h4>
            <div class="advisory-section-block">
                <strong>Diagnostic Symptoms:</strong>
                ${adv.symptoms}
            </div>
            <div class="advisory-section-block">
                <strong>Prevention & Biosecurity:</strong>
                ${adv.prevention}
            </div>
            <div class="treatment-block">
                <strong>Treatment Protocol:</strong>
                ${adv.treatment}
            </div>
        `;
        grid.appendChild(div);
    });
}

function initAdvisorySearchAndFilters() {
    const searchInput = document.getElementById("advisorySearch");
    const pills = document.querySelectorAll("#advisoryCategoryPills .pill-btn");
    let currentFilter = "All";

    if (!searchInput) return;

    function applyFilters() {
        const query = searchInput.value.toLowerCase().trim();

        const filtered = advisoryDatabase.filter(adv => {
            const matchesCat = currentFilter === "All" || adv.category === currentFilter;
            const matchesQuery = adv.title.toLowerCase().includes(query) || 
                                 adv.target.toLowerCase().includes(query) || 
                                 adv.symptoms.toLowerCase().includes(query) ||
                                 adv.prevention.toLowerCase().includes(query) ||
                                 adv.treatment.toLowerCase().includes(query);
            return matchesCat && matchesQuery;
        });

        renderAdvisory(filtered);
    }

    searchInput.addEventListener("input", applyFilters);

    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentFilter = pill.getAttribute("data-filter");
            applyFilters();
        });
    });
}

// Tab Navigation
function initTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn, .shortcut-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-target") || btn.getAttribute("data-tab");
            
            document.querySelectorAll(".tab-btn").forEach(b => {
                b.classList.toggle("active", b.getAttribute("data-target") === target);
            });

            document.querySelectorAll(".tab-content").forEach(content => {
                content.classList.toggle("active", content.id === `${target}-tab`);
            });

            window.scrollTo({ top: 300, behavior: 'smooth' });
        });
    });
}

// Weather Engine
async function fetchWeather(location) {
    const coords = nigerianStates[location] || nigerianStates["Lagos"];
    const loadingEl = document.getElementById("weatherLoading");
    const infoEl = document.getElementById("weatherInfo");
    const msgEl = document.getElementById("weatherMsg");

    loadingEl.classList.remove("hidden");
    infoEl.classList.add("hidden");
    msgEl.textContent = `Fetching live weather for ${location} State...`;

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`);
        const data = await response.json();
        
        if (data && data.current) {
            const temp = data.current.temperature_2m;
            const humidity = data.current.relative_humidity_2m;
            const wind = data.current.wind_speed_10m;
            const code = data.current.weather_code;

            document.getElementById("weatherTemp").textContent = temp;
            document.getElementById("weatherHumidity").textContent = humidity;
            document.getElementById("weatherWind").textContent = wind;
            document.getElementById("weatherCondition").textContent = getWeatherDescription(code);

            loadingEl.classList.add("hidden");
            infoEl.classList.remove("hidden");
            msgEl.textContent = `Live weather updated for ${location} State (${new Date().toLocaleTimeString()}).`;
        } else {
            throw new Error("Invalid format");
        }
    } catch (err) {
        console.error("Weather error:", err);
        loadingEl.textContent = "Unable to retrieve live weather data. Please check connection.";
        msgEl.textContent = "Offline mode active.";
    }
}

function getWeatherDescription(code) {
    const weatherCodes = {
        0: "Clear sky ☀️",
        1: "Mainly clear 🌤️",
        2: "Partly cloudy ⛅",
        3: "Overcast ☁️",
        45: "Foggy 🌫️",
        51: "Light drizzle 🌧️",
        61: "Slight rain 🌧️",
        80: "Rain showers 🌦️",
        95: "Thunderstorm ⚡"
    };
    return weatherCodes[code] || "Optimal farming conditions 🌤️";
}

function initWeather() {
    const locationSelect = document.getElementById("farmLocation");
    const refreshBtn = document.getElementById("refreshWeather");

    fetchWeather(locationSelect.value);
    locationSelect.addEventListener("change", (e) => fetchWeather(e.target.value));
    refreshBtn.addEventListener("click", () => fetchWeather(locationSelect.value));
}

// Tasks Management
function initTasks() {
    const taskForm = document.getElementById("taskForm");
    document.getElementById("dueDate").valueAsDate = new Date();

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const type = document.getElementById("activityType").value;
        const dueDate = document.getElementById("dueDate").value;
        const desc = document.getElementById("taskDesc").value;

        farmTasks.push({ id: Date.now(), type, dueDate, desc, completed: false });
        renderTasks();
        taskForm.reset();
        document.getElementById("dueDate").valueAsDate = new Date();
    });
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    
    document.getElementById("totalTasks").textContent = farmTasks.length;
    document.getElementById("pendingTasks").textContent = farmTasks.filter(t => !t.completed).length;
    document.getElementById("completedTasks").textContent = farmTasks.filter(t => t.completed).length;

    if (farmTasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state" id="emptyTasks">
                <i class="fa-solid fa-plant-wilted"></i>
                <p>No farm tasks scheduled yet</p>
                <span>Add a reminder above to organize your operations.</span>
            </div>
        `;
        return;
    }

    taskList.innerHTML = "";
    farmTasks.forEach(task => {
        const item = document.createElement("div");
        item.className = `task-item ${task.completed ? 'completed' : ''}`;
        item.innerHTML = `
            <div>
                <strong>[${task.type}]</strong> ${task.desc} <br>
                <small class="text-muted">Due: ${task.dueDate}</small>
            </div>
            <div class="task-actions">
                <button class="btn btn-primary" style="padding:0.25rem 0.6rem; font-size:0.75rem;" onclick="toggleTask(${task.id})">
                    ${task.completed ? 'Undo' : 'Done'}
                </button>
                <button class="btn" style="background:#ef4444; color:white; padding:0.25rem 0.6rem; font-size:0.75rem;" onclick="deleteTask(${task.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        taskList.appendChild(item);
    });
}

window.toggleTask = function(id) {
    const task = farmTasks.find(t => t.id === id);
    if (task) { task.completed = !task.completed; renderTasks(); }
};

window.deleteTask = function(id) {
    farmTasks = farmTasks.filter(t => t.id !== id);
    renderTasks();
};

// Render Listings Feed
function renderListings() {
    const harvestCont = document.getElementById("harvestListingsContainer");
    const buyerCont = document.getElementById("buyerRequestsContainer");

    harvestCont.innerHTML = "";
    buyerCont.innerHTML = "";

    harvestListings.forEach(item => {
        const div = document.createElement("div");
        div.className = "listing-item";
        div.innerHTML = `
            ${item.sample ? '<span class="tag-sample">Sample</span>' : ''}
            <h4>${item.name}</h4>
            <p><strong>${item.item}</strong> - ${item.qty} ${item.unit || 'units'} · ${item.state} State</p>
            <p><small class="text-muted">Available date: ${item.date}</small></p>
        `;
        harvestCont.appendChild(div);
    });

    buyerRequests.forEach(item => {
        const div = document.createElement("div");
        div.className = "listing-item";
        div.innerHTML = `
            <span class="tag-sample">Sample</span>
            <h4>${item.buyer}</h4>
            <p><strong>${item.item}</strong> needs ${item.qty} ${item.unit || 'units'} · Delivery: ${item.state} State</p>
            <p><strong class="text-success">₦${item.price.toLocaleString()} / unit</strong> indicative price</p>
        `;
        buyerCont.appendChild(div);
    });
}

// Form Submission Handlers
function initForms() {
    document.getElementById("matchForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const category = document.getElementById("matchCategory").value;
        const item = document.getElementById("matchItem").value;
        const location = document.getElementById("matchLocation").value;
        const qty = parseInt(document.getElementById("matchQuantity").value);

        const resultsContainer = document.getElementById("matchResultsContainer");
        const matches = buyerRequests.filter(req => {
            const itemMatch = req.item === item;
            const locMatch = location === "Any" || req.state === location;
            return itemMatch && locMatch;
        });

        const itemData = marketPrices[category][item] || { price: 1000, unit: "unit" };

        resultsContainer.innerHTML = `<h3 style="font-size:1.1rem; margin-bottom:0.5rem;">Matching Buyer Results for ${qty.toLocaleString()} ${itemData.unit}s of ${item}</h3>`;

        if (matches.length === 0) {
            resultsContainer.innerHTML += `
                <div class="match-card">
                    <div class="match-info">
                        <h4>Wholesale Market Rate Benchmark</h4>
                        <p>No direct buyer requests found for ${location === 'Any' ? 'Nationwide' : location + ' State'}. Standard wholesale benchmark applied.</p>
                    </div>
                    <div class="match-price">
                        <strong>₦${(itemData.price * qty).toLocaleString()}</strong>
                        <small class="text-muted">@ ₦${itemData.price.toLocaleString()} / ${itemData.unit}</small>
                    </div>
                </div>
            `;
        } else {
            matches.forEach(m => {
                const totalValue = m.price * qty;
                resultsContainer.innerHTML += `
                    <div class="match-card">
                        <div class="match-info">
                            <h4>${m.buyer} (${m.state} State)</h4>
                            <p>Demand: ${m.qty.toLocaleString()} ${itemData.unit}s · Rate: ₦${m.price.toLocaleString()}/${itemData.unit}</p>
                        </div>
                        <div class="match-price">
                            <strong>₦${totalValue.toLocaleString()}</strong>
                            <button class="btn btn-primary" style="margin-top:0.5rem; padding:0.35rem 0.75rem; font-size:0.8rem;" onclick="selectMatchToTrans('${category}', '${m.item}', '${m.buyer}', ${qty}, ${m.price}, '${m.state}')">Initiate Deal</button>
                        </div>
                    </div>
                `;
            });
        }
    });

    document.getElementById("harvestForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("farmerName").value;
        const category = document.getElementById("harvestCategory").value;
        const item = document.getElementById("harvestItem").value;
        const qty = parseInt(document.getElementById("harvestQty").value);
        const state = document.getElementById("harvestState").value;
        const date = document.getElementById("harvestDate").value;

        const itemData = marketPrices[category][item] || { unit: "units" };

        harvestListings.unshift({ name, item, qty, unit: itemData.unit, state, date, sample: false });
        renderListings();
        alert("Listing published successfully!");
        document.getElementById("harvestForm").reset();
    });

    document.getElementById("buyerRequestForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const buyer = document.getElementById("buyerBusName").value;
        const category = document.getElementById("buyerCategory").value;
        const item = document.getElementById("buyerReqItem").value;
        const qty = parseInt(document.getElementById("buyerReqQty").value);
        const state = document.getElementById("buyerReqState").value;
        const price = parseInt(document.getElementById("buyerIndicativePrice").value);

        const itemData = marketPrices[category][item] || { unit: "units" };

        buyerRequests.unshift({ buyer, item, qty, unit: itemData.unit, state, price, sample: false });
        renderListings();
        alert("Buyer request published successfully!");
        document.getElementById("buyerRequestForm").reset();
    });

    document.getElementById("transCategory").addEventListener("change", (e) => {
        const category = e.target.value;
        const item = document.getElementById("transProduce").value;
        const itemData = marketPrices[category][item];
        if (itemData) document.getElementById("transPrice").value = itemData.price;
    });

    document.getElementById("transactionForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const item = document.getElementById("transProduce").value;
        const role = document.getElementById("transRole").value;
        const otherParty = document.getElementById("otherParty").value;
        const qty = document.getElementById("transQty").value;
        const price = document.getElementById("transPrice").value;
        const location = document.getElementById("transLocation").value;

        activeDeals.push({ item, role, otherParty, qty, price, location, total: qty * price });
        renderDeals();
        alert("Escrow deal initiated successfully!");
        document.getElementById("transactionForm").reset();
    });
}

window.selectMatchToTrans = function(category, item, buyer, qty, price, location) {
    document.querySelectorAll(".tab-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-target") === "transactions");
    });
    document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.toggle("active", content.id === "transactions-tab");
    });

    document.getElementById("transCategory").value = category;
    populateItemDropdown("transCategory", "transProduce");
    document.getElementById("transProduce").value = item;
    document.getElementById("otherParty").value = buyer;
    document.getElementById("transQty").value = qty;
    document.getElementById("transPrice").value = price;
    document.getElementById("transLocation").value = `${location} State`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function renderDeals() {
    const list = document.getElementById("dealsList");
    if (activeDeals.length === 0) {
        list.innerHTML = `<p class="text-muted">No active transactions initiated yet.</p>`;
        return;
    }
    list.innerHTML = "";
    activeDeals.forEach(d => {
        list.innerHTML += `
            <div class="deal-item">
                <strong>${d.item} (${Number(d.qty).toLocaleString()} units)</strong> with ${d.otherParty}<br>
                <small class="text-muted">Total: ₦${Number(d.total).toLocaleString()} @ ₦${Number(d.price).toLocaleString()}/unit | Dest: ${d.location}</small>
            </div>
        `;
    });
}