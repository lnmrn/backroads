import { useReload } from "../hooks/useReload";

function ErrorMessage() {
  const reload = useReload();
  return (
    <div className="error-wrapper">
      <div className="error-card">
        <i className="fa fa-exclamation-circle pulse"></i>
        <p className="error-message">Oops, something slipped!</p>

        <div className="error-actions">
          <button className="btn" onClick={reload}>
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
