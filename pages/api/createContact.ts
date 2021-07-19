import { NextApiHandler } from "next";
import Airtable from "airtable";
import { contactTable } from "../../libs/airtable";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

const createContact: NextApiHandler = async (req, res) => {
  const contactName = req.body.campaignName;
  const contactEmail = req.body.contactEmail;

  try {
    const airtableRecord = await contactTable.create({
      Name: contactEmail,
      Email: contactEmail,
    });

    res.status(200).json({
      msg: "went through!",
      airtableRecord: airtableRecord,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      err: "Something went wrong with creating the campaign.",
    });
  }
};

export default createContact;
