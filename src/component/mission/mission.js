import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { joinMissionReducer } from "../../reduxreducers/missionSlice/mSlice";

const DisplayContent = () => {
    const dispatch = useDispatch();
    const missionState = useSelector((state) => state.missionSlice);

    const joinMission = (mid, reserved) => {
    dispatch(joinMissionReducer({ missionIdToJoin: mid, reserved }));
    };

    return (
    <>
    {missionState.isLoading ? (
    <h1>Loading...</h1>) : (
    <div>
        <table>
            <thead>
            <tr>
            <th style={{ width: '10%' }}>Mission</th>
            <th style={{ width: '70%' }}>Description</th>
            <th style={{ width: '10%' }}>Status</th>
            <th style={{ width: '10%' }}></th>
            </tr>
            </thead>
        <tbody>
            {missionState.data.map((mission) => (
            <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>
            <button
                type="button"
                className={mission.reserved ? 'active-member-button' : 'not-a-member-button'}>
                {mission.reserved ? 'Active Member' : 'Not a Member'}
            </button>
                </td>
                <td>
            <button
                type="button"
                className={mission.reserved ? 'join-mission' : 'not-join-mission'}
                onClick={() => { joinMission(mission.mission_id, mission.reserved); }}>
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
            </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
)} 
    </>
    );
};

export default DisplayContent;
