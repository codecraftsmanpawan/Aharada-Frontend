// src/utils/encodeDecode.js

// Function to encode a string to Base64 (URL-safe)
export const encodeId = (id) => {
  // Encode to standard Base64
  let encoded = btoa(id);
  // Make it URL-safe
  encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return encoded;
};

// Function to decode a URL-safe Base64 string back to original
export const decodeId = (encodedId) => {
  // Revert URL-safe characters to standard Base64
  let base64 = encodedId.replace(/-/g, "+").replace(/_/g, "/");
  // Pad with '=' to make the length a multiple of 4
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
