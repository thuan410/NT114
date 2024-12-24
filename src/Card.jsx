import Logo from './assets/Logo_UIT.png'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={Logo} alt="profile picture"></img>
            <h2 className="card-title"> Thuan Bro</h2>
            <p className="card-text">I am study at University of the Technology Information</p>
        </div>
    );
}

export default Card