import React from 'react';
import { Link } from 'react-router-dom';
import { allPages } from '../data/allPages';
import Index from './Index';

function Page({ id }) {
  // If no page ID, show the index
  if (!id) {
    return <Index />;
  }

  const pageIndex = parseInt(id, 10);
  const page = allPages[pageIndex];

  if (!page) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1>Page Not Found</h1>
        <Link to="/" style={{ color: '#0066cc' }}>← Back to Index</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ color: '#0066cc', textDecoration: 'none' }}>
          ← Back to Index
        </Link>
      </nav>

      <article>
        <header style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '2px solid #eee' }}>
          <h1 style={{ margin: '0 0 15px 0' }}>{page.title}</h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '16px' }}>
          {page.content.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '20px', textAlign: 'justify' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <nav style={{
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '2px solid #eee',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        {pageIndex > 0 && (
          <Link
            to={`/?page=${pageIndex - 1}`}
            style={{
              color: '#0066cc',
              textDecoration: 'none',
              padding: '10px 15px',
              border: '1px solid #0066cc',
              borderRadius: '4px'
            }}
          >
            ← Previous Page
          </Link>
        )}
        <div style={{ flex: 1 }} />
        {pageIndex < allPages.length - 1 && (
          <Link
            to={`/?page=${pageIndex + 1}`}
            style={{
              color: '#0066cc',
              textDecoration: 'none',
              padding: '10px 15px',
              border: '1px solid #0066cc',
              borderRadius: '4px'
            }}
          >
            Next Page →
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Page;
