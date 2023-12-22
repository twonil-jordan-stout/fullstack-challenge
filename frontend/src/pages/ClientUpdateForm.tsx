import React, { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

const UPDATE_CLIENTS = gql`
  mutation UpdateClient($updateClientData: NewClientInput!) {
    updateClient(updateClientData: $updateClientData) {
      id
      name
      product
      description
    }
  }
`;
const GET_CLIENT = gql`
  query Client($id: String!) {
    client(id: $id) {
      id
      name
      product
      description
    }
  }
`;

const ClientUpdateForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormValue] = useState({
    id: "",
    name: "",
    product: "",
    description: "",
  });

  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: useParams().id },
  });
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //   setFormValue({
  //     id: data.client.id,
  //     name: data.client.name,
  //     product: data.client.product,
  //     description: data.client.description,
  //   });

  const [updateClient] = useMutation(UPDATE_CLIENTS);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValue((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { id, name, product, description } = formData;
    try {
      await updateClient({
        variables: {
          updateClientData: { id: useParams().id, name, product, description },
        },
      });
      navigate(`/`);
    } catch (error) {
      console.log(error);
      alert("SomeThing happend wrong");
    }
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Client Id
          </label>
          <input
            type="text"
            id="id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Client Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Product
          </label>
          <input
            type="text"
            id="product"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={formData.product}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Discription
          </label>
          <input
            type="text"
            id="description"
            value={formData.description}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default ClientUpdateForm;
