import './Card.css';

function Card(props) {

  return (
    <div className="card">
      <div>Name: {props.englishName}</div>
      <img className='card-image' src={props.image} alt="" />
      <div>Description: {props.description}</div>
      <div className='value' >Value: {props.value}</div>
    </div>
  );
}

export default Card;
