import { NextApiHandler } from "next";
import { requestTable } from "../../libs/airtable";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

const createRequest: NextApiHandler = async (req, res) => {
  const contactName = req.body.contactName;
  const contactEmail = req.body.contactEmail;

  try {
    const airtableRecord = await requestTable.create({
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
      err: "Something went wrong with creating the request.",
    });
  }
};

export default createRequest;
