var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var maxSalarie = 0;
var ownerMaxSal = "нет сотрудников";
for (var name in salaries ) {
  if ( salaries[name] > maxSalarie) {
      maxSalarie = salaries[name];
      ownerMaxSal = name;
  }
}
alert (ownerMaxSal);