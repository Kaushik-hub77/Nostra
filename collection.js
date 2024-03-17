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


var search= document.getElementById("collectioninput")
var cont= document.getElementById("n1")
var productcont1= document.querySelector('.newarrivals1')
var innerp1= productcont1.querySelectorAll("div")
var productcont2= document.querySelector('.newarrivals2')
var innerp3= productcont2.querySelectorAll("div")  
var productcont3= document.querySelector('.newarrivals3')
var innerp5= productcont3.querySelectorAll("div")


search.addEventListener("keyup",function(){
    var enteredvalue= event.target.value.toUpperCase()

    for(count=0;count<innerp1.length;count=count+1)
    {
        var innerp2= innerp1[count].querySelector("h1").textContent

        if(innerp2.toUpperCase().indexOf(enteredvalue)<0)

        {
            innerp1[count].style.display="none"
         
        }
        else{
            innerp1[count].style.display="block"
        }
    }
})


search.addEventListener("keyup",function(){
    var enteredvalue= event.target.value.toUpperCase()
for(count=0;count<innerp3.length;count=count+1)
{
    var innerp4= innerp3[count].querySelector("h1").textContent

    if(innerp4.toUpperCase().indexOf(enteredvalue)<0)

    {
        innerp3[count].style.display="none"
     
    }
    else{
        innerp3[count].style.display="block"
    }
}
})


search.addEventListener("keyup",function(){
    var enteredvalue= event.target.value.toUpperCase()
for(count=0;count<innerp5.length;count=count+1)
{
    var innerp6= innerp5[count].querySelector("h1").textContent

    if(innerp6.toUpperCase().indexOf(enteredvalue)<0)

    {
        innerp5[count].style.display="none"
     
    }
    else{
        innerp5[count].style.display="block"
    }
}
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