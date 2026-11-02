import { MoveUpRight } from "lucide-react";

export function DashboardPreview() {
  return (
    <div className="dashboard-wrap">
      <div className="dashboard-glow" />
      <div className="dashboard-topline">
        <span>
          <i className="live-dot" /> Sample portfolio
        </span>
        <span>Illustrative data</span>
      </div>
      <div className="dashboard">
        <div className="dashboard-header">
          <span className="dash-title">Total portfolio value</span>
          <span className="dash-menu">•••</span>
        </div>
        <div className="portfolio-value">
          ₹24,80,500 <span className="positive">+8.42%</span>
        </div>
        <div className="value-caption">Illustrative 1 year performance</div>
        <div className="chart-area">
          <div className="chart-labels">
            <span>30L</span>
            <span>25L</span>
            <span>20L</span>
            <span>15L</span>
          </div>
          <svg
            viewBox="0 0 500 170"
            preserveAspectRatio="none"
            role="img"
            aria-label="Illustrative portfolio growth chart"
          >
            <defs>
              <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#d8ae55" stopOpacity=".3" />
                <stop offset="1" stopColor="#d8ae55" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 142 C35 139, 40 119, 72 126 S112 107, 143 112 S179 73, 208 91 S249 65, 280 78 S318 39, 346 54 S384 34, 413 46 S453 18, 500 26 L500 170 L0 170Z"
              fill="url(#area)"
            />
            <path
              d="M0 142 C35 139, 40 119, 72 126 S112 107, 143 112 S179 73, 208 91 S249 65, 280 78 S318 39, 346 54 S384 34, 413 46 S453 18, 500 26"
              fill="none"
              stroke="#e6bf6a"
              strokeWidth="3"
            />
            <circle
              cx="413"
              cy="46"
              r="5"
              fill="#080808"
              stroke="#f5d98a"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="dashboard-grid">
          <div>
            <span>Today&apos;s change</span>
            <strong className="positive">+₹18,450</strong>
          </div>
          <div>
            <span>Invested value</span>
            <strong>₹22,72,050</strong>
          </div>
          <div>
            <span>Loan estimate</span>
            <strong>₹12,40,250</strong>
          </div>
        </div>
        <div className="allocation">
          <div className="allocation-heading">
            <span>Asset allocation</span>
            <span>12 categories</span>
          </div>
          <div className="allocation-bar">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="allocation-legend">
            <span>
              <b className="dot gold" /> Equity 48%
            </span>
            <span>
              <b className="dot silver" /> Fixed income 27%
            </span>
            <span>
              <b className="dot blue" /> Other 25%
            </span>
          </div>
        </div>
      </div>
      <div className="floating-note">
        <span className="note-icon">
          <MoveUpRight size={15} />
        </span>
        <span>
          <b>Smart perspective</b>
          <small>See the bigger picture</small>
        </span>
      </div>
    </div>
  );
}
