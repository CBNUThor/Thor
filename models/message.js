/**
 * Created by Sehyeon on 2017-08-10.
 */
var mongoose = require('mongoose'),
    moment = require('moment'),
    autoIncrement = require('mongoose-auto-increment');

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    conver_id:{type:String,required: true},
    from:{type:String,required: true},
    to:{type:String,required: true},
    content:{type:String, required:true},
    checked:Boolean,
    time_created:{type:Date}
    // time_created:{type:Date, default:moment().format()}
});
module.exports = mongoose.model('message', MessageSchema);