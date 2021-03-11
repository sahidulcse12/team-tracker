import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {

    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    const selectTeam = teams.slice(0, 15);
    //console.log(team);

    return (
        <div>
            <div className="home-part">
                <h3>Team Tracker</h3>
            </div>

            <div className="row">
                {
                    selectTeam.map(team => <Teams team={team} key={team.idLeague}></Teams>)
                }
            </div>

        </div>
    );
};

export default Home;