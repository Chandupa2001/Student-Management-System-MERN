import batchModel from "../models/batchModel.js";

const addBatch = async (req,res) => {
    const batch = new batchModel({
        batchId: req.body.batchId,
        batchName: req.body.batchName,
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

const viewBatch = async (req, res) => {
    const { batchId } = req.body;
    
    try {
        const batch = await batchModel.find({ batchId });
        
        if (batch.length > 0) {
            res.json({ success: true, data: batch });
        } else {
            res.json({ success: false, message: "No batch found with this ID" });
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error fetching batch data" });
    }
}

const editBatch = async (req,res) => {
    try {
        await batchModel.findOneAndUpdate({batchId: req.body.batchId}, {teacherName: req.body.teacherName, instrument: req.body.instrument, venue: req.body.venue})
        res.json({ success: true, message: "Batch updated"})
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error"});
    }
}

export { addBatch, fetchBatches, viewBatch, editBatch }