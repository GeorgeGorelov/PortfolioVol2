// Reveal button

document.querySelector(".reveal-btn").addEventListener("click", function () {
  const hiddenContent = document.querySelector(".hidden-content");

  if (hiddenContent.classList.contains("show")) {
    // If content is visible, hide it by setting max-height to 0
    hiddenContent.style.maxHeight = 0;
    hiddenContent.classList.remove("show");
  } else {
    // Set max-height to the scrollHeight of the element (its full height)
    hiddenContent.style.maxHeight = hiddenContent.scrollHeight + "px";
    hiddenContent.classList.add("show");
  }
});

// odd num

// Get all boxes
const boxes = document.querySelectorAll(".homeProjects");

// Loop through each box
boxes.forEach((box) => {
  // Get all the items inside the current box
  const items = box.querySelectorAll("a");

  // Get the total number of items in the current box
  const totalItems = items.length;

  // Check if the last item index is odd (1-based index)
  if (totalItems % 2 !== 0) {
    // If odd, add margin auto to the last item in the current box
    const lastItem = items[totalItems - 1];
    lastItem.style.margin = "auto";
    lastItem.classList.add("odd"); // Optional: Add a class to style the odd element
  }
});
