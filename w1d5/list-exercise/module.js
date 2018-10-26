
module.exports = {
  list: [],
  ourFunction : function (number) {
    this.list.push(number)
    return this.list;
  },
  sortNum: function () {
    return this.list.sort((a, b) => a - b);
  }
}