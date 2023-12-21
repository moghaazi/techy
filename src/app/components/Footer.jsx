export default function Footer() {
  const footerStyles = {
    backgroundColor: 'white',
    overflow: 'hidden',
    color: 'black',
    width: '100%',
    height: '80rem',
    fontSize: '1.5rem',
  };

  const waveImageStyles = {
    width: '100%',
    bottom: 0,
    transform: 'rotate(180deg)',
  };

  const containerStyles = {
    margin: '0 auto',
    maxWidth: '1200px',
    padding: '20px',
  };

  return (
    <footer style={footerStyles}>
      <img src="wave.svg" alt="wave" style={waveImageStyles} />
      <div style={containerStyles}>
        <p>&copy; 2023 Techy. All rights reserved.</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam molestiae ipsam obcaecati rerum nesciunt corrupti? Sint, illum minima reiciendis atque doloremque laborum dicta rem consectetur, inventore incidunt natus omnis distinctio.
        </p>
      </div>
    </footer>
  );
}
