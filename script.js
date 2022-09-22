const multiStepForm = document.querySelector("[data-multi-step]");
const steps = [...multiStepForm.querySelectorAll("[data-step]")];
let currentStep = steps.findIndex(step=>{return step.classList.contains("active")});
console.log(currentStep);
if(currentStep<0) {
	currentStep=0;
	steps[currentStep].classList.add("active");	
	showCurrentStep();
}

multiStepForm.addEventListener("click",e=>{
	let chg;
	if(e.target.matches("[data-next]")){
		chg=1;
	}else if(e.target.matches("[data-previous]")){
		chg=-1;
	}
	else if (chg==null)
		return
	const inputs = [...steps[currentStep].querySelectorAll("input")];
	const allValid = inputs.every(input=>input.reportValidity());
	if(allValid){
		currentStep+=chg;
		showCurrentStep();
	}
});

function showCurrentStep() {
	steps.forEach((step,index)=>{
		step.classList.toggle("active",index===currentStep)
	});
}