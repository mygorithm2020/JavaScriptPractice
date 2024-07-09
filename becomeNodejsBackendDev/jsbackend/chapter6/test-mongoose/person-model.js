var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  age: Number,
  email: { type: String, required: true },
});

// 이유를 모르겠는데 여기 있는 모델 이름으로 생성되는게 아니네... 소문자로 바뀌거나 뭔가 아에 변경되거나 그러네
module.exports = mongoose.model('Person', personSchema);
