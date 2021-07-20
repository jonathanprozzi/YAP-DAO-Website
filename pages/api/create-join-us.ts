import { NextApiHandler } from "next";
import { joinTable } from "../../libs/airtable";

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

  try {
    const airtableRecord = await joinTable.create({
      Name: contactName,
      Email: contactEmail,
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
