import { useState, useEffect } from "react";

const Social = () => {
  const [hepsi, setHepsi] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("/api/social");
    const data = await response.json();
    setIsLoading(false);
    setHepsi(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>-comment-</div>
      {hepsi.comments.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
      <div>-likes-</div>
      {hepsi.likes.map((item) => (
        <p key={item.id}>{item.total}</p>
      ))}
      <div>-selam-</div>
      {hepsi.selam}
    </>
  );
};

export default Social;
