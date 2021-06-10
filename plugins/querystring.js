import qs from "qs";

const serialize = query => {
  let queryString = [];
  if (!!Object.keys(query).filter(key => key.length > 0)) {
    queryString.push(qs.stringify(query, { indices: false }));
  }
  return queryString.join("&");
};

export default {
  serialize
};
