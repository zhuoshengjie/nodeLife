const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// 图书种类模型
const GenreSchema = new Schema({
    // 字段描述图书种类
    name: {type: String, required: true, min: 3, max: 100},
  }
);

// 虚拟属性'url'：返回图书类型 URL
GenreSchema
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
  });

// 导出 BookInstancec 模型
module.exports = mongoose.model('Genre', GenreSchema);