import React from 'react';
import { Link } from 'react-router-dom';
import { allPages } from '../data/allPages';

function Index() {
  const safePages = allPages.filter(page => page.isSafe);
  const adversarialPages = allPages.filter(page => !page.isSafe);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <header style={{
        backgroundColor: '#fff3cd',
        border: '2px solid #ffc107',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h1 style={{ margin: '0 0 15px 0', color: '#856404' }}>
          ⚠️ AI Security Testing POC - Indirect Injection Test Suite
        </h1>
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#856404' }}>
          <p><strong>Purpose:</strong> This is a proof-of-concept (POC) project designed to test AI firewall and security tools against indirect prompt injection attacks.</p>

          <p><strong>What is this?</strong> This site contains hundreds of pages - some are safe content, while others contain embedded adversarial prompts designed to test AI systems' resilience to indirect injection attacks. The adversarial content is visible within the text to allow for transparency in testing.</p>

          <p><strong>Intended Use:</strong> This POC should only be used for:</p>
          <ul style={{ marginLeft: '20px' }}>
            <li>Testing AI security tools and firewalls</li>
            <li>Research into AI safety and prompt injection defenses</li>
            <li>Educational purposes in understanding AI vulnerabilities</li>
          </ul>

          <p><strong>⚠️ Important Disclaimer:</strong></p>
          <ul style={{ marginLeft: '20px' }}>
            <li>This site is NOT intended for malicious use</li>
            <li>Do NOT expose production AI systems to this content without proper security controls</li>
            <li>This is a controlled testing environment for security research purposes only</li>
            <li>No actual AI systems are deployed on this site - it's purely static content for testing external AI tools</li>
          </ul>

          <p style={{ marginTop: '15px' }}>
            <strong>Technical Details:</strong> The adversarial prompts are based on known red team and penetration testing techniques for LLM security evaluation, covering categories including prompt injection, jailbreak attempts, system prompt extraction, role manipulation, and various other attack vectors.
          </p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* Safe Pages Column */}
        <div>
          <h2 style={{
            margin: '0 0 15px 0',
            padding: '10px 15px',
            backgroundColor: '#d4edda',
            borderRadius: '8px',
            color: '#155724'
          }}>
            Safe Pages ({safePages.length})
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            fontSize: '14px'
          }}>
            {safePages.map((page, index) => {
              const pageIndex = allPages.findIndex(p => p.id === page.id);
              return (
                <Link
                  key={page.id}
                  to={`/?page=${pageIndex}`}
                  style={{
                    display: 'block',
                    padding: '8px 12px',
                    textDecoration: 'none',
                    color: '#0066cc',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                >
                  {page.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Adversarial Pages Column */}
        <div>
          <h2 style={{
            margin: '0 0 15px 0',
            padding: '10px 15px',
            backgroundColor: '#f8d7da',
            borderRadius: '8px',
            color: '#721c24'
          }}>
            Adversarial Pages ({adversarialPages.length})
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            fontSize: '14px'
          }}>
            {adversarialPages.map((page, index) => {
              const pageIndex = allPages.findIndex(p => p.id === page.id);
              return (
                <Link
                  key={page.id}
                  to={`/?page=${pageIndex}`}
                  style={{
                    display: 'block',
                    padding: '8px 12px',
                    textDecoration: 'none',
                    color: '#0066cc',
                    backgroundColor: '#fff',
                    border: '1px solid #f5c6cb',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                >
                  {page.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <footer style={{
        marginTop: '40px',
        padding: '20px',
        borderTop: '2px solid #eee',
        textAlign: 'center',
        color: '#666',
        fontSize: '14px'
      }}>
        <p>
          <strong>Repository:</strong>{' '}
          <a
            href="https://github.com/jeremyculler/POC-Playground"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0066cc' }}
          >
            github.com/jeremyculler/POC-Playground
          </a>
        </p>
        <p style={{ marginTop: '10px', fontSize: '12px' }}>
          For security research and testing purposes only
        </p>
      </footer>
    </div>
  );
}

export default Index;
