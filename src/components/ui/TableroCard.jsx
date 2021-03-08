import {Link} from 'react-router-dom';

const TableroCard = (props) => {
    return ( 
        <Link to={props.url}>
        <div className="flex flex-col flex-grow ml-4">
          <div className="font-bold text-white text-lg">{props.titulo}</div>
          <div className="text-sm text-white">{props.cont}</div>
        </div>
        </Link>
     );
}
 
export default TableroCard;