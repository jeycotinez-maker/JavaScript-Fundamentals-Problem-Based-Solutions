const card = document.getElementById("card");
const capacityInput = document.getElementById("capacityInput");
const applyCapacityBtn = document.getElementById("applyCapacityBtn");
const entryBtn = document.getElementById("entryBtn");
const exitBtn = document.getElementById("exitBtn");
const resetBtn = document.getElementById("resetBtn");
const countDisplay = document.getElementById("countDisplay");
const percentDisplay = document.getElementById("percentDisplay");
const progressFill = document.getElementById("progressFill");
const alertText = document.getElementById("alertText");
const statusBadge = document.getElementById("statusBadge");
const warningDialog = document.getElementById("warningDialog");
const continueBtn = document.getElementById("continueBtn");
const stopBtn = document.getElementById("stopBtn");

let occupancy = 0;
let capacity = 40;
let entryLocked = false;
let dialogShownForCurrentThreshold = false;

function parseCapacity(rawValue) {
  const value = Number.parseInt(rawValue, 10);
  return Number.isFinite(value) && value >= 1 ? value : 1;
}

function getPercent() {
  return Math.round((occupancy / capacity) * 100);
}

function getStatus(percent) {
  if (percent < 85) {
    return {
      theme: "theme-safe",
      badge: "SAFE",
      alert: entryLocked ? "Entry is locked. Someone must leave before new entry can continue." : "Occupancy is safe."
    };
  }

    if (percent < 100) {
    return {
      theme: "theme-warning",
      badge: "WARNING",
      alert: entryLocked ? "Entry is locked. Warning threshold reached." : "Warning: approaching capacity."
    };
  }

   return {
    theme: "theme-danger",
    badge: "STOP",
    alert: "STOP — fire code capacity reached."
  };
}