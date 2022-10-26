/* submit of form */
const $form = document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const form = new FormData(this);
  const $respont = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if ($respont.ok) {
    this.reset();
  } else {
    console.log("Error: " + $respont.message);
  }
}