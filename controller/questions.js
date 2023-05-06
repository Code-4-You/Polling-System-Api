const Question = require('../models/questions')
const Option = require('../models/options')

//  Question created
module.exports.create = async function (req, res) {
    console.log(req.url);
    console.log(req.body);
    await Question.create(req.body, function (err, ques) {
        if (err) { console.log("error in creating the question schema", err); }
        console.log(ques);
        res.send(ques);
    })

}

// question details is shown
module.exports.showDetails = async function (req, res) {
    console.log(req.params.id)
    const ques = await Question.findById(req.params.id).populate('options')
    if (ques) {
        res.send(ques);
    }
    else {
        res.send("id does not exits");
    }
}

// deleting the question
module.exports.deleteQues = async (req, res) => {
    // trying to delete a question
    try {
      // finding a question by its id
      const question = await Question.findById(req.params.id);

      // if that question is not present send a json file with status code 404 (not found)
      if (!question) {
        return res.status(404).json({
          success: false,
          message: `This question is already deleted or does not exist`,
        });
      }

      // then deleting that question
      await Question.deleteOne({ _id: req.params.id });

      // and sending a success message as json file
      res.status(200).json({
        success: true,
        message: "A Question with related options are deleted successfully",
      });

      // if any error
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `Error in deleting a question`,
        error,
      });
    }
  }
