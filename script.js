'use strict'

document.addEventListener("DOMContentLoaded", function () {
  const steps = [
      document.getElementById("step1"),
      document.getElementById("step2"),
      document.getElementById("step3"),
      document.getElementById("step4")
  ];


  const indicators = [
    document.getElementById("step1Indicator"),
    document.getElementById("step2Indicator"),
    document.getElementById("step3Indicator"),
    document.getElementById("step4Indicator")
  ];
  let currentStep = 0;
// let currentStep = 2

  function showStep(stepIndex) {
      steps.forEach((step, index) => {
          if (index === stepIndex) {
              step.style.display = "block";
              indicators[index].querySelector('.side_list_numcontainer').classList.add('cyan_background')
              
          } else {
              step.style.display = "none";
              indicators[index].querySelector('.side_list_numcontainer').classList.remove('cyan_background')
          }
      });
  }

  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");

  nextButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
      }
  });

  prevButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (currentStep > 0) {
          currentStep--;
          showStep(currentStep);
      }
  });

  // Show the first step initially
  showStep(currentStep);



  //2nd step form toggling between yearly and monthly

  //Function to update pricing and styling in the second form based on the toggle  state in the second form
  function updatePricingAndStyling(toggleInput, yearlyPrices, monthlyPrices) {
    const pricingElements = {
        arcade: document.getElementById("arcadePrice"),
        advanced: document.getElementById("advancedPrice"),
        pro: document.getElementById("proPrice")
    };

    const yearlyText = document.querySelector('.yearly_text');
    const monthlyText = document.querySelector('.monthly_text');

    // Determine the pricing object to use based on the toggle state
    const prices = toggleInput.checked ? yearlyPrices : monthlyPrices;

    for (const plan in prices) {
        pricingElements[plan].textContent = prices[plan];
  }
    // Update the text styling
    if (toggleInput.checked) {
    yearlyText.classList.add("drimes_deep_blue");
    monthlyText.classList.remove("drimes_deep_blue");
  } else {
    monthlyText.classList.add("drimes_deep_blue");
    yearlyText.classList.remove("drimes_deep_blue");
  }
}


const toggleInput = document.getElementById("toggleInput")

const yearlyPrices = {
    arcade: "$90/yr",
    advanced: "$120/yr",
    pro: "$150/yr",
  };
  const monthlyPrices = {
    arcade: "$9/mo",
    advanced: "$12/mo",
    pro: "$15/mo",
  };
  
  toggleInput.addEventListener("change", () => {
    updatePricingAndStyling(toggleInput, yearlyPrices, monthlyPrices);
  
  });
  
  // Initial update based on the default toggle state
  updatePricingAndStyling(toggleInput, yearlyPrices, monthlyPrices);




  //3rd form
  //Function to update pricing in the third form based on the toggle  state in the second form
  function updatePricingInThirdForm(toggleInput) {
    const pricingElements = {
        first: document.getElementById("firstAddOnPrice"),
        second: document.getElementById("secondAddOnPrice"),
        third: document.getElementById("thirdAddOnPrice")
    };

    
    if (toggleInput.checked) {
    pricingElements["first"].textContent = "$10/yr"
    pricingElements["second"].textContent = "$20/yr"
    pricingElements["third"].textContent = "$30/yr"
  } else {
    pricingElements["first"].textContent = "$1/mo"
    pricingElements["second"].textContent = "$2/mo"
    pricingElements["third"].textContent = "$3/mo"
  }
}

toggleInput.addEventListener("change", () => {
  updatePricingInThirdForm(toggleInput)
});

updatePricingInThirdForm(toggleInput)




// 4th form
// makkin the 4th step functional and based on what users chose before
function updateSelectedPlanAndPrice(selectedPlan, isYearly) {
  const selectedPlanText = document.getElementById("selectedPlanText")
  const selectedPlanPrice = document.getElementById("selectedPlanPrice")

  const planOptions = {
    arcade: "Arcade",
    advanced: "Advanced",
    pro: "Pro"

  }

  
 

   
   const userSelectedPlan = planOptions[selectedPlan];
   const frequency = isYearly ? "Yearly" : "Monthly";
  
   
   selectedPlanText.textContent = `${userSelectedPlan} (${frequency})`;
 
   const prices = toggleInput.checked ? yearlyPrices : monthlyPrices;
   const userSelectedPrice = prices[selectedPlan];
   selectedPlanPrice.textContent = userSelectedPrice;
}

const arcadePlan = document.querySelector('.arcade-plan'); 
arcadePlan.addEventListener('click', function () {
  // User selected Arcade plan
  let selectedPlan = 'arcade';
  updateSelectedPlanAndPrice(selectedPlan, toggleInput.checked); 
});

const advancedPlan = document.querySelector('.advanced-plan'); 
advancedPlan.addEventListener('click', function () {
  // User selected Arcade plan
  let selectedPlan = 'advanced';
  updateSelectedPlanAndPrice(selectedPlan, toggleInput.checked); 
});

const proPlan = document.querySelector('.pro-plan'); 
proPlan.addEventListener('click', function () {
  // User selected Arcade plan
  let selectedPlan = 'pro';
  updateSelectedPlanAndPrice(selectedPlan, toggleInput.checked);
});


//updating the add ons
function updateAddOns(selectedService) {
  const serviceText = document.querySelector('.text-gray-500');
  const servicePrice = document.querySelector('.text-drimes_deep_blue.font-semibold');

  const serviceOptions = {
    online: {
      text: "Online service",
      price: "+$1/mo",
    },
    cloud: {
      text: "Larger Storage",
      price: "+$5/mo",
    },
    profile: {
      text: "Custom Profile",
      price: "+$10/mo",
    },
  };

    // Get the user's selected service information
    const selectedServiceInfo = serviceOptions[selectedService];

    // Update the text and price accordingly
    serviceText.textContent = selectedServiceInfo.text;
    servicePrice.textContent = selectedServiceInfo.price;
    
}


const onlineService = document.getElementById('onlineService'); 
const cloudService = document.getElementById('cloudService'); 
const profileService = document.getElementById('profileService'); 


onlineService.addEventListener('click', function () {
  updateServiceInfo('online');
});

cloudService.addEventListener('click', function () {
  updateServiceInfo('cloud');
});

profileService.addEventListener('click', function () {
  updateServiceInfo('profile');
});

  //applying the border outline to the div, you can  only select oonce
  const onceClickableDivs = document.querySelectorAll(".border-outline-once")
  
  onceClickableDivs.forEach((div) => {
    div.addEventListener("click", function () {
        // Remove the "activeDiv" class from all divs
        onceClickableDivs.forEach((div) => {
            div.classList.remove("outlined");
        });

        // Add the "activeDiv" class to the currently clicked div
        this.classList.add("outlined");
    });




});

const toggleInput2 = document.querySelectorAll(".toggleInput2")

//applying the border outline to the div, you can select multiple
const clickableDivs = document.querySelectorAll(".border-outline-all")
  
clickableDivs.forEach((div, index) => {
  div.addEventListener("click", function () {
     const checkbox = toggleInput2[index]

       // Checking/unchecking the checkbox
    checkbox.checked = !checkbox.checked;

      // Add the "activeDiv" class to the currently clicked div
      this.classList.toggle("outlined");
      
  });

  });

  


});


