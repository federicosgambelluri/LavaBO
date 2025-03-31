getElementById("welcome").innerText = `Benvenuto, ${user}`;
  renderTable();
}

function renderTable() {
  const tbody = document.querySelector("#calendar tbody");
  tbody.innerHTML = "";
  timeSlots.forEach(time => {
    const row = document.createElement("tr");
    const timeCell = document.createElement("td");
    timeCell.innerText = time;
    row.appendChild(timeCell);

    days.forEach(day => {
      const cell = document.createElement("td");
      const key = `${day}-${time}`;
      if (reservations[key]) {
        cell.innerText = reservations[key];
        if (reservations[key] === currentUser) {
          cell.classList.add("owned");
          cell.onclick = () => {
            if (confirm("Vuoi cancellare la tua prenotazione?")) {
              delete reservations[key];
              saveAndRender();
            }
          };
        }
      } else {
        cell.onclick = () => {
          if (confirm(`Vuoi prenotare ${day} alle ${time}?`)) {
            reservations[key] = currentUser;
            saveAndRender();
          }
        };
      }
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
}

function saveAndRender() {
  localStorage.setItem("reservations", JSON.stringify(reservations));
  renderTable();
}
