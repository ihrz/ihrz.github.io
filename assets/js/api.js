document.addEventListener("DOMContentLoaded", function () {
  fetch("https://horizon-gateway.ovh/api/ihorizon/v1/bot")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "serversCount"
      ).innerHTML = `<b>${data.info.servers}</b>`;
      document.getElementById("membersCount").innerHTML = `<b>${Math.round(
        data.info.members / 1000
      )}k</b>`;
      document.getElementById(
        "categoriesCount"
      ).innerHTML = `<b>${data.content.category}</b>`;
      document.getElementById(
        "commandsCount"
      ).innerHTML = `<b>${data.content.commands}</b>`;
    })
    .catch((error) => console.error("Error fetching data:", error));
});
