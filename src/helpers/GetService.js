
import data from "./helperForm.json";

const getService = (id) => {
  const foundItem = data.find((item) => item.id === id);
  
  return foundItem;
}

export default getService