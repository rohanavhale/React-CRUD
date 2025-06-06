// require the model folder with file student
const Student = require('../model/student');

// code for get all data
let getAllStudents = async (req, res) => {
  const data = await Student.find();
  res.json(data);

};

// code for get particular data
let getOne = async(req,res)=>{
  let id = req.params.id
  const data = await Student.find({_id:id})
  res.json(data)
}

// code for save data
let createStudent = async (req, res) => {

  let body = req.body
  let data = await Student.insertOne(body)
  res.json("data save");

};

// code for delete
let deleteStudent = async (req, res) => {
  let id = req.params.id
  let data = await Student.deleteOne({ _id: id });
  res.json("data deleted");

};

// code for update
const updateStudent = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    let data = await Student.updateOne({ _id: id }, { $set: body });
    res.json("data updated");
  
};



module.exports = {
  getAllStudents,
  getOne,
  createStudent,
  deleteStudent,
  updateStudent
}