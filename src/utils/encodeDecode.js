// Function to encode a string (URL-safe)
// export const encodeId = (id) => {
//   return encodeURIComponent(id);
// };

// export const decodeId = (encodedId) => {
//   try {
//     return decodeURIComponent(encodedId);
//   } catch (error) {
//     console.error("Failed to decode ID:", error);
//     return null;
//   }
// };

export const encodeId = (id) => {
  let encoded = btoa(id);

  encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return encoded;
};

export const decodeId = (encodedId) => {
  let base64 = encodedId.replace(/-/g, "+").replace(/_/g, "/");

  while (base64.length % 4) {
    base64 += "=";
  }
  try {
    const decoded = atob(base64);
    return decoded;
  } catch (error) {
    console.error("Failed to decode ID:", error);
    return null;
  }
};
