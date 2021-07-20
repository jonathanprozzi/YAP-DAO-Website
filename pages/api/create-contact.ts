import { NextApiHandler } from "next";
import { contactTable } from "../../libs/airtable";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

const createJoinUs: NextApiHandler = async (req, res) => {
  const contactName = req.body.contactName;
  const contactEmail = req.body.contactEmail;
  const contactMessage = req.body.contactMessage;

  try {
    const airtableRecord = await contactTable.create({
      Name: contactName,
      Email: contactEmail,
      Message: contactMessage,
    });

    res.status(200).json({
      msg: "went through!",
      airtableRecord: airtableRecord,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      err: "Something went wrong with your submission.",
    });
  }
};

export default createJoinUs;
