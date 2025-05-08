import Clock from "./components/Clock";
export default function HomePage() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">📊 Welcome to the Dashboard</h1>
      <Clock />
    </main>
  );
}
