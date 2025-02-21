document.addEventListener("DOMContentLoaded", function () {
    
    
    document.querySelectorAll(".btn-primary").forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for your interest! A representative will contact you soon.");
        });
    });
});  
