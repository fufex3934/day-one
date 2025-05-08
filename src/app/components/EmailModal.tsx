'use client';
import { useRouter } from 'next/navigation';



export default function EmailModal({ emailId }: {emailId:string}) {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // closes the modal and returns to inbox
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -20%)',
        backgroundColor: 'white',
        padding: '2rem',
        border: '2px solid #888',
        borderRadius: '8px',
        zIndex: 1000,
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      }}
    >
      <h3>📬 Email #{emailId}</h3>
      <p>This is shown as a modal using an intercepting route!</p>
      <button onClick={handleClose} style={{ marginTop: '1rem' }}>
        Close
      </button>
    </div>
  );
}
