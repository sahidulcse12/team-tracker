import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Teams = (props) => {

    const { strTeam, strLeague, strTeamBadge, idTeam } = props.team;
    //console.log(idLeague);

    const history = useHistory();

    const handleButton = (idTeam) => {
        const url = `/team/${idTeam}`;
        history.push(url);
    }
    //console.log(idLeague);


    return (
        <div className="col-md-4 single-team">

            <img src={strTeamBadge} alt="" />
            <h2>{strTeam}</h2>
            <p>{strLeague}</p>
            <Button onClick={() => handleButton(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>

        </div>
    );
};

export default Teams;