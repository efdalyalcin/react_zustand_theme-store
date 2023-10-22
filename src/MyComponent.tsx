import useThemeStore from './store';

function MyComponent() {
  const { isDarkTheme, toggleTheme } = useThemeStore();

  // ...

  return (
    <div style={{ padding: '10px 20px', border: '1px dotted black' }}>
      <p>Theme toggle component</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Is it dark theme: {isDarkTheme ? 'YES' : 'NO'}</p>
    </div>
  );
}

export default MyComponent;
