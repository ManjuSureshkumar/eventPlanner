// ================= NAVBAR ACTIVE STATE =================

// Select ALL links (nav + auth)
const allLinks = document.querySelectorAll(".nav-links a, .auth a");

// Function to set active link
function setActiveLink(clickedLink) {
  // Remove active from all
  allLinks.forEach(link => link.classList.remove("active"));

  // Add active to clicked
  clickedLink.classList.add("active");

  // Save to localStorage (so it stays after refresh)
  localStorage.setItem("activeLink", clickedLink.getAttribute("href"));
}

// Add click event
allLinks.forEach(link => {
  link.addEventListener("click", function () {
    setActiveLink(this);
  });
});


// ================= LOAD ACTIVE LINK ON PAGE LOAD =================

window.addEventListener("DOMContentLoaded", () => {
  const savedLink = localStorage.getItem("activeLink");

  if (savedLink) {
    allLinks.forEach(link => {
      if (link.getAttribute("href") === savedLink) {
        link.classList.add("active");
      }
    });
  } else {
    // Default active (Home)
    const homeLink = document.querySelector('.nav-links a[href="index.html"]');
    if (homeLink) homeLink.classList.add("active");
  }
});

// HERO CATEGORY
function handleSearch() {
  const category = document.getElementById("category").value;
  const location = document.getElementById("location").value;

  // Validation
  if (category === "Select Category" || location === "Select Location") {
    alert("Please select both category and location");
    return;
  }

  // Output (for now)
  console.log("Category:", category);
  console.log("Location:", location);

  alert(`Searching for ${category} in ${location}`);
}

//REVIEW CARD
const reviews = [
  
  {
    name: "John",
    text: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Celin",
    text: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Kamala",
    text: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings.",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];
let current = 1;

const nameEl = document.querySelector(".review-card.active h3");
const textEl = document.querySelector(".review-card.active p");
const imgEl = document.querySelector(".review-card.active .avatar");
const dots = document.querySelectorAll(".dot");

function updateReview() {
  if (!nameEl || !textEl || !imgEl) return;

  const review = reviews[current];

  nameEl.textContent = review.name;
  textEl.textContent = review.text;
  imgEl.src = review.img;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[current]) dots[current].classList.add("active");
}

// SAFE BUTTON HANDLING
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

if (rightBtn) {
  rightBtn.onclick = () => {
    current = (current + 1) % reviews.length;
    updateReview();
  };
}

if (leftBtn) {
  leftBtn.onclick = () => {
    current = (current - 1 + reviews.length) % reviews.length;
    updateReview();
  };
}
/*======================================================================================================*/

//DropDown Open/Close
document.addEventListener("DOMContentLoaded", () => {

  const filters = document.querySelectorAll(".filter-box");

  filters.forEach(filter => {
    const dropdown = filter.querySelector(".dropdown");
    const label = filter.querySelector("span");

    if (!dropdown) return;

    const options = dropdown.querySelectorAll("p");

    // CLICK ON BOX (ONLY HEADER PART)
    filter.addEventListener("click", (e) => {
      e.stopPropagation();

      // prevent click if clicking inside dropdown
      if (e.target.closest(".dropdown")) return;

      const isOpen = dropdown.classList.contains("show");

      // close all
      document.querySelectorAll(".dropdown").forEach(d => {
        d.classList.remove("show");
      });

      // toggle current
      if (!isOpen) dropdown.classList.add("show");
    });

    // OPTION CLICK
    options.forEach(option => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();

        label.textContent = option.textContent;
        dropdown.classList.remove("show");
      });
    });
  });

  // OUTSIDE CLICK
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach(d => {
      d.classList.remove("show");
    });
  });

});


/* ========= SEARCH BUTTON FOR FILTER SECTION ========= */
function handleFilterSearch() {
  const guests = document.querySelector(".guest-filter span").textContent;
  const venue = document.querySelectorAll(".filter-box")[1].querySelector("span").textContent;
  const space = document.querySelectorAll(".filter-box")[2].querySelector("span").textContent;
  const rating = document.querySelectorAll(".filter-box")[3].querySelector("span").textContent;

  // validation
  if (
    guests === "No. of Guests" &&
    venue === "Venue Type" &&
    space === "Space Preference" &&
    rating === "Rating"
  ) {
    alert("Please select at least one filter");
    return;
  }

  // output (for now)
  console.log("Guests:", guests);
  console.log("Venue:", venue);
  console.log("Space:", space);
  console.log("Rating:", rating);

  alert(`Searching with:
Guests: ${guests}
Venue: ${venue}
Space: ${space}
Rating: ${rating}`);
}

document.getElementById("liveChatBtn").addEventListener("click", function() {
  window.location.href = "chat.html";
});
