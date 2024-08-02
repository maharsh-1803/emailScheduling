const Email = require("../model/email.model");
const scheduleEmail = require("./node-cron");

const scheduleMail = async (req, res) => {
  
    const emailData = req.body;
  
    try {
      const newEmail = new Email(emailData);
      await newEmail.save();
      scheduleEmail(emailData);
      return res.status(200).send('Email scheduled successfully');
    } catch (error) {
      return res.status(500).send('Error scheduling email');
    }
  };

const getAllMailByUser = async(req,res)=>{
    try {
        const tokendata = req.user;
        const id = tokendata._id;
        const mails = await Email.find({userId:id});
        if(!mails){
            return res.status(404).send({message:"mail not found"})
        }
        return res.status(200).json({
            success:true,
            message:"All mail retrived by particular user",
            mails:mails
        })
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getMailDetailById = async(req,res)=>{
    try {
        const {id}  = req.params;
        const mail = await Email.findById(id);
        if(!mail){
            return res.status(404).send({message:"mail not found"})
        }
        return res.status(200).json({
            success:true,
            message:"mail details retived successfully",
            mail:mail
        })
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deleteScheduleMail = async(req,res)=>{
    try {
        const {id} = req.params;
        const mail = await Email.findByIdAndDelete(id)
        if(!mail){
            return res.status(404).send({message:"mail not found"});
        }
        return res.status(200).send({message:"mail deleted successfully"})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports={
    scheduleMail,
    getAllMailByUser,
    getMailDetailById,
    deleteScheduleMail
}