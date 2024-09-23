function customSelect() {
    const customSelects = document.querySelectorAll(".custom-select");

    customSelects.forEach((customSelect) => {
        const selectBtn = customSelect.querySelector(".custom-select__button");
        const selectedValue = customSelect.querySelector(".custom-select__value");
        const optionsList = customSelect.querySelectorAll(".custom-select__dropdown li");

        function closeAllSelects() {
            customSelects.forEach((select) => {
              select.classList.remove("active");
              select.querySelector(".custom-select__button").setAttribute("aria-expanded", "false");
            });
        }

        // Toggle dropdown visibility on button click
        selectBtn.addEventListener("click", () => {
            const isActive = customSelect.classList.contains("active");
      
            // Закрыть все селекты
            closeAllSelects();
      
            // Открыть только текущий селект, если он был закрыт
            if (!isActive) {
              customSelect.classList.add("active");
              selectBtn.setAttribute("aria-expanded", "true");
            } else {
              selectBtn.setAttribute("aria-expanded", "false");
            }
        });

        // Event handlers for dropdown options
        optionsList.forEach((option) => {
            function handler(e) {
                // Click Events
                if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
                    const label = option.querySelector("label").textContent;
                    selectedValue.textContent = label;
                    customSelect.classList.remove("active");
                    selectBtn.setAttribute("aria-expanded", "false");
                }
                // Key Events (for accessibility)
                if (e.key === "Enter") {
                    const label = option.querySelector("label").textContent;
                    selectedValue.textContent = label;
                    customSelect.classList.remove("active");
                    selectBtn.setAttribute("aria-expanded", "false");
                }
            }

            option.addEventListener("keyup", handler);
            option.addEventListener("click", handler);
        });

        document.addEventListener("click", (e) => {
            if (!e.target.closest(".custom-select")) {
              customSelects.forEach((customSelect) => {
                customSelect.classList.remove("active");
                customSelect.querySelector(".custom-select__button").setAttribute("aria-expanded", "false");
              });
            }
        });
    });
}

export default customSelect;