import '../App.css';
import Avatar from '../Avatar.png'
function Profile() {
  return (
    <div id="profile">
        <img src={Avatar} alt="there must be shrek Avatar"/>
        <div id="profileTextBlock">
            <p id="profileFullName" title="Shrek Ogrbekuly ibnShrek Ogrbekuly asdShrek Ogrbekuly Shrek Ogrbekuly">
                Shrek Ogrbekuly ibnShrek Ogrbekuly asdShrek Ogrbekuly Shrek Ogrbekuly
            </p>
            <p id="profileNick">
                @shrek
            </p>
        </div>
    </div>
  );
}

export default Profile;
