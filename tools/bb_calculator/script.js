document.getElementById('calculate-btn').addEventListener('click', () => {
    const boostDateInput = document.getElementById('boost-date').value;
    if (!boostDateInput) {
      alert('Veuillez entrer une date de boost.');
      return;
    }
  
    const boostDate = new Date(boostDateInput);
    const resultsDiv = document.getElementById('results');
    const badgeDatesList = document.getElementById('badge-dates');
  
    // Délai en mois pour chaque badge
    const badgeMonths = [1, 2, 3, 6, 9, 12, 15, 18, 24];
    const badgeLabels = [
      "1 Mois", "2 Mois", "3 Mois", "6 Mois",
      "9 Mois", "12 Mois", "15 Mois", "18 Mois", "24 Mois"
    ];
  
    // Réinitialiser les résultats
    badgeDatesList.innerHTML = '';
  
    badgeMonths.forEach((months, index) => {
      const badgeDate = new Date(boostDate);
      badgeDate.setMonth(badgeDate.getMonth() + months);
      const formattedDate = badgeDate.toLocaleDateString('fr-FR');
      const listItem = document.createElement('li');
      listItem.textContent = `${badgeLabels[index]} : ${formattedDate}`;
      badgeDatesList.appendChild(listItem);
    });
  
    // Afficher les résultats
    resultsDiv.classList.remove('hidden');
  });
  