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

export { postApiNote }


 