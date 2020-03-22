import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';

const Dashboard = () => {
  const [data, setData] = useState("");
  const items = data || [];

  const fetchData = async () => {
    try {
      const cookies = new Cookies();
      const authToken = cookies.get("auth-token");

      const response =  await fetch("http://localhost:5000/api/dashboard", { 
          method: "GET",
          headers: { "authorization": authToken }
      });
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(()=> {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      {
        items.map((item, key)=>{
          return <p key={key}>{item.user}</p>
        })
      }
    </div>
  )

};

export default Dashboard;
