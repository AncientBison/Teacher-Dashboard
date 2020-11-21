fraction = "3/4"
scores = ["8/14", "13/14", "10/14"]

function toLetterGrade(grade_percentile) {
  if (grade_percentile >= 90) {
    return "A"
  } else if (grade_percentile >= 80) {
    return "B"
  } else if (grade_percentile >= 70) {
    return "C"
  } else if (grade_percentile >= 60) {
    return "D"
  } else {
    return "F"
  }
}

function nextScoreView(object) {
  n = object.getAttribute("number");
  type = object.getAttribute("section");
  console.log(type)
  console.log(n)
  fraction = scores[n]
  if (type == "0") {
    object.innerHTML = fraction;
    object.setAttribute("section", "1")
  } 
  else if (type == 1) {
    object.innerHTML = parseInt(eval(fraction) * 100) + "%";
    object.setAttribute("section", "2")
  } else if (type = 2) {
    grade_percent = parseInt(eval(fraction) * 100);
    object.innerHTML = toLetterGrade(grade_percent)
    object.setAttribute("section", "0")
  }
};