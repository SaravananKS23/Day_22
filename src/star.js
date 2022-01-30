import ReactStars from "react-rating-stars-component";

const secondExample = {
  size: "0.875em",
  count: 5,
  color: "black",
  activeColor: "#ffc107",
  value: 1,
  a11y: true,
  isHalf: true,
  emptyIcon: <i className="bi-star" />,
  halfIcon: <i className="bi-star-half" />,
  filledIcon: <i className="bi-star-fill" />,
  onChange: newValue => {
    return newValue;
  }
};


export default function Star() {
  return (
    <div className="App">
      <ReactStars {...secondExample}/> 
    </div>
  );
}
