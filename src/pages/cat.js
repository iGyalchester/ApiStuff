const Cats = ({ cat, getCat }) => {
  const catImg = <div>{cat !== "" ? <img className="catPic" src={cat} alt="cure fuzzy fat thing" /> : ""}</div>;
  return (
    <div>
      <button onClick={getCat}>Launch new cat</button>
      <h3>Are you feline lucky?</h3>
      {catImg}
    </div>
  );
};

export default Cats;