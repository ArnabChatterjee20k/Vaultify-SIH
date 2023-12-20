export function goToSpecificAccessor() {
  switch (selectedRole) {
    case "Lawyer":
      return "/lawyer"; // Replace with your lawyer route
    case "Client":
      return "/client"; // Replace with your client route
    case "Judge":
      return "/judge"; // Replace with your judge route
    default:
      // Handle default case or show an error message
      break;
  }
}
