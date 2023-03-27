import React,{useState} from "react";


const ImageField = (props) => {
  const [imageUrl, setImageUrl] = useState((props.state.imageurl)?props.state["imageurl"]:"");
  const handleChangeInput = (event) => {
    setImageUrl(event.target.value);
    props.setState((prevState)=>{
      return {
        ...prevState,
        imageUrl: imageUrl
      }
    });
  }
  
  return (
    <>
      <label className={props.label}>
                "Image URL":
                <input
                    type="text"
                    id="imageurl"
                    name="imageurl"
                    value={imageUrl}
                    onChange={handleChangeInput}
                />
            </label>
      
    </>
  );
};

export default ImageField;
