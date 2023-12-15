import Link from 'next/link';

export default function ErrorPage() {
  const styles = {
    errorPage: {
      height: '100vh',
      background: `linear-gradient(rgba(192, 10, 116, 0.479), rgb(0, 0, 0)), url(404.gif)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    title: {
      color: '#ffffff',
      fontFamily: 'Roboto',
      fontSize: '12em',
      fontWeight: 'bold',
    },
    code: {
      color: '#d81b89',
      marginLeft: '20px',
      fontSize: '17rem',
    },

    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1.5rem',
      position: 'absolute',
      bottom: '20px',
    }
  };

  return (
    <div style={styles.errorPage}>
      <h1 style={styles.title}>
        Error
        <span style={styles.code}>404</span>
      </h1>
      <Link href="/" style={styles.link}>Go Back</Link>
    </div>
  );
}
