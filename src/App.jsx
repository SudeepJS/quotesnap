import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const quotes = [
    {
      content: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      content: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      content: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      content: "If you want to achieve greatness stop asking for permission.",
      author: "Anonymous"
    },
    {
      content: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky"
    }
  ];

  const getQuote = () => {
    setLoading(true);
    setTimeout(() => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(random.content);
      setAuthor(random.author);
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    getQuote(); // Load one quote on app start
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📜 QuoteSnap</h1>
      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : (
        <>
          <p style={styles.quote}>"{quote}"</p>
          <p style={styles.author}>- {author}</p>
        </>
      )}
      <button onClick={getQuote} style={styles.button}>
        🔁 Generate New Quote
      </button>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '10%',
    padding: '20px',
    backgroundColor: '#111',
    color: '#fff',
    minHeight: '100vh'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#4e54c8',
  },
  quote: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  author: {
    fontSize: '1rem',
    color: '#aaa',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#4e54c8',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  loading: {
    fontStyle: 'italic',
    fontSize: '1.2rem',
  },
};

export default App;
