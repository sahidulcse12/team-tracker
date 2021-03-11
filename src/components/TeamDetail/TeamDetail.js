import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMars, faPodcast } from '@fortawesome/free-solid-svg-icons';
import Male from '../Images/male.png';
import Female from '../Images/female.png';


const TeamDetail = () => {

    const { idTeam } = useParams();

    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams))
    }, [idTeam])


    const showImage = (image) => {
        if (image === 'Male') {
            return <div><img src={Male} alt="" /></div>
        } else {
            return <div><img src={Female} alt="" /></div>
        }
    }

    return (
        <div className="background">
            {
                teamDetails.map(teamDetail => (
                    <div>
                        <div className="team-logo">
                            <img src={teamDetail.strTeamBanner} alt="" />
                        </div>
                        <div className="container team-details">
                            <div className="row">
                                <div className="col-md-6 description">
                                    <h2>{teamDetail.strTeam}</h2><br />
                                    <h4><FontAwesomeIcon icon={faPodcast} /> Founded : {teamDetail.intFormedYear}</h4>
                                    <h4><FontAwesomeIcon icon={faFlag} /> Country : {teamDetail.strCountry}</h4>
                                    <h4><FontAwesomeIcon icon={faFutbol} /> Sports Type : {teamDetail.strSport}</h4>
                                    <h4><FontAwesomeIcon icon={faMars} /> Gender : {teamDetail.strGender}</h4>
                                </div>
                                <div className="col-md-6 picture">
                                    {
                                        showImage(teamDetail.strGender)
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="content container">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
                                <br /> <br />

                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>

                        <div className="social-icons">
                            <a target="_blank" href={`https://${teamDetail.strTwitter}`}><FontAwesomeIcon icon={faTwitter} /></a>
                            <a target="_blank" href={`https://${teamDetail.strFacebook}`}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a target="_blank" href={`https://${teamDetail.strYoutube}`}><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>

                    </div>


                ))
            }
        </div>
    );
};

export default TeamDetail;