import batchModel from "../models/batchModel.js";

const addBatch = async (req,res) => {
    const batch = new batchModel({
        batchId: req.body.batchId,
        teacherName: req.body.teacherName,
        instrument: req.body.instrument,
        venue: req.body.venue
    });

    try {
        batch.save();
        res.json({success: true, message: "Batch Added."})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: "Error"})
    }
}

const fetchBatches = async (req,res) => {
    try {
        const batches = await batchModel.find({});
        res.json({success: true, data: batches})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: "Errorr"})
    }
}

export { addBatch, fetchBatches }