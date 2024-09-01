// sara.js

// הגדרת תאריך היעד (החתונה)
const weddingDate = new Date("September 18, 2024 00:00:00").getTime();

// עדכון הספירה לאחור כל שניה
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // חישוב הזמן שנותר
    const totalDays = distance / (1000 * 60 * 60 * 24); // חישוב מספר הימים שנותרו
    const remainingDaysInWeek = totalDays % 7; // מספר הימים שנותרו לאחר חלוקת שבועות שלמים

    // חישוב מספר השבועות
    const weeks = remainingDaysInWeek > 3.5 ? Math.ceil(totalDays / 7) : Math.floor(totalDays / 7);

    const days = Math.floor(totalDays); // חישוב מספר הימים שנותרו, ללא חלוקה לשבועות
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // חישוב מספר השעות שנותרו
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // חישוב מספר הדקות שנותרו
    const seconds = Math.floor((distance % (1000 * 60)) / 1000); // חישוב מספר השניות שנותרו

    // הצגת הערכים בריבועים המתאימים
    document.getElementById("weeks").innerText = weeks;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // אם הספירה נגמרה
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("luxury-countdown").innerHTML = "The Wedding Has Happened!";
    }
}, 1000);
