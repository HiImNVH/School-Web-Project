const currentUrl = new URL(window.location.href);
const currentPage = currentUrl.searchParams.get("page") || "1";
const pageButtons = document.querySelectorAll(".page-button");
pageButtons.forEach((button) => {
    if (button.textContent.trim() === currentPage) {
        button.classList.add("active"); 
        button.disabled = true; 
    }
});
