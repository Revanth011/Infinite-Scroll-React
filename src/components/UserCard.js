import "./UserCard.css"

function UserCard({ userData }) {
    return (
        <div className="userCardContainer">
            <div className="userCardTop">
                <img src={userData.picture.large} alt="" className="userImage" />
                <div className="userCardTopRight">
                    <span className="userCard-userName">{userData.login.username}</span>
                    <span className="userCard-firstName">First Name - {userData.name.first}</span>
                    <span className="userCard-lastName">Last Name - {userData.name.last}</span>
                </div>
            </div>
            <div className="userCardDetails">
                <div className="userCardDetails-first">
                    <span className="userCard-DOB">
                        <span id="textBold">DOB </span>
                        {userData.dob.date}
                    </span>
                    <span className="userCard-email">
                        <span id="textBold">Email </span>
                        {userData.email}
                    </span>
                    <span className="userCard-contact">
                        <span id="textBold">Phone </span>
                        Q29 A39-5995
                    </span>
                </div>
                <div className="userCardDetails-location">
                    <span><span id="textBold">Location </span>{userData.location.street.number} {userData.location.street.name} {userData.location.city}
                        {userData.location.state} {userData.location.country} {userData.location.postcode}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
