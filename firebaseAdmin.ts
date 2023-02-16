import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const serviceAcc = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAcc),
  });
}

const adminDb = admin.firestore();

export { adminDb };
