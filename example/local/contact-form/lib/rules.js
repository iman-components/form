var methods = require('validation-methods');
var customMethods = require('custom-validation');

module.exports = {
  "firstName": {
    "Please enter your name": methods.required
  },
  "ageGroup": {
    "Please select your age group": methods.required
  },
  "gender":{
    "Please select your gender": function(val, data) {
      if(!val) {
        return false;
      }
      return val;
    },
    "Please enter your gender": function(val, data) {
      if(data.gender === "other" && !data.otherGender){
        return false;
      }
      return true;
    }
  },
  "T&C": {
    "You must confirm that you have read the terms and conditions": function(val, data) {
      if(!val) {
        return false;
      }
      return val;
    }
  }
};