const Team = () => {
  const teamStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '20px',
  };

  const memberStyles = {
    textAlign: 'center',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  };

  const imageStyles = {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '15px',
  };

  const hoverStyles = {
    transform: 'translateY(-5px)',
  };

  return (
    <div style={teamStyles}>
      <h1>Our Team</h1>
        <img src="/team/me.jpg" alt="Team Member 1" style={imageStyles} />
        <img src="/team/me.jpg" alt="Team Member 1" style={imageStyles} />
        <img src="/team/me.jpg" alt="Team Member 1" style={imageStyles} />
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>Ahmad Moghazi</h3>
        <p style={{ fontSize: '1rem', color: '#777' }}>Web Dev</p>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>Ahmad Moghazi</h3>
        <p style={{ fontSize: '1rem', color: '#777' }}>Web Dev</p>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>Ahmad Moghazi</h3>
        <p style={{ fontSize: '1rem', color: '#777' }}>Web Dev</p>

     
    </div>
  );
};

export default Team;

