import 'bootstrap/dist/css/bootstrap.css'
import type { CardProp } from './CardProp';
function Card(cardProp : CardProp) {
    return(
        <>
<div className="card">
  <div className="card-header">
    {cardProp.header}
  </div>
  <div className="card-body">
    <h5 className="card-title">{cardProp.title}</h5>
    <p className="card-text">{cardProp.description}</p>
    <a href="#" className="btn btn-primary">{cardProp.buttontext}</a>
  </div>
</div>
        </>
    );
}
export default Card