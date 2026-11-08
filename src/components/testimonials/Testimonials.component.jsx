import { useEffect } from "react";

export default function Testimonials() {
  useEffect(() => {
    // Ensure Elfsight platform script is loaded
    const scriptId = "elfsight-platform-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Enhance card styling & hide "Review us on Google" button across all shadow roots and DOM
    const applyCustomWidgetStyles = () => {
      const widget = document.querySelector(".elfsight-app-9ffcdd95-6d23-4c5a-8dfa-53cbeed9adcb");
      if (!widget) return;

      // Find all nested shadow roots
      const shadowRoots = [];
      const traverse = (node) => {
        if (!node) return;
        if (node.shadowRoot) {
          shadowRoots.push(node.shadowRoot);
          traverse(node.shadowRoot);
        }
        if (node.children) {
          Array.from(node.children).forEach(traverse);
        }
      };
      traverse(widget);

      // Hide in standard DOM (if any elements are outside shadow DOM)
      const normalButtons = widget.querySelectorAll(
        '[class*="write-review"], [class*="WriteReview"], a[href*="writereview"]'
      );
      normalButtons.forEach((btn) => {
        btn.style.setProperty("display", "none", "important");
      });

      // Style and hide inside every shadow root
      shadowRoots.forEach((sr) => {
        let style = sr.getElementById("custom-card-contrast-styles");
        if (!style) {
          style = document.createElement("style");
          style.id = "custom-card-contrast-styles";
          sr.appendChild(style);
        }
        style.textContent = `
          .es-review-container,
          [class*="Review__ReviewContainer"],
          [class*="ReviewContainer"] {
            background-color: #ffffff !important;
            border: 1px solid rgba(0, 0, 0, 0.08) !important;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03) !important;
            border-radius: 20px !important;
            transition: transform 0.25s ease, box-shadow 0.25s ease !important;
          }
          .es-review-container:hover,
          [class*="Review__ReviewContainer"]:hover {
            transform: translateY(-4px) !important;
            box-shadow: 0 20px 30px -5px rgba(0, 0, 0, 0.12), 0 10px 15px -5px rgba(0, 0, 0, 0.04) !important;
          }
          /* Hide "Review us on Google" button */
          [class*="write-review"],
          [class*="WriteReview"],
          [class*="header-write-review"],
          [class*="HeaderWriteReview"],
          a[href*="writereview"] {
            display: none !important;
          }
        `;

        // Direct DOM hide inside shadow DOM
        const srButtons = sr.querySelectorAll(
          '[class*="write-review"], [class*="WriteReview"], a[href*="writereview"]'
        );
        srButtons.forEach((btn) => {
          btn.style.setProperty("display", "none", "important");
        });
      });
    };

    const interval = setInterval(applyCustomWidgetStyles, 250);
    const timeout = setTimeout(() => clearInterval(interval), 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="mb-32 overflow-hidden py-16 relative">
      <div className="text-center mb-16 px-4">
        <h2 className="text-gray-500 uppercase tracking-[0.2em] mb-2 font-medium">Testimonials</h2>
        <h1 className="text-4xl md:text-5xl font-nura text-primary">Voices of Trust</h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">See what our partners have to say about their journey with us.</p>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div
          className="elfsight-app-9ffcdd95-6d23-4c5a-8dfa-53cbeed9adcb"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
