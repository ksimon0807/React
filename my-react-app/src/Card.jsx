import profilePic from './assets/bruv.jpg'

function Card(){
    return(
        <div className = "card">
            <img className = "image" src={profilePic} alt = "Profile picture"/>
            <h2>Ujjawal</h2>
            <p>Student bitch ass boy short as fuck</p>
        </div>
    );
}

export default Card