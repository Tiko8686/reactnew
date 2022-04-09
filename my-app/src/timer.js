import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

export const First = () => {
  const [arr, setArr] = useState([]);
  const [arr1, setArr1] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        birthDay: "2003-02-20",
        firstName: "Tigran",
        lastName: "Aghajanyan",
        gender: "male",
      }),
    };
    fetch("http://intern-2022.arpify.com/init", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        response.shift();
        setArr(response);
        setArr1([...Object.keys(response[0])]);
      });
  }, []);
  return (
    <div>
      <Link to="/2nd">
        <button className="btn">next</button>
      </Link>
      <table>
        <tr>
          {arr1.map((key) => {
            return <th>{key}</th>;
          })}
        </tr>

        {arr.map((obj, index) => (
          <tr key={index}>
            {Object.values(obj).map((val, index) =>
              Object.values(obj)[0] === "Tigran" &&
              Object.values(obj)[1] === "Aghajanyan" &&
              Object.values(obj)[2] === "2003-02-20" &&
              Object.values(obj)[3] === "male" ? (
                <td key={index} style={{ backgroundColor: "green" }}>
                  {val}
                </td>
              ) : (
                <td key={index}>{val}</td>
              )
            )}
          </tr>
        ))}
      </table>
    </div>
  );
};
