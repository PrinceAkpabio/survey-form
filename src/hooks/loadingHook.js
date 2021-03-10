import React from 'react';

export const useLoadingHook =(form)=>{
 const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData(form);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [form]);

  return {data, loading}
}

export default useLoadingHook;