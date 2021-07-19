const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIR_API_KEY }).base(
  process.env.BASE_ID
);

const joinTable = base(process.env.JOIN_TABLE_NAME);
const requestTable = base(process.env.REQUEST_TABLE_NAME);
const contactTable = base(process.env.CONTACT_TABLE_NAME);

const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

export {
  joinTable,
  requestTable,
  contactTable,
  getMinifiedRecord,
  minifyRecords,
};
