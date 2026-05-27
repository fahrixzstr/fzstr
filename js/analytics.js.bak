import { db } from "./firebase.js";
import { ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

export function trackVisitor() {
  const visitor = {
    time: Date.now(),
    userAgent: navigator.userAgent
  };

  const vRef = push(ref(db, "visitors"));
  set(vRef, visitor);
}