// var exports = module.exports = {};
// exports.sayHelloInEnglish = function() {
//   return "HELLO";
// };
//
// exports.sayHelloInSpanish = function() {
//   return "Hola";
// };
define(function() {
  console.log("Function : getGreetingsInEnglish");

  return {
    getGreetingsInEnglish: function() {
      var hello = "hello!!";
      return hello;
    },
    getGreetingsInSpanish: function() {
      var hello = "hola!!";
      return hello;
    }
  }
});
