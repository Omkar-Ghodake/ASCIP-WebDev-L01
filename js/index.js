let hamburgerBtn = document.querySelector(".navbar-toggle-button")
let navList = document.querySelector(".nav-list");

navList.style.display = "none";

hamburgerBtn.addEventListener("click", () => {
	if (getComputedStyle(navList).display == "none") {
		navList.style.display = "block";
	}
	else if (getComputedStyle(navList).display == "block") {
		navList.style.display = "none";
	}
});

hamburgerBtn.addEventListener("click", () => {
	setTimeout(() => {
		if (getComputedStyle(navList).display == "block") {
			navList.style.display = "none";
			console.log("in if...");
		}
	}, 5000)
});