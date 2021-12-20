const buttonShare = document.querySelector(".article-share");
const shareOptions = document.querySelector(".share-details");

buttonShare.addEventListener("click", () => {
  const visibility = shareOptions.getAttribute("aria-hidden");
  const pressed = buttonShare.getAttribute("aria-pressed");
  if (visibility === "true") {
    shareOptions.setAttribute("aria-hidden", false);
    buttonShare.setAttribute("aria-pressed", true);
  } else {
    shareOptions.setAttribute("aria-hidden", true);
    buttonShare.setAttribute("aria-pressed", false);
  }
});
