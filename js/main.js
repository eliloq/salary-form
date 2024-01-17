let name = document.querySelector("input#name");
let hours = document.querySelector("input#hours");
let tax = document.querySelector("input#tax");
let degree = document.querySelector("select#degree");
let btnSend = document.querySelector("button#btnSend");
let btnReset = document.querySelector("button#btnReset");

let nameOutput = document.querySelector("div.output>p:nth-of-type(1)>span");
let degreeOutput = document.querySelector("p:nth-of-type(2)>span");
let salaryOutput = document.querySelector("p:nth-of-type(3)>span");

let pure;
let taxsalary;
let salary;

btnSend.addEventListener("click", function () {
  if (name.value != "" && hours.value != "" && tax.value != "") {
    nameOutput.innerText = name.value;
    degreeOutput.innerText = degree.value;

    switch (degree.value) {
      case "Associate":
        pure = hours.value * 50000;
        taxsalary = pure * (tax.value / 100);
        salary = pure - taxsalary;
        salaryOutput.innerText = salary;
        break;

      case "Bachelor":
        pure = hours.value * 150000;
        taxsalary = pure * (tax.value / 100);
        salary = pure - taxsalary;
        salaryOutput.innerText = salary;
        break;

      case "Master":
        pure = hours.value * 200000;
        taxsalary = pure * (tax.value / 100);
        salary = pure - taxsalary;
        salaryOutput.innerText = salary;
        break;

      case "Doctorate":
        pure = hours.value * 250000;
        taxsalary = pure * (tax.value / 100);
        salary = pure - taxsalary;
        salaryOutput.innerText = salary;
        break;

      case "Professional":
        pure = hours.value * 300000;
        taxsalary = pure * (tax.value / 100);
        salary = pure - taxsalary;
        salaryOutput.innerText = salary;
        break;
    }
  } else {
    alert("Please fill in the fields");
  }
});

btnReset.addEventListener("click", function () {
  degree.value = "Associate";
  nameOutput.innerText = "";
  degreeOutput.innerText = "";
  salaryOutput.innerText = "";
  name.value = "";
  hours.value = "";
  tax.value = "";
  email.value = "";

});
