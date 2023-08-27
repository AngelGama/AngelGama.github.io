import PropTypes from 'prop-types';

export const CertificationCard = ({ name,
    issuingOrganization,
    issueDate,
    credentialUrl,
    skills,
    imageUrl,
}) => {

    return (
        <div className='certification'>
            <img src={imageUrl} alt={`${issuingOrganization} Logo`} />
            <div>
                <h1>{name}</h1>
                <h2>{issueDate}</h2>
                <a href={credentialUrl} target="_blank" rel="noopener noreferrer">View Credential</a>
                <p>Skills: {skills.join(', ')}</p>
            </div>
        </div>
    );
}

CertificationCard.propTypes = {
    name: PropTypes.string.isRequired,
    issuingOrganization: PropTypes.string.isRequired,
    issueDate: PropTypes.string.isRequired,
    credentialUrl: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    imageUrl: PropTypes.string.isRequired,
};