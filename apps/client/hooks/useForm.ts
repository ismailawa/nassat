import { useState } from 'react';

const useForm = (onSubmit) => {
  const [formState, setForm] = useState<any>({});
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  const handleChange = (e) => {
    e.persist();
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return [formState, handleChange, handleSubmit];
};

export default useForm;
