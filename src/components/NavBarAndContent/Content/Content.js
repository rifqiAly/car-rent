import React, { useEffect, useState } from "react";
import "./Content.css";
import ContentCards from "./ContentCards";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "react-lottie";
import notFound from "../../../assets/notFound.json";
import loader from "../../../assets/loading.json";
import master from "../../../helper/master";
import { contactListActions } from "../../../store/contact-slice";

const Content = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.car);
  const [contacts, setContacts] = useState([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const notFoundOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getData = async () => {
    const resp = await master.GetAllContact();
    if (resp.status === 200) {
      dispatch(contactListActions.setData(resp.data));
    }
  };

  useEffect(() => {
    if (data) {
      setContacts(data);
    }
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    dispatch(contactListActions.delContact(id));
    setTimeout(() => {
      getData();
    }, 5000);
  };

  const handleEdit = async (id) => {
    dispatch(contactListActions.setMode({ mode: "Edit", modify: id }));
  };

  return (
    <div className="contact-list">
      {data?.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>
                <p>Image</p>
              </th>
              <th>
                <p>Name</p>
              </th>
              <th>
                <p>Rate</p>
              </th>
              <th>
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <ContentCards
            data={contacts}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </table>
      ) : data?.length === 0 ? (
        <Lottie options={notFoundOptions} height={400} width={400} />
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
    </div>
  );
};

export default Content;
