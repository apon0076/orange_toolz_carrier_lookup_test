// Sidebar Menu Active JS Start
let sidebar_element = document
  .querySelector(".sidebar__container")
  .querySelectorAll("li");
sidebar_element.forEach((element) => {
  element.addEventListener("click", function () {
    sidebar_element.forEach((sidebar) =>
      sidebar.classList.remove("sidebar__menu_active")
    );
    this.classList.add("sidebar__menu_active");
  });
});
// Sidebar Menu Active JS End

// Sidebar Menu Dropdown Start
function handleProfileClick() {
  var dropdown_element = document.getElementById("nav-profile__dropdown");
  dropdown_element.style.display === "block"
    ? (dropdown_element.style.display = "none")
    : (dropdown_element.style.display = "block");
}
// Sidebar Menu Dropdown End

// Active Credit Card JS Start
let credit_card_element = document
  .querySelector(".body__credit-card_section")
  .querySelectorAll("li");
credit_card_element.forEach((element) => {
  element.addEventListener("click", function () {
    credit_card_element.forEach((credit_card) =>
      credit_card.classList.remove("body__credit-card_active")
    );
    this.classList.add("body__credit-card_active");
  });
});
// Active Credit Card JS End

// function handleMenuToggle() {
//   document.getElementById("submenu_toggle");
// }
