import client from "@/plugins/axios";

const ENDPOINT = "https://www.taiwanstat.com/waters/latest";

/**
 * 查詢水庫資料
 * @returns 基金列表
 */
const getReservoirData = async () => {
  return (await client
    .request()
    .get(ENDPOINT))
    .data
};

export default {
  getReservoirData,
};
