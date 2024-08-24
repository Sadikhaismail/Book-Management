const Booksmodel = require('../Models/BooksModel')


module.exports.Add = async (req, res) => {
    const addBooks = new Booksmodel(req.body)
    await addBooks.save()
}
module.exports.BookwithID = async (req, res) => {
    const SpecificBook = await Booksmodel.find({ id: req.params.BookId });

    if (SpecificBook) {
        res.send({ speciBook: SpecificBook })
    }
};
module.exports.UpdateBookbyID = async (req, res) => {
    const BookwithID = await Booksmodel.findOneAndUpdate({ id: req.params.id }, { $set: { author: req.body.author } }, { new: true })
   
    
    res.status(200).json({ message: 'updated', BookwithID })

}

module.exports.getAllBook = async (req,res)=>{
    const allBooks = await Booksmodel.find()
    res.status(200).json({message:'updatedall',allBooks})
}

module.exports.deleteBooks = async (req,res)=>{
    const deleteBook = await Booksmodel.findOneAndDelete({id: req.params.id}, {new:true})
    res.status(200).json({message:'deleted',deleteBook})
}