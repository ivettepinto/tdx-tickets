
import data from "./CompleteExample.json";

const getService = (id) => {
  const foundItem = data.find((item) => item.id === id);
  console.log(foundItem);
  return foundItem;
}

export default getService