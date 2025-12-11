
// Ensure React is available
if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    console.error('React/ReactDOM not loaded.');
} else {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
        throw new Error("Could not find root element to mount to");
    }

    const root = ReactDOM.createRoot(rootElement);
    // Use window.App explicitly to handle script load order
    const AppComp = window.App;
    
    if (AppComp) {
        root.render(
            <React.StrictMode>
                <AppComp />
            </React.StrictMode>
        );
    } else {
        console.error("App component not found on window object.");
        rootElement.innerHTML = "<div style='color:red; padding: 20px;'>Error: App failed to load. Please check console.</div>";
    }
}
