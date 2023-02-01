import { Redirect, useHistory } from "react-router-dom";
function Stocks() {
  const history = useHistory();
  console.log(history);

  const loggedIn = true;
  if (loggedIn === false) return <Redirect to="/not-logged-in" />;
  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/movies");
  };
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
