// Sidebar Menu Active JS Start
let sidebar_element = document
  .querySelector(".sidebar__container")
  .querySelectorAll(".sidebar__menu_list");
sidebar_element.forEach((element) => {
  element.addEventListener("click", function () {
    sidebar_element.forEach((sidebar) =>
      sidebar.classList.remove("sidebar__menu_active")
    );
    this.classList.add("sidebar__menu_active");
  });
});
// Sidebar Menu Active JS End

// Sidebar Submenu Toggle Start
function handleMenuToggle() {
  var submenu_toggle_element = document.getElementById("submenu_toggle");
  submenu_toggle_element.style.display === "block"
    ? (submenu_toggle_element.style.display = "none")
    : (submenu_toggle_element.style.display = "block");
  var submenu_submenu_section_element = document.getElementById(
    "sidebar__menu_submenu-section"
  );
  console.log(submenu_submenu_section_element);
  submenu_toggle_element.style.display === "block"
    ? submenu_submenu_section_element.classList.add(
        "sidebar__submenu_arrow-active"
      )
    : submenu_submenu_section_element.classList.remove(
        "sidebar__submenu_arrow-active"
      );
}
// Sidebar Submenu Toggle End

// Sidebar Submenu Item Active Js Start
let sidebar_submenu_element = document
  .querySelector(".sidebar__submenu")
  .querySelectorAll("li");
sidebar_submenu_element.forEach((element) => {
  element.addEventListener("click", function () {
    sidebar_submenu_element.forEach((sidebar) =>
      sidebar.classList.remove("sidebar__submenu_items-active")
    );
    this.classList.add("sidebar__submenu_items-active");
  });
});
// Sidebar Submenu Item Active Js End

// Navbar Menu Dropdown Start
function handleProfileClick() {
  var dropdown_element = document.getElementById("nav-profile__dropdown");
  dropdown_element.style.display === "block"
    ? (dropdown_element.style.display = "none")
    : (dropdown_element.style.display = "block");
}
// Navbar Menu Dropdown End

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

// Profile Header Button JS Start
let profile_header = document
  .querySelector(".profile-info__header")
  .querySelectorAll("li");
profile_header.forEach((element) => {
  element.addEventListener("click", function () {
    profile_header.forEach((profile) =>
      profile.classList.remove("profile-info__header_btn-active")
    );
    this.classList.add("profile-info__header_btn-active");
  });
});
// Profile Header Button JS End

// Handle Notify Switch Js Start
function handleNotifySwitch() {
  let notify_element = document.getElementsByClassName(
    "profile-info__notify_input"
  );
  let notify_msg_element = document.getElementsByClassName(
    "profile-info__notify_text"
  );
  for (var i = 0; i < notify_element.length; i++) {
    if (notify_element[i].checked === true) {
      notify_msg_element[i].classList.add("notify__element_active");
    } else {
      notify_msg_element[i].classList.remove("notify__element_active");
    }
  }
}
// Handle Notify Switch Js End

// Handle Menu Toggle Js Start
function handleNavMenuToggle() {
  var sidebar_toggle_element = document.querySelector(".sidebar_section");
  sidebar_toggle_element.style.display === "block"
    ? (sidebar_toggle_element.style.display = "none")
    : (sidebar_toggle_element.style.display = "block");
}
// Handle Menu Toggle Js End
