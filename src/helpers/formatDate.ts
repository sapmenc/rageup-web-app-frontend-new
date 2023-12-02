function formatDate(inputString: string): string {
  const inputDate = new Date(inputString);

  if (isNaN(inputDate.getTime())) {
    // Invalid date, return an empty string
    return "";
  }

  const day = String(inputDate.getDate()).padStart(2, "0");
  const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const year = inputDate.getFullYear();

  return `${day}/${month}/${year}`;
}

export default formatDate;
