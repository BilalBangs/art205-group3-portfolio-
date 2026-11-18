// ==================================
// GROUP PHOTO MODAL
// ==================================

const groupPhoto = document.getElementById("groupPhoto");
const photoModal = document.getElementById("photoModal");
const closePhotoModal = document.getElementById("closePhotoModal");

// Open photo modal when photo is clicked
if (groupPhoto && photoModal) {
    groupPhoto.addEventListener("click", function () {
        photoModal.classList.add("show");
    });
}

// Close photo modal
if (closePhotoModal && photoModal) {
    closePhotoModal.addEventListener("click", function () {
        photoModal.classList.remove("show");
    });
}

// ==================================
// CONTACT FORM CONFIRMATION MODAL
// ==================================

const contactForm = document.getElementById("contactForm");
const confirmModal = document.getElementById("confirmModal");

const confirmSubmit = document.getElementById("confirmSubmit");
const cancelSubmit = document.getElementById("cancelSubmit");

const successModal = document.getElementById("successModal");
const closeSuccess = document.getElementById("closeSuccess");

let formReadyToSubmit = false;

// Open confirmation modal
if (contactForm && confirmModal) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        confirmModal.classList.add("show");

    });

}

// Confirm submission
if (confirmSubmit) {

    confirmSubmit.addEventListener("click", function () {

        formReadyToSubmit = true;

        if (contactForm && contactForm.checkValidity()) {

            contactForm.reset();

            confirmModal.classList.remove("show");

            if (successModal) {
                successModal.classList.add("show");
            }

        }

    });

}

// Cancel submission
if (cancelSubmit) {

    cancelSubmit.addEventListener("click", function () {

        confirmModal.classList.remove("show");

        formReadyToSubmit = false;

    });

}

// Close success modal
if (closeSuccess && successModal) {

    closeSuccess.addEventListener("click", function () {

        successModal.classList.remove("show");

    });

}

// ==================================
// CLOSE MODALS WHEN BACKGROUND IS CLICKED
// ==================================

document.querySelectorAll(".modal").forEach(function (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            modal.classList.remove("show");
        }

    });

});

// ==================================
// CLOSE MODALS WITH ESCAPE KEY
// ==================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal.show").forEach(function (modal) {
            modal.classList.remove("show");
        });

    }

});