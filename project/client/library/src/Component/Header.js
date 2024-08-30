import {Link} from "react-router-dom";
export default function Header()
{
    return(<>
    
    <Link to="/"> Home |</Link>
    <Link to="/addstudent"> Add Student |</Link>
    <Link to="/deletestudent"> Delete Student |</Link>
    <Link to="/addbook"> Add Book |</Link>
    <Link to="/deletebook"> Delete Book</Link>
    </>);
}