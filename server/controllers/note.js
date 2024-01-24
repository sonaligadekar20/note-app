import Note from "../models/Note.js";

const postApiNote = async (req, res) =>{
    const {title, description, priority} = req.body;

    const note = new Note({
        title,
        description,
        priority
    });

    try {
        const savedNote = await note.save();

        return res.json({
            success: true,
            message: 'note saved',
            data: savedNote
        })
    }catch (err) {
        return res.json ({
            success: false,
            message: err.message
        });
    }
}

const getApiNote = async (req, res) =>{
     const allNotes = await Note.find();

     return res.json ({
        success: true,
        message: "Successfully featched all the notes.",
        data: allNotes
     })
}

const getApiNoteById = async (req, res) =>{
    const {id} = req.params;

    try {
        const noteById = await Note.findOne({_id :id})
        return res.json ({
           success: true,
           data: noteById,
           message: "Note get successfully."
        })
    }
    catch (err) {
        return res.json ({
            success: false,
            message: 'Note not featch.'
        })
    }
}

const putApiNote = async (req, res) =>{
    const {id} = req.params;

    const {title, description, priority} = req.body;

    await Note.updateOne({ _id : id},
        {
            $set: {
                title: title,
                description: description,
                priority: priority
            }
    });

    const updatedNote = await Note.findById(id);
    return res.json({
        success: true,
        data: updatedNote,
        message: "Note updated successfully."
    });
}

const deleteApiNote = async (req, res) =>{
    const {id} = req.params;

    await Note.deleteOne({ _id : id})
    res.json({
        success: true,
        data: {
            id:id
        }, 
        message: 'Note deleted successfully.'
    })
}

export { postApiNote, getApiNote, getApiNoteById, putApiNote, deleteApiNote}


 