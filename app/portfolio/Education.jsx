"use client"; //the user needs to be able to modify the contents of the component (interactivity)
import "./Education.css";
import line from "../assets/images/line-nobg.png";
import star from "../assets/images/star-white-nobg.png";
import { getEducations } from "./api/portfolio";
import { useEffect, useState } from "react";


export default function Education() {
  const [educationList, setEducationList] = useState(Array(0))

  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  getEducationsData()
    return () => { ignore = true; }
    },[]);

  const getEducationsData = async () => {
    const res = await getEducations();
    if (res?.data.error) {
      alert(res?.data.error);
      return;
    }
    //immutability
    const eduCopy = [];
    res?.data.forEach(e => eduCopy.push(e))
    setEducationList(eduCopy)

    console.log("Datos educacion: " + res?.data);
    console.log("Edu list: " + educationList);
  };


  return (
    <div className="education">
      <h2 className="section-title">EDUCACIÓN</h2>
      <div className="page-divider">
        <img id="line" src={line.src} /> <img id="star" src={star.src} />{" "}
        <img id="line" src={line.src} />
      </div>

      <div className="eduList">
        {
          educationList.map((edu) => (
            <div key={edu?.id} className="eduItem">
              <h4>{edu.name}</h4>
            </div>
          ))
        }
      </div>
    </div>
  );
}
