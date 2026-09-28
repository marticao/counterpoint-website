/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

menuButton?.addEventListener("click", () => {
    const menuIsOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(menuIsOpen)
    );
});

navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton?.setAttribute("aria-expanded", "false");
    });
});


/* =========================
   PROGRAMME HIGHLIGHT
   ========================= */

const programmeItems = document.querySelectorAll(".programme-item");

if (programmeItems.length > 0) {

    const today = new Date();

    const currentYear = today.getFullYear();

    const currentMonth = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const currentProgrammeMonth =
        `${currentYear}-${currentMonth}`;

    programmeItems.forEach((item) => {

        if (item.dataset.month === currentProgrammeMonth) {
            item.classList.add("programme-featured");
        }

    });

}

/* =========================
   FOOTER HOME LINK
   ========================= */

const footerHome = document.querySelector(".footer-home");

const isHomePage = document.body.classList.contains("home-page");

footerHome?.addEventListener("click", (event) => {

    if (isHomePage) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});