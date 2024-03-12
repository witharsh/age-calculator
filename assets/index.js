var dateStyle = document.getElementById("date");
var monthStyle = document.getElementById("month");
var yearStyle = document.getElementById("year");

var lableDate = document.getElementsByClassName("lable")[0];
var lableMonth = document.getElementsByClassName("lable")[1];
var lableYear = document.getElementsByClassName("lable")[2];

var d = new Date();

function calculate(date, month, year) {

  if (date == "") {
    lableDate.style.color = "var(--Light-red)";
    dateStyle.style.borderColor = "var(--Light-red)";
    document.getElementById("error1").innerHTML = "This field is required";
  } 
  
  if (month == "") {
    lableMonth.style.color = "var(--Light-red)";
    monthStyle.style.borderColor = "var(--Light-red)";
    document.getElementById("error2").innerHTML = "This field is required";
  }  
  
  if (year == "") {
    lableYear.style.color = "var(--Light-red)";
    yearStyle.style.borderColor = "var(--Light-red)";
    document.getElementById("error3").innerHTML = "This field is required";
  }

  if (month<13 & month>0){
    lableMonth.style.color = "var(--Smokey-grey)";
    monthStyle.style.borderColor = "var(--Light-grey)";
    document.getElementById("error2").innerHTML = "";

    
  }

   if (date < 0 || date > 31) {
    lableDate.style.color = "var(--Light-red)";
    dateStyle.style.borderColor = "var(--Light-red)";
    document.getElementById("error1").innerHTML = "Must be a valid date";
  }  
  
  if (month < 0 || month > 12) {
    lableMonth.style.color = "var(--Light-red)";
    monthStyle.style.borderColor = "var(--Light-red)";
    document.getElementById("error2").innerHTML = "Must be a valid month";
  }  
  
if (year < 0 || year > 2024) {
    lableYear.style.color = "var(--Light-red)";
    yearStyle.style.borderColor = "var(--Light-red)";
    document.getElementById("error3").innerHTML = "Must be a valid year";
  } 
  
  else {

    if (date<32 & date>0){
      lableDate.style.color = "var(--Smokey-grey)";
      dateStyle.style.borderColor ="var(--Light-grey)";
      document.getElementById("error1").innerHTML = "";
    }
  
    if (month<13 & month>0){
      lableMonth.style.color = "var(--Smokey-grey)";
      monthStyle.style.borderColor = "var(--Light-grey)";
      document.getElementById("error2").innerHTML = "";
    }

    if (year<=2024 & year>0){
      lableYear.style.color = "var(--Smokey-grey)";
      yearStyle.style.borderColor = "var(--Light-grey)";
      document.getElementById("error3").innerHTML = "";
    }
   if(date<32 & date>0 & month<13 & month>0 & year<=2024 & year>0){
    var birth_date = date;
    var birth_month = month;
    var birth_year = year;

    var current_date = d.getDate();
    var current_month = d.getMonth() + 1;
    var current_year = d.getFullYear();
    // days of every month
    month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // if birth date is greater than current date
    // then do not count this month and add 30
    // to the date so as to subtract the date and
    // get the remaining days
    if (birth_date > current_date) {
      current_date = current_date + month[birth_month - 1];
      current_month = current_month - 1;
    }

    
    // if birth month exceeds current month, then do
    // not count this year and add 12 to the month so
    // that we can subtract and find out the difference
    if (birth_month > current_month) {
      current_year = current_year - 1;
      current_month = current_month + 12;
    }

    // calculate date, month, year
    var calculated_date = current_date - birth_date;
    var calculated_month = current_month - birth_month;
    var calculated_year = current_year - birth_year;

    // print the present age
    document.getElementById("result-day").innerHTML = calculated_date;
    document.getElementById("result-month").innerHTML = calculated_month;
    document.getElementById("result-year").innerHTML = calculated_year;
    lableDate.style.color = "var(--Smokey-grey)";
    dateStyle.style.borderColor ="var(--Light-grey)";
    document.getElementById("error1").innerHTML = "";
    
    lableMonth.style.color = "var(--Smokey-grey)";
    monthStyle.style.borderColor = "var(--Light-grey)";
    document.getElementById("error2").innerHTML = "";
    
    lableYear.style.color = "var(--Smokey-grey)";
    yearStyle.style.borderColor = "var(--Light-grey)";
    document.getElementById("error3").innerHTML = "";
   }
  }
}
