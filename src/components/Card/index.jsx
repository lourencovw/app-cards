import './Card.css';

function Card(props) {
  const MAX_VALUE = 10;
  const value = Math.floor(Math.random() * MAX_VALUE) + 1;

  return (
    <div className="card">
      <div>Name: {props.englishName}</div>
      <img className='card-image' src={props.image} alt="" />
      <div>Description: {props.description}</div>
      <div className='value' >Value: {value}</div>
    </div>
  );
}

export default Card;
