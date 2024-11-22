import { NavLink } from"react-router-dom";

function NavigationBar(){

return(
    <nav className='clearfix'>
    <NavLink to = '/homepage' activeClassName='active'>HomePage</NavLink>  
    <NavLink to = '/character-list' activeClassName='active'>Characters</NavLink>
    <NavLink to ='/characters' activeClassName="active">Character Info</NavLink>
    <NavLink to = '/comics' activeClassName='active'>Comics</NavLink>
    </nav>

    )
}
export default NavigationBar;