var parentremoval = document.getElementById("onex")

parentremoval.addEventListener("click", function () {
    parentremoval.parentElement.remove()
})

var sidenav = document.getElementById("sidenavbar")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.left = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})

document.addEventListener('DOMContentLoaded', function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Add event listeners to each checkbox
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            // Iterate through all product items
            var productItems = document.querySelectorAll('.meg .newarrivals__s11, .newarrivals__s12, .newarrivals__s13');
            
            productItems.forEach(function (productItem) {
                // Reset the display property for all product items
                productItem.style.display = 'block';
            });
            // Iterate through each checked checkbox
            checkboxes.forEach(function (checkedCheckbox) {
                // If checkbox is checked
                if (checkedCheckbox.checked) {
                    // Get the value of the checked checkbox
                    var checkboxValue = checkedCheckbox.nextSibling.nodeValue.trim();

                    productItems.forEach(function (productItem) {
                        const productName = productItem.querySelector("h1").textContent.trim();
                        if (!productName.includes(checkboxValue)) {
                            productItem.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
});