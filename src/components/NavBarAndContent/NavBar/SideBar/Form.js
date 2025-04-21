import React, { useEffect, useState } from "react";
import "./Form.css";
import Lottie from "react-lottie";
import animationData from "../../../../assets/car.json";
import Button from "../../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { contactListActions } from "../../../../store/contact-slice";
import master from "../../../../helper/master";
const Form = () => {
  const dispatch = useDispatch();
  const { mode, modify } = useSelector((state) => state.car);

  const [userData, setUserData] = useState({
    name: "",
    image: "",
    day_rate: "",
    month_rate: "",
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getData = async () => {
    const resp = await master.GetAllContact();
    if (resp.status === 200) {
      console.log(resp.data);
      dispatch(contactListActions.setData(resp.data));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "Add") {
      dispatch(contactListActions.addContact(userData));
      setTimeout(() => {
        getData();
      }, 5000);
    } else if (mode === "Edit") {
      dispatch(contactListActions.editContact(userData));
      setTimeout(() => {
        getData();
      }, 5000);
    }

    setUserData({
      name: "",
      image: "",
      day_rate: "",
      month_rate: "",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (mode === "Edit") {
      const getSingleContact = async (id) => {
        const resp = await master.GetContactId(id);
        if (resp.status === 200) {
          let toPopulate = resp.data;
          setUserData({
            name: toPopulate.name,
            day_rate: toPopulate.day_rate,
            month_rate: toPopulate.month_rate,
            image: toPopulate.image,
          });
        }
      };
      getSingleContact(modify);
    }
  }, [modify, mode]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="add-new-img">
        <Lottie options={defaultOptions} height={140} width={140} />
      </div>
      <div className="input-text">
        <input
          type="text"
          placeholder="Car Name"
          name="name"
          value={userData.name}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Day Rate"
          name="day_rate"
          value={userData.day_rate}
          onChange={handleInput}
        />
      </div>
      <div className="input-text">
        <input
          type="text"
          placeholder="Month Rate"
          name="month_rate"
          value={userData.month_rate}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={userData.image}
          onChange={handleInput}
        />
      </div>
      <Button name="Save" />
    </form>
  );
};

export default Form;
