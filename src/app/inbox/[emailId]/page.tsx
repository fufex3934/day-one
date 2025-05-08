

export default async function FullPageEmail({ params }: {params:Promise<{emailId:string}>}) {
  const {emailId} = await params;
  return (
    <div style={{ padding: '1rem' }}>
      <h2>📧 Email #{emailId}</h2>
      <p>This is the full-page fallback view (e.g. direct visit).</p>
    </div>
  );
}
