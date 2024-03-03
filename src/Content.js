import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";

const tabs = ["posts", "comments"];
function Content(params) {
  
  const [avatar, setImage] = useState('')
  useEffect(() =>{
    return () => {
      avatar && URL.revokeObjectURL(avatar)
    }
  }, [avatar])

  const handlePreviewImage = (e) =>{
    const file = e.target.files[0]
    const urlImage = URL.createObjectURL(file)
    console.log("urlImage")
    setImage(urlImage)
  }
  return (
    <div>
        <input type={"file"} onChange={handlePreviewImage} ></input>
        {avatar && <img src={avatar}></img>}
    </div>
  );
}

export default Content;
