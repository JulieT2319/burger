const orm = require("../config/orm");

const burger = {
  all: function () {
    orm.selectAll(burgers);
  },
  add: function (value) {
    orm.insertOne("burgers", "burger_name", value);
  },
  update: function (conditionVal) {
    //table, column, value, conditionCol, conditionVal
    orm.updateOne("burgers", "devoured", true, "id", conditionVal);
  }
};

module.exports = burger;