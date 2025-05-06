function age() {
    const input = document.getElementById("input_age").value;
    const birthYear = parseInt(input);
    const currentDate = new Date();
  
    if (!input || isNaN(birthYear) || birthYear > currentDate.getFullYear() || birthYear < 1900) {
      document.getElementById("show").innerText = "❌ Please enter a valid birth year.";
      return;
    }
  
    // Assume birthdate is Jan 1st of the entered year for simplicity
    const birthDate = new Date(birthYear, 0, 1);
  
    // Calculate time difference
    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);
  
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
  
    document.getElementById("show").innerHTML = `
      🎉 You are <strong>${years}</strong> years,
      <strong>${months}</strong> months, and 
      <strong>${days}</strong> days old.
    `;
  }
  