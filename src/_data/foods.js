// const fetch = require('node-fetch');
const Vika = require('@vikadata/vika').default;
const vikaTable = new Vika({ token: "uskcdOCBivvgrEkYx1KytSI", fieldKey: "name" });
// 通过 datasheetId 来指定要从哪张维格表操作数据。
const datasheet = vikaTable.datasheet("dstF9o0rvbQG9iput3");

async function getAllRecords() {
  const response = await datasheet.records.query({ viewId: "viwVZzY0mmH9M"})
  return response.data.records
}

module.exports = getAllRecords
