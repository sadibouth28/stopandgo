const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const fareZones = {
  "Dakar centre": {
    single: 200,
    day: 800,
    subscription: 15000,
    area: "Plateau, Rebeuss, Petersen, Fann, Gueule Tapée, Leclerc",
  },
  "Dakar urbain": {
    single: 250,
    day: 1000,
    subscription: 18000,
    area: "Grand Yoff, Liberté, Yoff, Ngor, Ouakam, Sud Foire, Parcelles",
  },
  Banlieue: {
    single: 300,
    day: 1200,
    subscription: 20000,
    area: "Pikine, Guédiawaye, Thiaroye, Mbao, Keur Massar, Yeumbeul",
  },
  Périphérie: {
    single: 400,
    day: 1500,
    subscription: 24000,
    area: "Rufisque, Bargny, Diamniadio, Bambilor, Lac Rose, Sangalkam",
  },
};

const routes = [
  { code: "3", name: "Liberté 6 → Plateau", zone: "Dakar centre" },
  { code: "1B", name: "Sud Foire → Rebeuss", zone: "Dakar urbain" },
  { code: "25", name: "Parcelles Assainies → Rebeuss", zone: "Dakar urbain" },
  { code: "30", name: "Colobane → Guédiawaye", zone: "Banlieue" },
  { code: "35", name: "Pikine → Ngor", zone: "Banlieue" },
  { code: "48", name: "Rufisque → Rebeuss", zone: "Périphérie" },
  { code: "57", name: "Rufisque → Liberté 6", zone: "Périphérie" },
  { code: "76", name: "Camille Basse → Sud Foire", zone: "Dakar urbain" },
];

const stops = [
  { name: "Liberté 6", zone: "Dakar urbain", lines: ["3", "57"], lat: 14.742, lng: -17.466 },
  { name: "Plateau", zone: "Dakar centre", lines: ["3"], lat: 14.6741, lng: -17.4432 },
  { name: "Colobane", zone: "Dakar centre", lines: ["30"], lat: 14.693, lng: -17.444 },
  { name: "Petersen", zone: "Dakar centre", lines: ["3", "25"], lat: 14.6928, lng: -17.4467 },
  { name: "Rebeuss", zone: "Dakar centre", lines: ["1B", "25", "48"], lat: 14.682, lng: -17.437 },
  { name: "Sud Foire", zone: "Dakar urbain", lines: ["1B", "76"], lat: 14.7485, lng: -17.4642 },
  { name: "Parcelles Assainies", zone: "Dakar urbain", lines: ["25"], lat: 14.759, lng: -17.438 },
  { name: "Guédiawaye", zone: "Banlieue", lines: ["30"], lat: 14.77, lng: -17.397 },
  { name: "Rufisque", zone: "Périphérie", lines: ["48", "57"], lat: 14.7167, lng: -17.2733 },
];

const translations = {
  fr: {
    hello: "Bonjour, Moussa",
    balanceLabel: "Solde actuel",
    buyTicket: "Acheter un ticket",
    subscription: "Mon abonnement",
    quickTicket: "Ticket rapide",
    favoriteLine: "Votre ligne favorite",
    buy: "Acheter",
    nextLine: "Prochaine ligne",
    stops: "Arrêts",
    chooseRoute: "Choisir une ligne AFTU",
    singleTicket: "Ticket unitaire",
    dayTicket: "Ticket journée",
    walletDebit: "Débit du solde STOP&GO",
    paymentSuccess: "Paiement réussi",
    paymentSuccessText: "Votre ticket a été acheté avec succès.",
    line: "Ligne",
    date: "Date",
    amount: "Montant",
    viewTicket: "Voir mon ticket",
    close: "Fermer",
    myTicket: "Mon ticket",
    activeTicket: "Ticket actif",
    ticket: "Ticket",
    code: "Code",
    presentTicket: "Présenter au contrôleur",
    monthlyPass: "Abonnement mensuel",
    monthlyBusPass: "Abonnement bus mensuel",
    passActive: "Abonnement actif",
    passActiveText: "Vous pouvez voyager en illimité.",
    start: "Début",
    end: "Fin",
    status: "Statut",
    active: "Actif",
    backHome: "Retour à l'accueil",
    topupTitle: "Recharger le solde",
    savedAccount: "Compte enregistré",
    topupAmount: "Montant à recharger",
    nearStops: "Arrêts proches",
    trips: "Trajets",
    profile: "Profil",
    verifiedClient: "Client AFTU vérifié",
    topup: "Recharger",
    managePass: "Gérer l'abonnement",
    personalInfo: "Informations personnelles",
    phone: "Téléphone",
    address: "Adresse",
    identifier: "Identifiant",
    home: "Accueil",
    tickets: "Tickets",
    micro: "Micro",
    available: "disponibles",
    pay: "Payer",
    continueTo: "Continuer vers",
    routeZone: "Zone tarifaire",
    unlimitedZone: "Voyages illimités pendant 30 jours sur la zone",
    insufficientBalance: "Solde insuffisant. Rechargez votre compte STOP&GO.",
    ticketReady: "Ticket prêt à présenter.",
    voiceReady: "Commande vocale prête.",
    listening: "Je vous écoute...",
    unsupportedVoice: "Commande vocale non disponible dans ce navigateur.",
    voiceError: "Impossible d'utiliser le micro.",
    commandDone: "Commande exécutée",
    now: "Maintenant",
    noResult: "Aucun arrêt trouvé",
    passInactive: "Non actif",
  },
  wo: {
    hello: "Nanga def, Moussa",
    balanceLabel: "Sa sold bi",
    buyTicket: "Jënd ticket",
    subscription: "Sama abonmaa",
    quickTicket: "Ticket bu gaaw",
    favoriteLine: "Sa ligne bi nga bëgg",
    buy: "Jënd",
    nextLine: "Ligne biy ñëw",
    stops: "Arrêt yi",
    chooseRoute: "Tànn ligne AFTU",
    singleTicket: "Ticket benn yoon",
    dayTicket: "Ticket bés bi",
    walletDebit: "Fey ci sold STOP&GO",
    paymentSuccess: "Fey gi jaar na",
    paymentSuccessText: "Sa ticket bi jënd nañu ko.",
    line: "Ligne",
    date: "Bes",
    amount: "Njëg",
    viewTicket: "Xool sama ticket",
    close: "Tëj",
    myTicket: "Sama ticket",
    activeTicket: "Ticket bi dox na",
    ticket: "Ticket",
    code: "Code",
    presentTicket: "Wane ticket bi",
    monthlyPass: "Abonmaa weer",
    monthlyBusPass: "Abonmaa bus weer",
    passActive: "Abonmaa bi dox na",
    passActiveText: "Mën nga tukki ci lu amul limit.",
    start: "Tambali",
    end: "Jeex",
    status: "Nekkin",
    active: "Dox na",
    backHome: "Dellusi kër",
    topupTitle: "Yokk sold bi",
    savedAccount: "Compte bu ñu aar",
    topupAmount: "Njëg bi ngay yokk",
    nearStops: "Arrêt yi jege",
    trips: "Tukki yi",
    profile: "Profil",
    verifiedClient: "Client AFTU bu dëggu",
    topup: "Yokk",
    managePass: "Saytu abonmaa",
    personalInfo: "Leeral",
    phone: "Telefon",
    address: "Adres",
    identifier: "Identifiant",
    home: "Kër",
    tickets: "Tickets",
    micro: "Micro",
    available: "am na",
    pay: "Fey",
    continueTo: "Dem ci",
    routeZone: "Zone tarifaire",
    unlimitedZone: "Tukki bu amul limit ci 30 fan ci zone",
    insufficientBalance: "Sold bi doyul. Yokk sa compte STOP&GO.",
    ticketReady: "Ticket bi jekk na.",
    voiceReady: "Santaane ba noppi na.",
    listening: "Maa ngi lay déglu...",
    unsupportedVoice: "Santaane baat amul ci navigateur bi.",
    voiceError: "Micro bi mënul dox.",
    commandDone: "Santaane bi jaar na",
    now: "Léegi",
    noResult: "Amul arrêt bu méngoo",
    passInactive: "Doxul",
  },
  en: {
    hello: "Hello, Moussa",
    balanceLabel: "Current balance",
    buyTicket: "Buy a ticket",
    subscription: "My pass",
    quickTicket: "Quick ticket",
    favoriteLine: "Your favorite line",
    buy: "Buy",
    nextLine: "Next line",
    stops: "Stops",
    chooseRoute: "Choose an AFTU line",
    singleTicket: "Single ticket",
    dayTicket: "Day ticket",
    walletDebit: "STOP&GO balance debit",
    paymentSuccess: "Payment successful",
    paymentSuccessText: "Your ticket was purchased successfully.",
    line: "Line",
    date: "Date",
    amount: "Amount",
    viewTicket: "View my ticket",
    close: "Close",
    myTicket: "My ticket",
    activeTicket: "Active ticket",
    ticket: "Ticket",
    code: "Code",
    presentTicket: "Present to inspector",
    monthlyPass: "Monthly pass",
    monthlyBusPass: "Monthly bus pass",
    passActive: "Pass active",
    passActiveText: "You can travel without limit.",
    start: "Start",
    end: "End",
    status: "Status",
    active: "Active",
    backHome: "Back home",
    topupTitle: "Top up balance",
    savedAccount: "Saved account",
    topupAmount: "Top-up amount",
    nearStops: "Nearby stops",
    trips: "Trips",
    profile: "Profile",
    verifiedClient: "Verified AFTU rider",
    topup: "Top up",
    managePass: "Manage pass",
    personalInfo: "Personal information",
    phone: "Phone",
    address: "Address",
    identifier: "Identifier",
    home: "Home",
    tickets: "Tickets",
    micro: "Mic",
    available: "available",
    pay: "Pay",
    continueTo: "Continue to",
    routeZone: "Fare zone",
    unlimitedZone: "Unlimited trips for 30 days in zone",
    insufficientBalance: "Insufficient balance. Top up your STOP&GO account.",
    ticketReady: "Ticket ready to present.",
    voiceReady: "Voice command ready.",
    listening: "Listening...",
    unsupportedVoice: "Voice command is not available in this browser.",
    voiceError: "Unable to use the microphone.",
    commandDone: "Command executed",
    now: "Now",
    noResult: "No stop found",
    passInactive: "Inactive",
  },
};

const state = {
  balance: 2450,
  currentView: "homeView",
  history: ["homeView"],
  routeCode: "3",
  ticketKind: "single",
  topupWallet: "Wave",
  primaryWallet: "Wave",
  lang: "fr",
  passActive: false,
  balanceHidden: localStorage.getItem("balanceHidden") === "true",
};

const elements = {
  views: $$(".view"),
  tabButtons: $$(".tabbar button"),
  backButton: $("#backButton"),
  languageSelect: $("#languageSelect"),
  routeSelect: $("#routeSelect"),
  routeDetails: $("#routeDetails"),
  ticketChoices: $$("#ticketChoices .choice"),
  balanceAmount: $("#balanceAmount"),
  profileBalance: $("#profileBalance"),
  profilePassStatus: $("#profilePassStatus"),
  singleFareLabel: $("#singleFareLabel"),
  dayFareLabel: $("#dayFareLabel"),
  subscriptionFareLabel: $("#subscriptionFareLabel"),
  subscriptionZoneText: $("#subscriptionZoneText"),
  ticketBalancePreview: $("#ticketBalancePreview"),
  subscriptionBalancePreview: $("#subscriptionBalancePreview"),
  payTicketButton: $("#payTicketButton"),
  paySubscriptionButton: $("#paySubscriptionButton"),
  confirmTopupButton: $("#confirmTopupButton"),
  topupAmount: $("#topupAmount"),
  topupPaymentButtons: $$("#topupPaymentGroup .payment"),
  savedPaymentSummary: $("#savedPaymentSummary"),
  receiptRoute: $("#receiptRoute"),
  receiptPrice: $("#receiptPrice"),
  receiptDate: $("#receiptDate"),
  qrRoute: $("#qrRoute"),
  qrTicket: $("#qrTicket"),
  qrCode: $("#qrCode"),
  stopSearch: $("#stopSearch"),
  stopList: $("#stopList"),
  historyList: $("#historyList"),
  voiceButton: $("#voiceButton"),
  presentTicketButton: $("#presentTicketButton"),
  toggleBalanceButton: $("#toggleBalance"),
};

let map;
let stopMarkers = [];
let mapInitialized = false;
let stopIcon;

function t(key) {
  return translations[state.lang][key] || translations.fr[key] || key;
}

function formatPrice(amount) {
  return `${Number(amount).toLocaleString("fr-FR")} FCFA`;
}

function balanceText(suffix = "") {
  if (state.balanceHidden) return `••••••${suffix}`;
  return `${formatPrice(state.balance)}${suffix}`;
}

function updateBalanceVisibility() {
  const hidden = state.balanceHidden;
  elements.toggleBalanceButton.textContent = hidden ? "🙈" : "👁";
  elements.toggleBalanceButton.setAttribute(
    "aria-label",
    hidden ? "Afficher le solde" : "Masquer le solde"
  );
}

function todayLabel() {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

function addDaysLabel(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function selectedRoute() {
  return routes.find((route) => route.code === state.routeCode) || routes[0];
}

function selectedZone() {
  return fareZones[selectedRoute().zone];
}

function ticketPrice() {
  const zone = selectedZone();
  return state.ticketKind === "day" ? zone.day : zone.single;
}

function ticketLabel() {
  return state.ticketKind === "day" ? t("dayTicket") : t("singleTicket");
}

function showView(viewId, track = true) {
  const target = document.getElementById(viewId);
  if (!target) return;

  elements.views.forEach((view) => view.classList.toggle("active", view === target));
  if (track && state.currentView !== viewId) state.history.push(state.currentView);
  state.currentView = viewId;

  elements.tabButtons.forEach((button) => {
    const tabView = button.dataset.go;
    const active = tabView === viewId || (viewId === "successView" && tabView === "qrView");
    button.classList.toggle("active", active);
  });

  if (viewId === "stopsView") {
    window.setTimeout(() => {
      initMap();
      if (map) map.invalidateSize();
    }, 80);
  }
}

function goBack() {
  const previous = state.history.pop();
  showView(previous || "homeView", false);
}

function setActiveButton(buttons, activeButton) {
  buttons.forEach((button) => button.classList.toggle("active", button === activeButton));
}

function populateRoutes() {
  elements.routeSelect.innerHTML = "";
  routes.forEach((route) => {
    const option = document.createElement("option");
    option.value = route.code;
    option.textContent = `${route.code} - ${route.name}`;
    elements.routeSelect.appendChild(option);
  });
  elements.routeSelect.value = state.routeCode;
}

function syncSelectedRoute() {
  state.routeCode = elements.routeSelect.value;
  updateUi();
}

function updateUi() {
  const route = selectedRoute();
  const zone = selectedZone();
  const price = ticketPrice();
  const subscriptionPrice = zone.subscription;

  $("[data-i18n='hello']").textContent = t("hello");
  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (key !== "hello") node.textContent = t(key);
  });

  elements.balanceAmount.textContent = balanceText();
  elements.profileBalance.textContent = balanceText();
  elements.profilePassStatus.textContent = state.passActive ? t("active") : t("passInactive");

  $("#quickRoute").textContent = route.name;
  $("#nextRoute").textContent = route.name;
  $("#quickPrice").textContent = formatPrice(zone.single);

  elements.singleFareLabel.textContent = formatPrice(zone.single);
  elements.dayFareLabel.textContent = formatPrice(zone.day);
  elements.subscriptionFareLabel.textContent = formatPrice(subscriptionPrice);
  elements.routeDetails.innerHTML = `
    <span>${t("routeZone")}</span>
    <strong>${route.zone}</strong>
    <small>${zone.area}</small>
  `;

  elements.ticketBalancePreview.textContent = balanceText(` ${t("available")}`);
  elements.subscriptionBalancePreview.textContent = balanceText(` ${t("available")}`);
  elements.payTicketButton.textContent = `${t("pay")} ${formatPrice(price)}`;
  elements.paySubscriptionButton.textContent = `${t("pay")} ${formatPrice(subscriptionPrice)}`;
  elements.subscriptionZoneText.textContent = `${t("unlimitedZone")} ${route.zone}.`;

  elements.receiptRoute.textContent = route.name;
  elements.receiptPrice.textContent = formatPrice(price);
  elements.receiptDate.textContent = todayLabel();
  elements.qrRoute.textContent = route.name;
  elements.qrTicket.textContent = ticketLabel();

  elements.savedPaymentSummary.textContent = savedWalletLabel(state.topupWallet);
  elements.confirmTopupButton.textContent = `${t("continueTo")} ${state.topupWallet} - ${formatPrice(Number(elements.topupAmount.value || 0))}`;
  $("#subscriptionStart").textContent = todayLabel();
  $("#subscriptionEnd").textContent = addDaysLabel(30);
  updateBalanceVisibility();
}

function savedWalletLabel(wallet) {
  return wallet === "Orange Money"
    ? "Orange Money - +221 77 765 43 21"
    : "Wave - +221 77 123 45 67";
}

function canDebit(amount) {
  if (state.balance >= amount) return true;
  alert(t("insufficientBalance"));
  showView("topupView");
  return false;
}

function addHistoryEntry(label, amount) {
  const article = document.createElement("article");
  article.innerHTML = `<strong>${label}</strong><span>${t("now")}</span><b>${formatPrice(amount)}</b>`;
  elements.historyList.prepend(article);
}

function buyTicket() {
  const price = ticketPrice();
  if (!canDebit(price)) return;
  state.balance -= price;
  addHistoryEntry(selectedRoute().name, price);
  elements.qrCode.textContent = `SG-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  updateUi();
  showView("successView");
}

function buySubscription() {
  const price = selectedZone().subscription;
  if (!canDebit(price)) return;
  state.balance -= price;
  state.passActive = true;
  addHistoryEntry(t("monthlyPass"), price);
  updateUi();
  showView("subscriptionActiveView");
}

function confirmTopup() {
  const amount = Math.max(0, Number(elements.topupAmount.value || 0));
  if (!amount) return;
  state.balance += amount;
  addHistoryEntry(`${t("topupTitle")} ${state.topupWallet}`, amount);
  updateUi();
  showView("homeView");
}

function getStopIcon() {
  if (stopIcon) return stopIcon;
  if (!window.L) return null;

  stopIcon = L.divIcon({
    className: "stop-marker",
    html: '<span></span>',
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -30],
  });

  return stopIcon;
}

function initMap() {
  const mapEl = document.getElementById("map");
  if (!mapEl || mapInitialized) return;

  if (!window.L) {
    mapEl.innerHTML = '<div class="map-unavailable">Carte indisponible. Vérifiez la connexion Internet.</div>';
    return;
  }

  map = L.map(mapEl, {
    zoomControl: true,
    attributionControl: true,
  }).setView([14.7167, -17.4677], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19,
  }).addTo(map);

  mapInitialized = true;
  renderStops(elements.stopSearch.value);
}

function clearStopMarkers() {
  stopMarkers.forEach((marker) => marker.remove());
  stopMarkers = [];
}

function renderMapMarkers(data) {
  if (!mapInitialized || !map) return;

  clearStopMarkers();
  const icon = getStopIcon();

  data.forEach((stop) => {
    const marker = L.marker([stop.lat, stop.lng], icon ? { title: stop.name, icon } : { title: stop.name })
      .addTo(map)
      .bindPopup(`
        <div class="popup-content">
          <strong>${stop.name}</strong>
          <small>${stop.zone} · lignes ${stop.lines.join(", ")}</small>
        </div>
      `);

    stopMarkers.push(marker);
  });
}

function focusStop(stop) {
  if (!mapInitialized) initMap();
  if (!map) return;

  map.setView([stop.lat, stop.lng], 15);
  const marker = stopMarkers.find((item) => item.options.title === stop.name);
  if (marker) marker.openPopup();
}

function renderStops(filter = "") {
  const query = normalize(filter);
  const filtered = stops.filter((stop) =>
    normalize(`${stop.name} ${stop.zone} ${stop.lines.join(" ")}`).includes(query)
  );

  elements.stopList.innerHTML = "";
  renderMapMarkers(filtered);

  if (!filtered.length) {
    const empty = document.createElement("article");
    empty.className = "stop-row";
    empty.innerHTML = `<strong>${t("noResult")}</strong><span></span>`;
    elements.stopList.appendChild(empty);
    return;
  }

  filtered.forEach((stop, index) => {
    const row = document.createElement("button");
    row.className = `stop-row${index === 0 ? " active" : ""}`;
    row.type = "button";
    row.innerHTML = `
      <div>
        <strong>${stop.name}</strong>
        <span>${stop.zone}</span>
      </div>
      <b>${stop.lines.join(" · ")}</b>
    `;
    row.addEventListener("click", () => {
      $$(".stop-row").forEach((item) => item.classList.remove("active"));
      row.classList.add("active");
      const firstLine = stop.lines[0];
      const route = routes.find((item) => item.code === firstLine);
      if (route) {
        state.routeCode = route.code;
        elements.routeSelect.value = route.code;
        updateUi();
      }
      focusStop(stop);
    });
    elements.stopList.appendChild(row);
  });
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function runCommand(command) {
  const text = normalize(command);
  const amount = Number((text.match(/\d{3,6}/) || [0])[0]);
  const routeMatch = text.match(/\b(?:ligne|line|bus)\s*([0-9]{1,3}b?)\b/i);

  if (routeMatch) {
    const route = routes.find((item) => item.code.toLowerCase() === routeMatch[1].toLowerCase());
    if (route) {
      state.routeCode = route.code;
      elements.routeSelect.value = route.code;
      showView("ticketView");
      updateUi();
      return;
    }
  }

  if (amount && text.includes("recharg")) {
    elements.topupAmount.value = amount;
    updateUi();
    showView("topupView");
    return;
  }

  if (text.includes("journee") || text.includes("day")) {
    state.ticketKind = "day";
    setActiveButton(elements.ticketChoices, $("#ticketChoices [data-kind='day']"));
    showView("ticketView");
    updateUi();
    return;
  }

  if (text.includes("payer")) {
    if (state.currentView === "subscriptionView") buySubscription();
    else if (state.currentView === "topupView") confirmTopup();
    else buyTicket();
    return;
  }

  if (text.includes("ticket") || text.includes("acheter")) showView("ticketView");
  else if (text.includes("abonnement")) showView("subscriptionView");
  else if (text.includes("profil")) showView("profileView");
  else if (text.includes("trajet") || text.includes("historique")) showView("historyView");
  else if (text.includes("arret") || text.includes("stop")) showView("stopsView");
  else if (text.includes("recharg")) showView("topupView");
  else showView("homeView");
}

function startVoiceRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    alert(t("unsupportedVoice"));
    return;
  }

  const recognition = new Recognition();
  recognition.lang = state.lang === "en" ? "en-US" : "fr-FR";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  elements.voiceButton.classList.add("listening");
  recognition.onresult = (event) => runCommand(event.results[0][0].transcript);
  recognition.onerror = () => alert(t("voiceError"));
  recognition.onend = () => elements.voiceButton.classList.remove("listening");
  recognition.start();
}

$$("[data-go]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.go));
});

elements.backButton.addEventListener("click", goBack);
elements.routeSelect.addEventListener("change", syncSelectedRoute);
elements.payTicketButton.addEventListener("click", buyTicket);
elements.paySubscriptionButton.addEventListener("click", buySubscription);
elements.confirmTopupButton.addEventListener("click", confirmTopup);
elements.topupAmount.addEventListener("input", updateUi);
elements.stopSearch.addEventListener("input", () => renderStops(elements.stopSearch.value));
elements.voiceButton.addEventListener("click", startVoiceRecognition);
elements.presentTicketButton.addEventListener("click", () => alert(t("ticketReady")));
$("#topupShortcut").addEventListener("click", () => showView("topupView"));
elements.toggleBalanceButton.addEventListener("click", () => {
  state.balanceHidden = !state.balanceHidden;
  localStorage.setItem("balanceHidden", String(state.balanceHidden));
  updateUi();
});

elements.ticketChoices.forEach((button) => {
  button.addEventListener("click", () => {
    state.ticketKind = button.dataset.kind;
    setActiveButton(elements.ticketChoices, button);
    updateUi();
  });
});

elements.topupPaymentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.topupWallet = button.dataset.wallet;
    state.primaryWallet = state.topupWallet;
    setActiveButton(elements.topupPaymentButtons, button);
    updateUi();
  });
});

elements.languageSelect.addEventListener("change", (event) => {
  state.lang = event.target.value;
  document.documentElement.lang = state.lang;
  updateUi();
  renderStops(elements.stopSearch.value);
});

populateRoutes();
updateUi();
renderStops(elements.stopSearch.value);
