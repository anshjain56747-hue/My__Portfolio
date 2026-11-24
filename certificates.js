/**
 * Certificate image viewer.
 * Loaded after app.js, so the DOM is already rendered by the time this runs.
 * Closing the modal (X, Close button, backdrop click, Escape) is handled by
 * the generic modal logic in app.js.
 */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("certImageModal");
  if (!modal) return;

  const titleEl = document.getElementById("certImageTitle");
  const issuerEl = document.getElementById("certImageIssuer");
  const imgEl = document.getElementById("certImageFull");
  const missingEl = document.getElementById("certImageMissing");
  const downloadEl = document.getElementById("certImageDownload");

  const open = (btn) => {
    const title = btn.getAttribute("data-cert-title") || "Certificate";
    const issuer = btn.getAttribute("data-cert-issuer") || "";
    const year = btn.getAttribute("data-cert-year") || "";
    const src = btn.getAttribute("data-cert-image") || "";

    titleEl.textContent = title;
    issuerEl.textContent = `${issuer} • ${year}`.toUpperCase();
    imgEl.alt = `${title} certificate`;
    missingEl.hidden = true;
    imgEl.hidden = false;

    imgEl.onerror = () => {
      imgEl.hidden = true;
      missingEl.hidden = false;
      downloadEl.style.display = "none";
    };
    imgEl.src = src;

    downloadEl.style.display = "";
    downloadEl.href = src;
    downloadEl.setAttribute("download", src.split("/").pop() || "certificate.png");

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  document.querySelectorAll(".cert-image-btn").forEach((btn) => {
    btn.addEventListener("click", () => open(btn));
  });

  // Clear the image when the modal closes so it doesn't flash old content next time
  new MutationObserver(() => {
    if (!modal.classList.contains("show")) imgEl.removeAttribute("src");
  }).observe(modal, { attributes: true, attributeFilter: ["class"] });
});
