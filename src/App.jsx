function App() {
  return (
    <div>
      {/* Test with inline styles first */}
      <div style={{ backgroundColor: 'blue', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Inline Styles Test</h1>
        <p>This should work regardless of Tailwind</p>
      </div>
      
      {/* Test with Tailwind classes */}
      <div className="bg-red-500 text-white p-8 text-center mt-4">
        <h1 className="text-4xl font-bold">Tailwind Test</h1>
        <p className="text-xl">This should be red if Tailwind works</p>
      </div>
      
      {/* Simple class name test */}
      <div className="test-class" style={{ marginTop: '20px', padding: '10px', border: '2px solid green' }}>
        <p>Regular CSS test with green border</p>
      </div>
    </div>
  );
}

export default App;