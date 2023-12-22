import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useParams } from 'react-router-dom'; // Assuming React Router is used
import Collapsible from '../components/Collapsible';
import { getClient, updateClient } from '../services/api';

interface Client {
  // ... define client data fields
}

const ClientDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(['client', id], getClient);
  const updateClientMutation = useMutation(updateClient);

  const [clientData, setClientData] = useState<Client>({} as Client);

  useEffect(() => {
    if (!isLoading && !error) {
      setClientData(data);
    }
  }, [isLoading, error, data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateClientMutation.mutate({ id, data: clientData });
      // Handle successful update, e.g., display success message or redirect
    } catch (error) {
      // Handle error appropriately, e.g., display error message
    }
  };

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  return (
    <Collapsible
      header="Client Details"
      description="View and edit client information."
    >
      {isLoading && <div>Loading client details...</div>}
      {error && <div>Error fetching client: {error.message}</div>}
      {!isLoading && !error && (
        <form onSubmit={handleSubmit}>
          {/* ... form fields with clientData values */}
          <button type="submit" disabled={updateClientMutation.isLoading}>
            Update Client
          </button>
        </form>
      )}
    </Collapsible>
  );
};

export default ClientDetails;