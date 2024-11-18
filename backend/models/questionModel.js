const mongoose = require('mongoose')
const Exam = require("./examModel")

const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    correctOption: {
        type: String,
        required: true
    },
    options: {
        type: Object,
        required: true
    },
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exams",
        required: true
    },
},{
    timestamps: true
})


questionSchema.post("findOneAndDelete", async function (doc, next) {
  await Exam.updateOne(
    { _id: doc.exam },
    {
      $pull: { questions: doc._id },
    }
  );
  next();
});


const questionModel = mongoose.model("questions",questionSchema)
module.exports = questionModel;