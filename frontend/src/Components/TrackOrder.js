const trackForm = document.getElementById("trackForm");
const resultDiv = document.getElementById("result");
const progressBar = document.getElementById("progressBar");
const animation = document.getElementById("animation");

trackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const lrNumber = document.getElementById("lrNumber").value;

  // Simulating API call to get tracking details
  const data = getTrackingDetails(lrNumber);

  if (data) {
    displayTrackingDetails(data);
  } else {
    resultDiv.innerHTML = "Tracking details not found.";
  }
});

function getTrackingDetails(lrNumber) {
  // Simulated function to fetch tracking details from API
  // Replace this with actual API call in your application
  return {
    status: "In Transit",
    location: "Warehouse A",
    timestamp: "2022-08-15 10:30:00",
    lrnum: lrNumber,
    // Add more tracking details here
  };
}

function displayTrackingDetails(data) {
  let html = "";
  html += "<p><strong>Status:</strong> " + data.status + "</p>";
  html += "<p><strong>Location:</strong> " + data.location + "</p>";
  // Add more tracking details here

  resultDiv.innerHTML = html;

  // Update progress bar based on shipment status
  if (data.status === "In Transit") {
    progressBar.style.width = "50%";
    animation.style.left = "50%";
  } else if (data.status === "Delivered") {
    progressBar.style.width = "100%";
    animation.style.left = "100%";
  }
}
