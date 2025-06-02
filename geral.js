    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll("textarea").forEach(area => {
            area.addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    event.preventDefault(); // Impede a quebra de linha
                }
            });
        });
    });
