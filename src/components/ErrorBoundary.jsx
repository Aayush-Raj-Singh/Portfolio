import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-boundary" id="main">
          <p className="error-boundary-eyebrow">Portfolio status</p>
          <h1>Something did not load as expected.</h1>
          <p>
            Please reload the page. You can also contact Aayush directly if the
            problem continues.
          </p>
          <div className="error-boundary-actions">
            <button type="button" onClick={() => window.location.reload()}>
              Reload portfolio
            </button>
            <a href="mailto:aayush15raj0@gmail.com">Email Aayush</a>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
