import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
    const missionState = useSelector((state) => state.missionSlice);
    const rocketState = useSelector((state) => state.rocketSlice);

    const reservedRockets = rocketState.rockets.filter((rocket) => rocket.reserved);
    const joinedMissions = missionState.data.filter((mission) => mission.reserved);

return (
    <>
    {missionState.isLoading ? (
        <h1>Loading...</h1>) : (
        <div className="user-profile-container">
            <div>
            <h1 className="profile-title">My Missions</h1>
            <ul>
                {joinedMissions.map((mission) => (
                <li className="profile-item" key={mission.mission_id}>
                    {mission.mission_name}
                </li>
                ))}
            </ul>
            </div>
        <div>
            <h1 className="profile-title">My Rockets</h1>
            <ul>
                {reservedRockets.map((rocket) => (
                <li className="profile-item" key={rocket.id}>
                    {rocket.name}
                </li>
                ))}
            </ul>
        </div>
        </div>
        )}
    </>
);
}

export default MyProfile;