export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: '2px solid blue', padding: '1rem' }}>
      <h3>⚙️ Settings Panel</h3>
      <div>{children}</div>
    </div>
  );
}
