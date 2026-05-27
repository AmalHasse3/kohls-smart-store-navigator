const departments = document.querySelectorAll(".department");

departments.forEach((department) => {
    department.addEventListener("click", () => {
        alert(`Navigating to ${department.textContent}`);
    });
});
