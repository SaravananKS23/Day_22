const PrimaryButton = (props) => {
  return (
    <button className="btn btn-outline-dark" type="submit" onClick={props.onClick}>
        <i className="bi-cart-fill me-1"></i> <span className="badge bg-dark text-white ms-1 rounded-pill">{props.children}</span>
    </button>
  )
}

export default PrimaryButton;


