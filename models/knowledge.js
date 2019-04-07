var orm = require("../config/orm.js");

var knowledge = {
    selectAll: function(cb) {
        orm.selectAll("knowledge", function(res) {
            cb(res);
        });
    },

    insertOne: function(col, val, cb) {
        orm.insertOne("knowledge", col, val, function (res) {
            cb(res);
        });
    },

    updateOne: function(objColVal, condition, cb) {
        orm.updateOne("knowledge", objColVal, condition, function(res) {
            cb(res);
        });
    }
};


module.exports = knowledge;