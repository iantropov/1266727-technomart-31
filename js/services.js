const servicesTabs = document.querySelector(".services-tabs");
const servicesTabsContents = document.querySelectorAll(
    ".services-tabs-content"
);
const servicesTabsListLinks = document.querySelectorAll(
    ".services-tabs-list__link"
);
const servicesTabsList = document.querySelector(".services-tabs-list");

servicesTabsListLinks.forEach((link, idx) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const currentListItem = servicesTabsList.querySelector(
            ".services-tabs-list__item_current"
        );
        currentListItem.classList.remove("services-tabs-list__item_current");
        link.parentElement.classList.add("services-tabs-list__item_current");

        const currentContent = servicesTabs.querySelector(
            ".services-tabs-content_current"
        );
        currentContent.classList.remove("services-tabs-content_current");
        servicesTabsContents[idx].classList.add(
            "services-tabs-content_current"
        );
    });
});
