import { useState, useEffect } from "react";
import Image from "next/image";

function Home() {
  const [secOne, setSecOne] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("/api/homepage/secOne");
    const data = await response.json();
    setIsLoading(false);
    setSecOne(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Home</div>
      <div className='btn-simple'>SELAM BROO</div>
      <div>Home</div>
      {secOne.map((item) => (
        <>
          <p key={item.id}>{item.text}</p>
          <Image
            alt={item.text}
            width={50}
            height={50}
            src={`/assets/${item.image}`}
          />
        </>
      ))}
    </>
  );
}

export default Home;
